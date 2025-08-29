import { Button } from "@/components/ui/button";
import promoBannerImage from "@/assets/promo-banner.jpg";

const PromoBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-foodpanda-light-pink to-foodpanda-pink/20 rounded-lg overflow-hidden mb-8">
      <div className="flex items-center justify-between p-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Sign up for free delivery on your first order
          </h2>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Sign up
          </Button>
        </div>
        <div className="flex-shrink-0 ml-6">
          <img
            src={promoBannerImage}
            alt="Food delivery promotion"
            className="h-32 w-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;