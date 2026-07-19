export default function GuideLoading() {
  return (
    <main className="min-h-screen bg-background" dir="rtl" aria-busy="true" aria-label="جارٍ التحميل…">
      {/* GuideHero skeleton */}
      <section className="hero-grid flex flex-col items-center gap-5 px-4 py-24 text-center">
        <div className="h-5 w-28 animate-pulse rounded-full bg-border" />
        <div className="h-10 w-3/4 max-w-lg animate-pulse rounded-xl bg-border md:h-12" />
        <div className="h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
        <div className="h-5 w-72 max-w-full animate-pulse rounded-full bg-border" />
      </section>

      {/* AdmissionSteps skeleton */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-col items-center gap-3">
            <div className="h-7 w-48 animate-pulse rounded-lg bg-border" />
            <div className="h-5 w-64 animate-pulse rounded-full bg-border" />
          </div>
          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="card-elev flex items-start gap-4 p-5">
                <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-border" />
                <div className="flex flex-1 flex-col gap-2">
                  <div className="h-5 w-48 animate-pulse rounded-lg bg-border" />
                  <div className="h-4 w-full animate-pulse rounded-full bg-border" />
                  <div className="h-4 w-4/5 animate-pulse rounded-full bg-border" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA skeleton */}
      <section className="hero-grid-secondary py-12 px-4 text-center">
        <div className="mx-auto h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
      </section>
    </main>
  );
}
