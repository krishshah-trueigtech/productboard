import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="space-y-4">
        <h1 className="text-9xl font-extrabold text-primary animate-pulse">
          404
        </h1>
        
        <h2 className="text-3xl font-bold text-text-main">
          Oops! Page Not Found
        </h2>
        
        <p className="text-text-muted max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>

        <div className="pt-6">
          <Link 
            href="/dashboard" 
            className="btn-primary inline-block shadow-lg shadow-primary/20"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
      
      <div className="absolute -z-10 h-[30vh] w-[30vw] rounded-full bg-primary/5 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
};

export default NotFound;