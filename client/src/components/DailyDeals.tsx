import { useDailyDeals } from "@/hooks/useApi";
import LoadingSpinner from "./LoadingSpinner";

const DailyDeals = () => {
  const { dailyDeals, loading, error } = useDailyDeals();

  if (loading) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Your daily deals</h2>
        <LoadingSpinner message="Loading deals..." />
      </div>
    );
  }

  if (error || !dailyDeals.length) {
    return (
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-6">Your daily deals</h2>
        <div className="text-center py-8 text-muted-foreground">No deals available</div>
      </div>
    );
  }
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Your daily deals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {dailyDeals.map((deal) => (
          <div key={deal.id} className={`${deal.color} rounded-xl p-6 text-white relative overflow-hidden`}>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              {deal.subtitle && (
                <p className="text-sm opacity-90 mb-4">{deal.subtitle}</p>
              )}
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 opacity-20">
              <img 
                src={deal.image} 
                alt="" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyDeals;