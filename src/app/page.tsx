
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  Search,
  ShoppingBag,
  Menu,
  Star,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Classic Timepiece",
    category: "Accessories",
    price: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800",
    tag: "BESTSELLER",
  },
  {
    id: 2,
    name: "Signature Handbag",
    category: "Fashion",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    tag: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Modern Sneakers",
    category: "Footwear",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    tag: "POPULAR",
  },
  {
    id: 4,
    name: "Premium Sunglasses",
    category: "Accessories",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
    tag: "TRENDING",
  },
];

const categories = ["All", "Fashion", "Accessories", "Footwear", "Lifestyle"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5ef] text-[#24211c]">
      {/* Announcement */}
      <div className="bg-[#24211c] px-4 py-2 text-center text-xs tracking-[0.15em] text-white">
        DISCOVER THE ART OF PREMIUM SHOPPING
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-[#e9e1d3] bg-[#f8f5ef]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <button className="md:hidden" aria-label="Open menu">
            <Menu size={23} />
          </button>

          <nav className="hidden items-center gap-8 text-sm text-[#625d53] md:flex">
            <a href="#home" className="hover:text-[#b99a5b]">Home</a>
            <a href="#categories" className="hover:text-[#b99a5b]">Categories</a>
            <a href="#products" className="hover:text-[#b99a5b]">Collections</a>
          </nav>

          <a
            href="#home"
            className="text-3xl font-semibold tracking-[0.18em] text-[#24211c]"
          >
            LUXORA<span className="text-[#b99a5b]">.</span>
          </a>

          <div className="flex items-center gap-5">
            <button aria-label="Search" className="hidden sm:block">
              <Search size={21} />
            </button>
            <button aria-label="Shopping bag" className="relative">
              <ShoppingBag size={22} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#b99a5b] text-[10px] text-white">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-7xl px-5 py-8 md:px-10 md:py-12">
        <div className="relative min-h-[490px] overflow-hidden rounded-[28px] bg-[#ded5c5] md:min-h-[570px]">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800"
            alt="Premium fashion collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />

          <div className="relative flex min-h-[490px] max-w-xl flex-col justify-center px-7 py-16 text-white md:min-h-[570px] md:px-16">
            <p className="mb-5 text-xs tracking-[0.3em] text-[#e4c98f]">
              THE NEW LUXURY EXPERIENCE
            </p>

            <h1 className="text-5xl font-light leading-[1.12] md:text-7xl">
              Elegance in
              <br />
              Every Detail.
            </h1>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/80 md:text-base">
              Discover thoughtfully selected products that bring style,
              quality and timeless elegance into your everyday life.
            </p>

            <a
              href="#products"
              className="mt-9 flex w-fit items-center gap-4 rounded-full bg-[#c5a66b] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#aa8b52]"
            >
              Explore Collection
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs tracking-[0.25em] text-[#b99a5b]">
              FIND YOUR STYLE
            </p>
            <h2 className="text-3xl font-medium md:text-4xl">
              Explore Categories
            </h2>
          </div>
          <a href="#products" className="flex items-center gap-2 text-sm text-[#8b7449]">
            View all <ArrowRight size={16} />
          </a>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-3">
          {categories.map((category, index) => (
            <a
              key={category}
              href="#products"
              className={`whitespace-nowrap rounded-full border px-6 py-3 text-sm transition ${
                index === 0
                  ? "border-[#24211c] bg-[#24211c] text-white"
                  : "border-[#ded5c5] bg-white/50 text-[#625d53] hover:border-[#b99a5b]"
              }`}
            >
              {category}
            </a>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="mx-auto max-w-7xl px-5 py-14 md:px-10">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs tracking-[0.3em] text-[#b99a5b]">
            HANDPICKED FOR YOU
          </p>
          <h2 className="text-3xl font-medium md:text-5xl">
            Featured Collection
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#81796d]">
            Explore our selection of exceptional pieces, chosen to make
            every moment feel special.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => (
            <article key={product.id} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-[#eee8de]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[9px] tracking-wider text-[#6b5a3b]">
                  {product.tag}
                </span>

                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="absolute right-3 top-3 rounded-full bg-white/90 p-2.5"
                >
                  <Heart size={17} />
                </button>

                <button className="absolute bottom-3 left-3 right-3 flex items-center justify-center gap-2 rounded-full bg-white/90 py-3 text-xs font-medium backdrop-blur-md transition hover:bg-[#24211c] hover:text-white">
                  <ShoppingBag size={15} />
                  Quick Add
                </button>
              </div>

              <div className="px-1 pt-4">
                <p className="text-[11px] text-[#9a8f7d]">
                  {product.category}
                </p>
                <h3 className="mt-1 text-sm font-medium md:text-base">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-[#8b7449]">
                  {product.price}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[#b99a5b]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={11} fill="currentColor" />
                  ))}
                  <span className="ml-1 text-[10px] text-[#9a8f7d]">
                    5.0
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Brand Statement */}
      <section className="mx-5 my-16 rounded-[28px] bg-[#eae2d4] px-6 py-16 text-center md:mx-10 md:py-24">
        <p className="mb-4 text-xs tracking-[0.3em] text-[#a38650]">
          THE LUXORA PROMISE
        </p>
        <h2 className="mx-auto max-w-2xl text-3xl font-light leading-tight md:text-5xl">
          Luxury is not just what you own.
          <span className="text-[#a38650]"> It is how you feel.</span>
        </h2>
        <a
          href="#products"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#24211c] px-7 py-4 text-sm text-white transition hover:bg-[#8b7449]"
        >
          Discover Luxora <ArrowRight size={17} />
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#24211c] px-6 py-12 text-white md:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-semibold tracking-[0.18em]">
              LUXORA<span className="text-[#c5a66b]">.</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/60">
              A world of timeless style, thoughtful choices and premium
              shopping experiences.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Explore</h3>
            <div className="flex flex-col gap-3 text-sm text-white/60">
              <a href="#home" className="hover:text-white">Home</a>
              <a href="#categories" className="hover:text-white">Categories</a>
              <a href="#products" className="hover:text-white">Collections</a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-medium">Stay Connected</h3>
            <p className="text-sm leading-6 text-white/60">
              Discover new arrivals and explore the world of Luxora.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/15 pt-6 text-center text-xs text-white/40">
          © 2026 Luxora. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
