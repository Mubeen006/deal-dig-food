import { cuisines } from "@/data/restaurants";
import { ChevronRight } from "lucide-react";

const CuisinesCarousel = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Cuisines for you</h2>
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {cuisines.map((cuisine) => (
            <div key={cuisine.name} className="flex-shrink-0 text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2 mx-auto">
                <img 
                  src={cuisine.image} 
                  alt={cuisine.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-primary font-medium">{cuisine.name}</p>
            </div>
          ))}
          <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 bg-muted rounded-full">
            <ChevronRight className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuisinesCarousel;