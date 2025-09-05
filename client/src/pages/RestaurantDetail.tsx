import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@/services/api';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Clock, DollarSign } from 'lucide-react';

export default function RestaurantDetail() {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['restaurant', id],
    queryFn: async () => {
      if (!id) throw new Error('Missing id');
      const resp = await apiService.getRestaurantById(id);
      return resp.data;
    },
    enabled: Boolean(id),
  });

  if (isLoading) return <div className="container mx-auto px-4 py-6"><LoadingSpinner message="Loading restaurant..." /></div>;
  if (error) return <div className="container mx-auto px-4 py-6 text-red-500">Error loading restaurant</div>;

  const r: any = data;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <Card>
          <div className="relative overflow-hidden rounded-t-lg">
            <img src={r.image} alt={r.name} className="h-64 w-full object-cover" />
          </div>
          <CardContent>
            <h2 className="text-2xl font-bold mb-2">{r.name}</h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1"><Star className="h-4 w-4" />{r.rating}</div>
              <div className="text-sm text-muted-foreground">{r.cuisine}</div>
              <div className="text-sm text-muted-foreground"><Clock className="h-4 w-4" /> {r.deliveryTime}</div>
              <div className="text-sm text-muted-foreground"><DollarSign className="h-4 w-4" /> {r.priceRange}</div>
            </div>
            <p className="text-sm text-muted-foreground">{r.description || ''}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
