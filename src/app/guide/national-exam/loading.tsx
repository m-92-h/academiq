export default function NationalExamLoading() {
  return (
    <div className="min-h-screen bg-background" aria-busy="true" aria-label="جارٍ التحميل…">
      {/* NationalExamSection skeleton */}
      <section className="hero-grid flex flex-col items-center gap-5 px-4 py-24 text-center" dir="rtl">
        <div className="h-5 w-36 animate-pulse rounded-full bg-border" />
        <div className="h-10 w-3/4 max-w-lg animate-pulse rounded-xl bg-border md:h-12" />
        <div className="h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
        <div className="h-5 w-80 max-w-full animate-pulse rounded-full bg-border" />
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card-elev flex flex-col items-center gap-2 p-4">
              <div className="h-8 w-16 animate-pulse rounded-lg bg-border" />
              <div className="h-4 w-20 animate-pulse rounded-full bg-border" />
            </div>
          ))}
        </div>
      </section>

      {/* ExamScoresTables skeleton */}
      <section className="px-4 py-16" dir="rtl">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="h-7 w-52 animate-pulse rounded-lg bg-border" />
            <div className="h-5 w-72 animate-pulse rounded-full bg-border" />
          </div>
          {[1, 2].map((t) => (
            <div key={t} className="card-elev mb-6 overflow-hidden">
              <div className="h-12 w-full animate-pulse bg-border opacity-50" />
              {[1, 2, 3, 4].map((r) => (
                <div key={r} className="flex gap-2 border-t border-border px-4 py-3">
                  <div className="h-5 w-1/3 animate-pulse rounded-full bg-border" />
                  <div className="h-5 w-1/4 animate-pulse rounded-full bg-border" />
                  <div className="h-5 w-1/4 animate-pulse rounded-full bg-border" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* GuideFooterCTA skeleton */}
      <section className="hero-grid-secondary px-4 py-12 text-center" dir="rtl">
        <div className="mx-auto flex flex-col items-center gap-4">
          <div className="h-7 w-64 animate-pulse rounded-lg bg-border" />
          <div className="h-5 w-80 animate-pulse rounded-full bg-border" />
          <div className="flex gap-3">
            <div className="h-10 w-32 animate-pulse rounded-(--radius-btn) bg-border" />
            <div className="h-10 w-32 animate-pulse rounded-(--radius-btn) bg-border" />
          </div>
        </div>
      </section>
    </div>
  );
}
