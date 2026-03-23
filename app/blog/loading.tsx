export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-4 mb-20">
      <div className="text-center mb-12">
        <div className="h-10 w-24 bg-gray-200 rounded animate-pulse mx-auto mb-4" />
        <div className="h-5 w-96 bg-gray-200 rounded animate-pulse mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-lg overflow-hidden border border-gray-100">
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-5/6" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-full" />
              <div className="h-4 bg-gray-200 rounded animate-pulse w-4/5" />
              <div className="flex gap-2 pt-2">
                <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-6 w-20 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
