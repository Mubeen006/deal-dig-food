import { MapPin, ShoppingCart, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const navItems = [
    { name: "Delivery", active: true },
    { name: "Pick-up", active: false },
    { name: "pandamart", active: false },
    { name: "Shops", active: false },
    { name: "Caterers", active: false },
  ];

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top banner */}
      <div className="bg-primary py-2 text-center text-sm font-medium">
        <span>Sign up to be a restaurant partner</span>
        <span className="mx-4">|</span>
        <span>Sign up for a business account</span>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">foodpanda</div>
          </div>

          {/* Location and Search */}
          <div className="flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-2 text-sm">
              <MapPin className="h-4 w-4" />
              <span>New address Service Road W Islamabad</span>
            </div>
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for restaurants or dishes"
                className="pl-10 bg-background text-foreground"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Log in
            </Button>
            <Button variant="secondary" size="sm">
              Sign up for free delivery
            </Button>
            <Button variant="ghost" size="sm">
              EN
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation tabs */}
        <nav className="flex space-x-8 mt-4 border-b border-primary-foreground/20">
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`pb-2 text-sm font-medium transition-colors hover:text-primary-foreground/80 ${
                item.active
                  ? "border-b-2 border-primary-foreground text-primary-foreground"
                  : "text-primary-foreground/70"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;