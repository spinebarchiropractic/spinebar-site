export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1e8] text-[#173326]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:px-12">
        
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo/spinebar-logo.png"
              alt="Spine Bar Chiropractic"
              className="h-50 w-50 object-contain"
            />

            <div>
              <h1 className="text-2xl font-serif tracking-wide">
                Spine Bar Chiropractic
              </h1>

              <p className="text-sm uppercase tracking-[0.35em] text-[#9d8753]">
                Toluca Lake
              </p>
            </div>
          </div>

          <a
            href="https://practice.chirotouch.com/portal/spinebarchiropractic"
            target="_blank"
            className="rounded-full bg-[#173326] px-6 py-3 text-sm font-semibold text-[#f7f1e8] transition hover:bg-[#0f241a]"
          >
            Book Appointment
          </a>
        </div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-[#9d8753]">
              Holistic Chiropractic Care In Toluca Lake
            </p>

            <h2 className="max-w-xl font-serif text-6xl leading-none tracking-tight lg:text-8xl">
              Care that feels considered, not rushed.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#44554a]">
              A modern chiropractic and wellness office built around movement,
              recovery, honest guidance, and the body's natural ability to
              repair and adapt.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://practice.chirotouch.com/portal/spinebarchiropractic"
                target="_blank"
                className="rounded-full bg-[#173326] px-7 py-4 text-sm font-semibold text-[#f7f1e8] transition hover:bg-[#0f241a]"
              >
                Book Appointment
              </a>

              <button className="rounded-full border border-[#c9b48a] px-7 py-4 text-sm font-semibold text-[#173326]">
                Explore Services
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#6f6b63]">
              <span>Toluca Lake</span>
              <span>747-774-7144</span>
              <span>Mon–Fri 9–5 · Sat 9–1</span>
            </div>
          </div>

          <div className="rounded-[40px] border border-[#e5d9c4] bg-[#efe7db] p-10">
            <img
              src="/logo/spinebar-logo.png"
              alt="Spine Bar Chiropractic"
              className="mx-auto mb-8 h-32 w-32 object-contain"
            />

            <h3 className="text-center font-serif text-4xl">
              Modern Chiropractic.
            </h3>

            <p className="mx-auto mt-6 max-w-md text-center text-lg leading-8 text-[#55655a]">
              Built for patients looking for honest care, thoughtful treatment,
              wellness guidance, and a calmer healthcare experience.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}