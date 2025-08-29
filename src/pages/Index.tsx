import { useState, useMemo } from "react";
import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import RestaurantCard from "@/components/RestaurantCard";
import PromoBanner from "@/components/PromoBanner";
import DailyDeals from "@/components/DailyDeals";
import CuisinesCarousel from "@/components/CuisinesCarousel";
import RestaurantSection from "@/components/RestaurantSection";
import { restaurants } from "@/data/restaurants";

const Index = () => {
  const [filters, setFilters] = useState({
    sortBy: 'relevance',
    freeDelivery: false,
    deals: false,
  });

  const filteredRestaurants = useMemo(() => {
    let filtered = [...restaurants];

    // Apply sorting and filtering
    if (filters.sortBy === 'fastest') {
      filtered = filtered.filter(r => r.fastDelivery);
    } else if (filters.sortBy === 'distance') {
      filtered = filtered.sort((a, b) => 
        parseInt(a.deliveryTime) - parseInt(b.deliveryTime)
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
