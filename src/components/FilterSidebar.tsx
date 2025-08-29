import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";

const FilterSidebar = () => {
  const cuisines = [
    "American",
    "BBQ", 
    "Beverages",
    "Biryani",
    "Broast",
    "Burgers",
    "Cakes & Bakery",
    "Chinese",
    "Pakistani",
    "Thai",
    "Fast Food",
    "Italian",
  ];

  return (
    <div className="w-80 bg-card p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
          Clear all
        </Button>
      </div>

      {/* Sort by */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
          Sort by
        </h3>
        <RadioGroup defaultValue="fastest" className="space-y-2">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="relevance" id="relevance" />
            <Label htmlFor="relevance" className="text-sm">Relevance</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="fastest" id="fastest" />
            <Label htmlFor="fastest" className="text-sm font-medium">Fastest delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="distance" id="distance" />
            <Label htmlFor="distance" className="text-sm">Distance</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="rating" id="rating" />
            <Label htmlFor="rating" className="text-sm">Top rated</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Quick filters */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
          Quick filters
        </h3>
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="text-sm">
            Ratings 4+
          </Button>
          <Button variant="outline" size="sm" className="text-sm">
            🏆 Super restaurant
          </Button>
        </div>
      </div>

      {/* Offers */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
          Offers
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="free-delivery" defaultChecked />
            <Label htmlFor="free-delivery" className="text-sm">Free delivery</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="vouchers" />
            <Label htmlFor="vouchers" className="text-sm">Accepts vouchers</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="deals" defaultChecked />
            <Label htmlFor="deals" className="text-sm">Deals</Label>
          </div>
        </div>
      </div>

      {/* Cuisines */}
      <div className="space-y-3">
        <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
          Cuisines
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for cuisines"
            className="pl-10 text-sm"
          />
        </div>
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {cuisines.map((cuisine) => (
            <div key={cuisine} className="flex items-center space-x-2">
              <Checkbox id={`cuisine-${cuisine}`} />
              <Label htmlFor={`cuisine-${cuisine}`} className="text-sm cursor-pointer">
                {cuisine}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;