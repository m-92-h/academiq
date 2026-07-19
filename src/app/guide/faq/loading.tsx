export default function FAQLoading() {
  return (
    <div className="min-h-screen bg-background px-4 py-24" aria-busy="true" aria-label="جارٍ التحميل…">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 flex flex-col items-center text-center gap-4">
          <div className="h-10 w-64 animate-pulse rounded-xl bg-border" />
          <div className="h-5 w-80 max-w-full animate-pulse rounded-full bg-border" />
        </div>
        <div className="flex flex-col gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="card-elev h-16 w-full animate-pulse rounded-lg bg-border opacity-50" />
          ))}
        </div>
      </div>
    </div>
  );
}
