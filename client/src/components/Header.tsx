import { MapPin, ShoppingCart, Search, Bike, Package, Store, UtensilsCrossed, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import SearchBox from '@/components/SearchBox';

const Header = () => {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  
  const popularSearches = [
    "Pizza", "Burger", "Chinese", "BBQ", "Biryani", 
    "Fast Food", "Desserts", "Coffee"
  ];

  const navItems = [
    { name: "Delivery", icon: Bike, active: true },
    { name: "Pick-up", icon: Package, active: false },
    { name: "pandamart", icon: Store, active: false },
    { name: "Shops", icon: Store, active: false },
    { name: "Caterers", icon: UtensilsCrossed, active: false },
  ];

  return (
    <header className="bg-background border-b">
      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-foodpanda-pink">foodpanda</div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-sm text-foreground">
            <MapPin className="h-4 w-4" />
            <span>New address Service Road W Islamabad</span>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-foreground border-border hover:bg-accent">
              Log in
            </Button>
            <Button size="sm" className="bg-foodpanda-pink hover:bg-foodpanda-dark-pink text-white">
              Sign up for free delivery
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground">
              EN
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation and Search */}
        <div className="flex items-center justify-between mt-4">
          {/* Navigation tabs */}
          <nav className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  className={`flex items-center space-x-2 pb-3 text-sm font-medium transition-colors border-b-2 ${
                    item.active
                      ? "border-foodpanda-pink text-foodpanda-pink"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Search */}
          <div className="relative">
            <div className="relative w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for restaurants, cuisines, and dishes"
                className="pl-10 bg-background border-border cursor-pointer"
                onClick={() => setIsSearchExpanded(true)}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Search Overlay */}
      {isSearchExpanded && (
        <>
          <div 
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsSearchExpanded(false)}
          />
          <div className="absolute top-0 left-0 right-0 bg-background border-b shadow-lg z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              {/* Search Input */}
              <SearchBox
                onClose={() => setIsSearchExpanded(false)}
              />

              {/* Popular Searches */}
              <div className="bg-muted/20 rounded-lg p-4">
                <h3 className="text-sm font-medium text-foreground mb-3">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search) => (
                    <button
                      key={search}
                      className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-foreground hover:bg-accent transition-colors"
                      onClick={() => setIsSearchExpanded(false)}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;