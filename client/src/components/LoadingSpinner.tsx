const LoadingSpinner = ({ message = "Loading..." }: { message?: string }) => {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
        <span className="text-muted-foreground">{message}</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;