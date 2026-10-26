import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../SearchContext";

const Navbar = () => {
  const {search,setSearch}=useContext(SearchContext)
  const navigate=useNavigate()

  const handlelogout=()=>{
    localStorage.removeItem("loggedInUser")
    navigate("/login")

  }
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600"
        >
          Five<span className="text-gray-900">PM</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="font-medium text-indigo-600 hover:text-indigo-700"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            Shop
          </Link>

          <Link
            to="/categories"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            Categories
          </Link>

          <Link
            to="/offers"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            Offers
          </Link>

          <Link
            to="/about"
            className="font-medium text-gray-600 hover:text-indigo-600"
          >
            About
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden items-center rounded-lg bg-gray-100 px-3 py-2 sm:flex">
            <input
             onChange={(e)=>{
              setSearch(e.target.value)
             }}
             value={search}
              type="text"
              placeholder="Search products..."
              className="w-36 bg-transparent text-sm outline-none"
            />
            <span>🔍</span>
          </div>

          {/* Cart */}
          <Link
            to="/cart"
            className="relative text-xl"
          >
            🛒
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-xs text-white">
              2
            </span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="text-xl"
          >
            ♡
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="hidden rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 sm:block"
          >
            Login
          </Link>
          <button onClick={handlelogout} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 sm:block">Logout</button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;