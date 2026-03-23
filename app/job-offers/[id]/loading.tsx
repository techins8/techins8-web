export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <div className="space-y-3">
        <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-3">
          <div className="h-5 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
        ))}
      </div>
      <div className="space-y-3">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 rounded animate-pulse ${i % 5 === 4 ? "w-2/3" : "w-full"}`}
          />
        ))}
      </div>
      <div className="space-y-3">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-4 bg-gray-200 rounded animate-pulse w-full" />
        ))}
      </div>
    </div>
  );
}
