import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import useDebounce from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';
import { useNavigate } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

export default function SearchBox({ onClose }: Props) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 350);
  const [isOpen, setIsOpen] = useState(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const query = useQuery<any[], Error>({
    queryKey: ['searchSuggestions', debounced],
    queryFn: async () => {
      if (!debounced || debounced.trim().length < 1) return [];
      const r = await apiService.searchRestaurants(debounced);
      return r.data || [];
    },
  enabled: Boolean(debounced && debounced.trim().length > 0),
  });

  const suggestions: any[] = (query.data as any) || [];
  const isLoading = query.isLoading;
  const error = query.error;

  useEffect(() => {
    setIsOpen(suggestions.length > 0);
    setHighlight(-1);
  }, [suggestions]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlight((h) => Math.min(h + 1, suggestions.length - 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlight((h) => Math.max(h - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (highlight >= 0 && suggestions[highlight]) {
          handleSelect(suggestions[highlight]);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    }

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, highlight, suggestions]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  function handleSelect(item: any) {
    // For now, just navigate to restaurant page if it has id, else close and set value
    if (item?.id) {
      navigate(`/restaurants/${item.id}`);
      onClose();
      return;
    }
    setValue(item?.name || '');
    setIsOpen(false);
  }

  return (
    <div ref={containerRef} className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => setValue((e.target as HTMLInputElement).value)}
        placeholder="Search for restaurants, cuisines, and dishes"
        className="pl-12 pr-12 py-4 text-lg bg-background border-border"
        autoFocus
      />

      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        onClick={() => {
          if (value) setValue('');
          else onClose();
        }}
      >
        <X className="h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-background border border-border rounded-md shadow-lg z-50 max-h-64 overflow-auto">
          {isLoading && <div className="p-3 text-sm text-muted-foreground">Loading...</div>}
          {error && (
            <div className="p-3 text-sm text-destructive">Error: {error.message}</div>
          )}
          {!isLoading && !error && suggestions.length === 0 && (
            <div className="p-3 text-sm text-muted-foreground">No results</div>
          )}
          {!isLoading && suggestions.map((s: any, idx: number) => (
            <button
              key={s.id ?? `${s.name}-${idx}`}
              onClick={() => handleSelect(s)}
              onMouseEnter={() => setHighlight(idx)}
              className={`w-full text-left px-4 py-3 hover:bg-accent/50 transition-colors ${highlight === idx ? 'bg-accent/40' : ''}`}
            >
              <div className="text-sm font-medium">{s.name}</div>
              {s.cuisine && <div className="text-xs text-muted-foreground">{s.cuisine}</div>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
