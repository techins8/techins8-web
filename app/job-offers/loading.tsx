export default function Loading() {
  return (
    <div className="container mx-auto py-8">
      <div className="space-y-3">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 bg-white"
          >
            <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 w-2/5 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-1/3 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="hidden md:flex gap-2">
              <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
            </div>
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse shrink-0" />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
        ))}
      </div>
    </div>
  );
}
