const Loading = () => {
  return (
    <div className="flex flex-col gap-6 w-full animate-pulse">
      
      <div className="h-8 w-64 bg-gray-200 rounded-lg mb-4" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card h-96 bg-surface border border-border">
            <div className="h-48 bg-gray-200 rounded-t-lg mb-4" />
            <div className="p-4 space-y-3">
              <div className="h-4 w-3/4 bg-gray-200 rounded" />
              <div className="h-4 w-1/2 bg-gray-200 rounded" />
              <div className="h-10 w-full bg-gray-200 rounded mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;