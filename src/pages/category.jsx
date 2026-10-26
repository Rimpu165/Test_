import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchContext";

const Category = () => {
  // const [search,setSearch]=useState("")
  const {search}=useContext(SearchContext)
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      const response = await fetch(
        "https://dummyjson.com/products"
      );

      const data = await response.json();

      setProducts(data.products);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-lg font-medium text-indigo-600">
          Loading products...
        </p>
      </div>
    );
  }

  
  const filterproduct=products.filter((item)=>`${item.title}${item.description}${item.price}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">

      {/* Heading */}
      <div className="mb-8">

        {/* <input type="search" value={search} onChange={handlechnge} className="border w-250"  placeholder="search Products,......."/> */}
        <h1 className="text-3xl font-bold text-gray-900">
          Our Products
        </h1>

        <p className="mt-2 text-gray-500">
          Discover our latest products and best deals.
        </p>
      </div> 

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {filterproduct.slice(0,10).map((product) => (
          <div
          
            key={product.id}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
<Link to={`/detail/${product.id}/product`}>
            {/* Image */}
            <div className="relative bg-gray-100">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-56 w-full object-cover"
              />

              {/* Discount */}
              <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
                -{product.discountPercentage.toFixed(0)}%
              </span>
            </div>

            {/* Content */}
            <div className="p-5">

              {/* Category */}
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-indigo-600">
                {product.category}
              </p>

              {/* Brand */}
              <p className="mb-2 text-sm font-medium text-gray-500">
                {product.brand || "FivePM Brand"}
              </p>

              {/* Title */}
              <h2 className="mb-2 line-clamp-1 text-lg font-bold text-gray-900">
                {product.title}
              </h2>

              {/* Description */}
              <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
                {product.description}
              </p>

              {/* Rating & Stock */}
              <div className="mb-4 flex items-center justify-between">

                <span className="rounded-md bg-yellow-50 px-2 py-1 text-sm font-medium text-yellow-600">
                  ⭐ {product.rating}
                </span>

                <span className="text-sm text-gray-500">
                  {product.stock} left
                </span>

              </div>

              {/* Price */}
              <div className="flex items-center justify-between">

                <div>
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price}
                  </span>
                </div>

                <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                  Add to Cart
                </button>

              </div>

            </div>
            </Link>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Category;