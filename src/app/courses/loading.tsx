export default function CoursesLoading() {
  return (
    <main className="hero-grid-secondary min-h-screen bg-background" dir="rtl" aria-busy="true" aria-label="جارٍ التحميل…">
      <section className="flex flex-col items-center gap-5 px-4 py-20 text-center">
        <div className="h-10 w-64 animate-pulse rounded-xl bg-border md:h-12" />
        <div className="h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
        <div className="h-5 w-72 max-w-full animate-pulse rounded-full bg-border" />
      </section>
      <section className="px-4 py-12 pb-24">
        <div className="mx-auto max-w-6xl grid grid-cols-1 gap-8 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card-elev flex flex-col gap-4 p-6">
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 animate-pulse rounded-xl bg-border" />
                <div className="h-7 w-32 animate-pulse rounded-lg bg-border" />
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <div className="h-4 w-full animate-pulse rounded-full bg-border" />
                <div className="h-4 w-5/6 animate-pulse rounded-full bg-border" />
              </div>
              <div className="mt-6 flex flex-col gap-3">
                {[1, 2, 3, 4].map((j) => (
                  <div key={j} className="h-10 w-full animate-pulse rounded-lg bg-border opacity-50" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
