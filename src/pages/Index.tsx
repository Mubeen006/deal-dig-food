import Header from "@/components/Header";
import FilterSidebar from "@/components/FilterSidebar";
import RestaurantCard from "@/components/RestaurantCard";
import PromoBanner from "@/components/PromoBanner";
import { restaurants } from "@/data/restaurants";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <FilterSidebar />
          
          {/* Main content */}
          <div className="flex-1">
            {/* Promo banner */}
            <PromoBanner />
            
            {/* Results count */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-foreground">
                {restaurants.length} Restaurants found
              </h1>
            </div>
            
            {/* Restaurant grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  {...restaurant}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
