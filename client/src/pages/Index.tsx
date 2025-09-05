import { useState, useMemo } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import RestaurantCard from "@/components/RestaurantCard";
import PromoBanner from "@/components/PromoBanner";
import DailyDeals from "@/components/DailyDeals";
import CuisinesCarousel from "@/components/CuisinesCarousel";
import RestaurantSection from "@/components/RestaurantSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useRestaurants } from "@/hooks/useApi";

const Index = () => {
  const { restaurants, loading, error } = useRestaurants();
  const [filters, setFilters] = useState({
    sortBy: 'relevance',
    freeDelivery: false,
    deals: false,
  });

  const filteredRestaurants = useMemo(() => {
    if (!restaurants.length) return [];
    let filtered = [...restaurants];

    // Helper: extract the lower bound minute from strings like "10-25 min" or "5-20 min"
    const getDeliveryLower = (dt: string) => {
      const m = dt.match(/(\d+)/);
      return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
    };

    // Apply sorting and filtering
    if (filters.sortBy === 'fastest') {
      // show only fastDelivery restaurants, and sort them by lower delivery time
      filtered = filtered
        .filter((r) => r.fastDelivery)
        .sort((a, b) => getDeliveryLower(a.deliveryTime) - getDeliveryLower(b.deliveryTime));
    } else if (filters.sortBy === 'distance') {
      // distance isn't available in sample data, use deliveryTime lower bound as a proxy
      filtered = filtered.sort((a, b) =>
        getDeliveryLower(a.deliveryTime) - getDeliveryLower(b.deliveryTime)
      );
    }

    if (filters.freeDelivery) {
      filtered = filtered.filter(r => r.freeDelivery);
    }

    if (filters.deals) {
      filtered = filtered.filter(r => r.deals);
    }

    return filtered;
  }, [filters]);

  const showAllSections = filters.sortBy === 'relevance' && !filters.freeDelivery && !filters.deals;

  const newRestaurants = restaurants.filter(r => r.isNew);
  const discountRestaurants = restaurants.filter(r => r.category === 'discount');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <LoadingSpinner message="Loading restaurants..." />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-red-500">Error loading restaurants: {error}</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <FilterSidebar filters={filters} onFiltersChange={setFilters} />
          
          {/* Main content */}
          <div className="flex-1">
            {/* Show all sections only when no filters are applied */}
            {showAllSections && (
              <>
                {/* Promo banner */}
                <PromoBanner />
                
                {/* Daily Deals */}
                <DailyDeals />
                
                {/* Cuisines */}
                <CuisinesCarousel />
                
                {/* New on foodpanda */}
                <RestaurantSection 
                  title="New on foodpanda" 
                  restaurants={newRestaurants}
                />
                
                {/* Up to 30% off */}
                <RestaurantSection 
                  title="up to 30% off" 
                  restaurants={discountRestaurants}
                />
                
                {/* All restaurants */}
                <RestaurantSection 
                  title="All restaurants" 
                  restaurants={restaurants}
                />
              </>
            )}

            {/* Show filtered results when filters are applied */}
            {!showAllSections && (
              <>
                {/* Results count */}
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-foreground">
                    {filteredRestaurants.length} Restaurants found
                  </h1>
                </div>
                
                {/* Restaurant grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <RestaurantCard
                      key={restaurant.id}
                      {...restaurant}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
