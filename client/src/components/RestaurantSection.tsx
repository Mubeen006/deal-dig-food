import { Restaurant } from "@/data/restaurants";
import RestaurantCard from "./RestaurantCard";

interface RestaurantSectionProps {
  title: string;
  restaurants: Restaurant[];
  className?: string;
}

const RestaurantSection = ({ title, restaurants, className = "" }: RestaurantSectionProps) => {
  if (restaurants.length === 0) return null;

  return (
    <div className={`mb-8 ${className}`}>
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            {...restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantSection;