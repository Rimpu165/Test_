import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    title: "Good things, chosen well",
    description: "A considered mix of everyday essentials and little discoveries, all easy to find in one place.",
    color: "bg-[#d9f36a]",
  },
  {
    number: "02",
    title: "Prices that feel right",
    description: "We believe great finds should feel like a good decision, not a splurge you have to justify.",
    color: "bg-[#f7c8b8]",
  },
  {
    number: "03",
    title: "Shopping made simple",
    description: "From a quick browse to checkout, we keep the experience clear, easy, and enjoyable.",
    color: "bg-[#cce7f2]",
  },
];

const About = () => {
  return (
    <main className="overflow-hidden bg-[#fcfbf8] text-slate-900">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:px-8 lg:py-16">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-[#f2674a]" />
            A little about us
          </p>
          <h1 className="text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Shopping should
            <br />
            <span className="text-[#f2674a]">feel good.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
            FivePM is for the things that make everyday life a little brighter. We bring useful finds, thoughtful details, and prices worth smiling about together in one easy place.
          </p>
          <Link to="/shop" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-indigo-700 px-6 text-sm font-bold text-white transition hover:bg-indigo-800">
            Come have a look <span className="ml-3 text-lg" aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="relative min-h-[330px] overflow-hidden rounded-[1.25rem] bg-[#e9e5da] sm:min-h-[430px] lg:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85"
            alt="A welcoming, thoughtfully arranged shop"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white sm:bottom-8 sm:left-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">The FivePM point of view</p>
            <p className="mt-2 max-w-sm text-2xl font-bold leading-tight sm:text-3xl">A good find can turn an ordinary day around.</p>
          </div>
          <span className="absolute right-5 top-5 grid h-14 w-14 rotate-6 place-items-center rounded-full bg-[#d9f36a] text-2xl font-black text-slate-900 sm:right-7 sm:top-7" aria-hidden="true">5<span className="text-[#f2674a]">PM</span></span>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e4563b]">Why FivePM</p>
            <h2 className="mt-3 max-w-sm text-3xl font-black leading-tight tracking-tight sm:text-4xl">The best part of the day deserves good finds.</h2>
          </div>
          <div className="max-w-2xl space-y-4 text-base leading-7 text-slate-600">
            <p>That little moment when you find exactly what you were looking for? That is the feeling we are here for.</p>
            <p>FivePM brings together products for your home, your routine, and everything in between. Browse at your own pace, discover something unexpected, and make your everyday a bit more yours.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-8 max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e4563b]">What matters to us</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">The FivePM way</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.number} className={`${value.color} flex min-h-56 flex-col justify-between rounded-lg p-5 sm:min-h-64 sm:p-7`}>
              <span className="text-xs font-black tracking-[0.14em] text-slate-600">{value.number} / 03</span>
              <div>
                <h3 className="text-xl font-black sm:text-2xl">{value.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-slate-700">{value.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8">
        <div className="flex flex-col justify-between gap-5 rounded-lg bg-indigo-700 px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d9f36a]">Your next good find</p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">It might be just around the corner.</h2>
          </div>
          <Link to="/shop" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#d9f36a] px-5 text-sm font-black text-slate-900 transition hover:bg-white">
            Explore the shop <span className="ml-3 text-lg" aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
