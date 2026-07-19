export default function HomeLoading() {
  return (
    <main className="min-h-screen bg-background" aria-busy="true" aria-label="جارٍ التحميل…">
      {/* Hero skeleton */}
      <section className="hero-grid relative flex flex-col items-center justify-center gap-6 px-4 py-28 text-center">
        <div className="h-5 w-32 animate-pulse rounded-full bg-border" />
        <div className="h-10 w-3/4 max-w-xl animate-pulse rounded-xl bg-border md:h-14" />
        <div className="h-10 w-2/4 max-w-sm animate-pulse rounded-xl bg-border" />
        <div className="mt-2 h-5 w-96 max-w-full animate-pulse rounded-full bg-border" />
        <div className="h-5 w-72 max-w-full animate-pulse rounded-full bg-border" />
        <div className="mt-4 flex gap-3">
          <div className="h-11 w-36 animate-pulse rounded-(--radius-btn) bg-border" />
          <div className="h-11 w-36 animate-pulse rounded-(--radius-btn) bg-border" />
        </div>
      </section>

      {/* Subjects skeleton */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col items-center gap-3">
            <div className="h-7 w-48 animate-pulse rounded-lg bg-border" />
            <div className="h-5 w-72 animate-pulse rounded-full bg-border" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elev flex flex-col gap-4 p-6">
                <div className="h-12 w-12 animate-pulse rounded-xl bg-border" />
                <div className="h-6 w-32 animate-pulse rounded-lg bg-border" />
                <div className="h-4 w-full animate-pulse rounded-full bg-border" />
                <div className="h-4 w-3/4 animate-pulse rounded-full bg-border" />
                <div className="mt-2 h-9 w-full animate-pulse rounded-(--radius-btn) bg-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ExamCards skeleton */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="h-7 w-52 animate-pulse rounded-lg bg-border" />
            <div className="h-5 w-80 animate-pulse rounded-full bg-border" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card-elev p-6">
                <div className="mb-4 h-5 w-24 animate-pulse rounded-full bg-border" />
                <div className="h-8 w-40 animate-pulse rounded-lg bg-border" />
                <div className="mt-4 h-10 w-full animate-pulse rounded-(--radius-btn)  bg-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features skeleton */}
      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col items-center gap-3">
            <div className="h-7 w-44 animate-pulse rounded-lg bg-border" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card-elev flex flex-col items-center gap-3 p-6 text-center">
                <div className="h-10 w-10 animate-pulse rounded-xl bg-border" />
                <div className="h-5 w-28 animate-pulse rounded-lg bg-border" />
                <div className="h-4 w-full animate-pulse rounded-full bg-border" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
