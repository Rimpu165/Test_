
const Footer = () => {
  return (
    <footer className="mt-16 bg-gray-950 text-gray-300">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            Five<span className="text-indigo-500">PM</span>
          </h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
            Your one-stop destination for quality products, great prices,
            and an amazing shopping experience.
          </p>

          {/* Social */}
          <div className="mt-6 flex gap-3">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-indigo-600">
              f
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-indigo-600">
              X
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-indigo-600">
              in
            </button>

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-sm hover:bg-indigo-600">
              ◎
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 font-semibold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Categories
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Offers
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="mb-5 font-semibold text-white">
            Customer Service
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Shipping & Delivery
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Returns & Refunds
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-indigo-400">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 font-semibold text-white">
            Stay Updated
          </h3>

          <p className="mb-4 text-sm leading-6 text-gray-400">
            Subscribe to our newsletter and get the latest offers and
            product updates.
          </p>

          <div className="flex overflow-hidden rounded-lg bg-gray-800">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-gray-500"
            />

            <button className="bg-indigo-600 px-4 text-sm font-medium text-white hover:bg-indigo-700">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-gray-500 sm:flex-row">

          <p>
            © 2026 FivePM. All rights reserved.
          </p>

          <p>
            Made with ❤️ for better shopping.
          </p>

        </div>
      </div>

    </footer>
  );
};

export default Footer;