export default function QuizLoading() {
  return (
    <div className="min-h-screen bg-background px-4 py-12" dir="rtl" aria-busy="true" aria-label="جارٍ التحميل…">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="h-6 w-32 animate-pulse rounded-lg bg-border" />
          <div className="h-6 w-16 animate-pulse rounded-lg bg-border" />
        </div>
        <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-border/50">
          <div className="h-full w-1/4 animate-pulse bg-border" />
        </div>
        <div className="card-elev p-6 sm:p-10">
          <div className="mb-8 h-8 w-3/4 animate-pulse rounded-lg bg-border" />
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-14 w-full animate-pulse rounded-xl bg-border opacity-60" />
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <div className="h-11 w-32 animate-pulse rounded-(--radius-btn) bg-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
