import { Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  cuisine: string;
  deliveryTime: string;
  priceRange: string;
  discount?: string;
  freeDelivery?: boolean;
}

const RestaurantCard = ({
  name,
  image,
  rating,
  reviewCount,
  cuisine,
  deliveryTime,
  priceRange,
  discount,
  freeDelivery,
}: RestaurantCardProps) => {
  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {discount && (
            <Badge className="bg-primary text-primary-foreground font-medium">
              {discount}
            </Badge>
          )}
          {freeDelivery && (
            <Badge className="bg-success text-success-foreground font-medium">
              Free delivery
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          {/* Restaurant name */}
          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Rating and reviews */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({reviewCount}+)</span>
          </div>

          {/* Price and cuisine */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <DollarSign className="h-3 w-3" />
              <span>{priceRange}</span>
            </div>
            <span>•</span>
            <span>{cuisine}</span>
          </div>

          {/* Delivery info */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{deliveryTime}</span>
            </div>
            {freeDelivery && (
              <span className="text-success font-medium">Free</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RestaurantCard;