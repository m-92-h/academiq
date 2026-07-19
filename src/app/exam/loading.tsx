export default function ExamLoading() {
  return (
    <main className="min-h-screen bg-background" dir="rtl" aria-busy="true" aria-label="جارٍ التحميل…">
      <section className="hero-grid flex flex-col items-center gap-5 px-4 py-24 text-center">
        <div className="h-10 w-3/4 max-w-md animate-pulse rounded-xl bg-border md:h-12" />
        <div className="h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
      </section>
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elev flex flex-col items-center gap-4 p-8 text-center">
                <div className="h-16 w-16 animate-pulse rounded-full bg-border" />
                <div className="h-6 w-32 animate-pulse rounded-lg bg-border" />
                <div className="h-4 w-full animate-pulse rounded-full bg-border" />
                <div className="h-4 w-4/5 animate-pulse rounded-full bg-border" />
                <div className="mt-4 h-10 w-full animate-pulse rounded-(--radius-btn) bg-border" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
