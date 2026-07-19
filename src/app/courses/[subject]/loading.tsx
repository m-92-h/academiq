export default function SubjectLoading() {
  return (
    <main className="min-h-screen bg-background" dir="rtl" aria-busy="true" aria-label="جارٍ التحميل…">
      <section className="hero-grid flex flex-col items-center gap-5 px-4 py-24 text-center">
        <div className="h-12 w-64 animate-pulse rounded-xl bg-border" />
        <div className="h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
        <div className="mt-4 flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-16 animate-pulse rounded-lg bg-border" />
            <div className="h-4 w-12 animate-pulse rounded-full bg-border" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-16 animate-pulse rounded-lg bg-border" />
            <div className="h-4 w-12 animate-pulse rounded-full bg-border" />
          </div>
        </div>
      </section>
      <section className="px-4 py-12 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="card-elev flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col gap-2">
                  <div className="h-6 w-48 animate-pulse rounded-lg bg-border" />
                  <div className="h-4 w-72 max-w-full animate-pulse rounded-full bg-border" />
                </div>
                <div className="mt-4 h-10 w-28 animate-pulse rounded-(--radius-btn) bg-border sm:mt-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
