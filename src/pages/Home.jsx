import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const collections = [
  { name: "Beauty & care", category: "beauty", color: "bg-rose-100", mark: "01" },
  { name: "Tech, made easy", category: "smartphones", color: "bg-sky-100", mark: "02" },
  { name: "Home comforts", category: "furniture", color: "bg-amber-100", mark: "03" },
  { name: "Everyday style", category: "womens-dresses", color: "bg-lime-100", mark: "04" },
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=4&skip=10");
        if (!response.ok) throw new Error("Could not load products");
        const data = await response.json();
        setProducts(data.products);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <main className="overflow-hidden bg-[#fcfbf8] text-slate-900">
      <div className="bg-[#d9f36a] px-4 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-slate-900 sm:text-sm">
        A little treat for your first order: 10% off with HELLO10
      </div>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:px-8 lg:py-16">
        <div className="order-2 max-w-xl lg:order-1">
          <p className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
            <span className="h-2 w-2 rounded-full bg-[#f2674a]" />
            Your everyday, upgraded
          </p>
          <h1 className="max-w-lg text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Good finds.
            <br />
            <span className="text-[#f2674a]">Great feeling.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            The little things that make your day better, all in one place. Meet your new favorite finds at FivePM.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/shop" className="inline-flex min-h-12 items-center justify-center rounded-md bg-indigo-700 px-6 text-sm font-bold text-white transition hover:bg-indigo-800">
              Shop the collection <span className="ml-3 text-lg" aria-hidden="true">↗</span>
            </Link>
            <Link to="/offers" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-6 text-sm font-bold text-slate-800 transition hover:border-slate-900">
              See today&apos;s offers
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-slate-600">
            <div className="flex -space-x-2" aria-hidden="true">
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#fcfbf8] bg-rose-200 text-xs">☺</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#fcfbf8] bg-sky-200 text-xs">☺</span>
              <span className="grid h-8 w-8 place-items-center rounded-full border-2 border-[#fcfbf8] bg-amber-200 text-xs">☺</span>
            </div>
            <span><strong className="text-slate-900">4.8/5</strong> from happy shoppers</span>
          </div>
        </div>

        <div className="relative order-1 min-h-[330px] overflow-hidden rounded-[1.25rem] bg-[#e9e5da] sm:min-h-[430px] lg:order-2 lg:min-h-[540px]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85"
            alt="A bright, curated clothing and lifestyle shop"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/80">The FivePM edit</p>
              <p className="mt-1 text-2xl font-bold sm:text-3xl">Made for your moment.</p>
            </div>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#d9f36a] text-xl text-slate-900" aria-hidden="true">↗</span>
          </div>
          <div className="absolute right-4 top-4 rotate-6 rounded-full bg-[#f2674a] px-4 py-3 text-center text-xs font-black uppercase leading-4 text-white sm:right-7 sm:top-7">
            Nice things
            <br />
            start here
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-4 sm:grid-cols-4 sm:divide-y-0 sm:px-6 lg:px-8">
          <div className="py-5 text-center sm:py-6"><p className="text-sm font-bold">Free shipping</p><p className="mt-1 text-xs text-slate-500">On orders over $50</p></div>
          <div className="py-5 text-center sm:py-6"><p className="text-sm font-bold">Easy returns</p><p className="mt-1 text-xs text-slate-500">30 days to decide</p></div>
          <div className="py-5 text-center sm:py-6"><p className="text-sm font-bold">Good quality</p><p className="mt-1 text-xs text-slate-500">Picked with care</p></div>
          <div className="py-5 text-center sm:py-6"><p className="text-sm font-bold">Here to help</p><p className="mt-1 text-xs text-slate-500">Real people, real support</p></div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e4563b]">Find your thing</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Shop by mood</h2>
          </div>
          <Link to="/categories" className="hidden text-sm font-bold text-indigo-700 hover:text-indigo-900 sm:block">All categories <span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {collections.map((collection) => (
            <Link key={collection.category} to={`/categories?category=${collection.category}`} className={`${collection.color} group flex min-h-36 flex-col justify-between rounded-lg p-4 transition hover:-translate-y-1 sm:min-h-44 sm:p-5`}>
              <span className="text-xs font-bold text-slate-500">{collection.mark} / 04</span>
              <span className="flex items-end justify-between gap-2 text-base font-bold sm:text-lg">
                {collection.name}
                <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/categories" className="mt-5 inline-block text-sm font-bold text-indigo-700 hover:text-indigo-900 sm:hidden">Browse all categories <span aria-hidden="true">→</span></Link>
      </section>

      <section className="bg-[#f1f0eb]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e4563b]">Worth a closer look</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Popular right now</h2>
            </div>
            <Link to="/shop" className="shrink-0 text-sm font-bold text-indigo-700 hover:text-indigo-900">Shop all <span aria-hidden="true">→</span></Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {collections.map((item) => <div key={item.category} className="h-72 animate-pulse rounded-lg bg-white" />)}
            </div>
          ) : products.length ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {products.map((product) => (
                <Link key={product.id} to={`/detail/${product.id}/product`} className="group overflow-hidden rounded-lg bg-white">
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img src={product.thumbnail} alt={product.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-sm bg-[#d9f36a] px-2 py-1 text-[10px] font-black uppercase tracking-wide">{product.discountPercentage.toFixed(0)}% off</span>
                  </div>
                  <div className="p-3 sm:p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-indigo-700">{product.category}</p>
                    <h3 className="mt-1 truncate text-sm font-bold sm:text-base">{product.title}</h3>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <span className="font-black">${product.price}</span>
                      <span className="text-xs text-amber-600">★ {product.rating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-lg bg-white px-5 py-8 text-center">
              <p className="font-bold">Our popular picks are taking a little break.</p>
              <Link to="/shop" className="mt-2 inline-block text-sm font-bold text-indigo-700">Explore the shop <span aria-hidden="true">→</span></Link>
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-5 rounded-lg bg-indigo-700 px-6 py-8 text-white sm:flex-row sm:items-center sm:px-10 sm:py-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d9f36a]">A good email, occasionally</p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">The good stuff, straight to you.</h2>
            <p className="mt-2 text-sm text-indigo-100">New finds, little treats, and first dibs on offers.</p>
          </div>
          <Link to="/shop" className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#d9f36a] px-5 text-sm font-black text-slate-900 transition hover:bg-white">Find your next favorite <span className="ml-3 text-lg" aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
