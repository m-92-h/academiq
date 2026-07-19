export default function TopicLoading() {
  return (
    <div className="min-h-screen bg-background px-4 py-12" dir="rtl" aria-busy="true" aria-label="جارٍ التحميل…">
      <div className="mx-auto max-w-3xl">
        {/* Breadcrumb skeleton */}
        <div className="mb-8 flex items-center gap-2">
          <div className="h-4 w-16 animate-pulse rounded-full bg-border" />
          <div className="h-4 w-4 animate-pulse rounded-full bg-border" />
          <div className="h-4 w-20 animate-pulse rounded-full bg-border" />
          <div className="h-4 w-4 animate-pulse rounded-full bg-border" />
          <div className="h-4 w-24 animate-pulse rounded-full bg-border" />
        </div>

        {/* Header skeleton */}
        <div className="mb-10">
          <div className="mb-4 h-10 w-3/4 animate-pulse rounded-xl bg-border" />
          <div className="h-5 w-1/2 animate-pulse rounded-full bg-border" />
        </div>

        {/* Content skeleton */}
        <div className="card-elev p-6 sm:p-10">
          <div className="flex flex-col gap-4">
            <div className="h-4 w-full animate-pulse rounded-full bg-border" />
            <div className="h-4 w-full animate-pulse rounded-full bg-border" />
            <div className="h-4 w-5/6 animate-pulse rounded-full bg-border" />
            
            <div className="my-6 h-48 w-full animate-pulse rounded-xl bg-border opacity-50" />
            
            <div className="h-4 w-full animate-pulse rounded-full bg-border" />
            <div className="h-4 w-4/5 animate-pulse rounded-full bg-border" />
            <div className="h-4 w-full animate-pulse rounded-full bg-border" />
          </div>
        </div>

        {/* Footer Navigation skeleton */}
        <div className="mt-10 flex items-center justify-between border-t border-border pt-8">
          <div className="h-12 w-32 animate-pulse rounded-(--radius-btn) bg-border" />
          <div className="h-12 w-32 animate-pulse rounded-(--radius-btn) bg-border" />
        </div>
      </div>
    </div>
  );
}
