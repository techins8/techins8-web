export default function Loading() {
  return (
    <article className="max-w-[800px] mx-auto px-8 py-8">
      <div className="mb-6">
        <div className="w-full h-64 bg-gray-200 rounded-lg animate-pulse" />
      </div>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-12 w-12 rounded-full bg-gray-200 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-48 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>
      <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="space-y-3 mt-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`h-4 bg-gray-200 rounded animate-pulse ${i % 4 === 3 ? "w-3/5" : "w-full"}`}
          />
        ))}
      </div>
    </article>
  );
}
