import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addtocart } from "../slice/cartslice";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const naviagte=useNavigate()
  const dispatch=useDispatch()

  useEffect(() => {
    const full = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );

        const result = await response.json();
        console.log("result", result);

        setData(result);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };

    full();
  },[id]);

  if (loading) {
    return (
      <div className="flex min-h-[500px] items-center justify-center">
        <p className="text-lg font-medium text-indigo-600 animate-pulse">
          Loading product...
        </p>
      </div>
    );
  }

  const handleclick=()=>{
     naviagte(`/detail/${Number(id) +1}/product`)

  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-indigo-600 py-5 text-center text-white shadow">
        <h1 className="text-2xl font-bold">Product Details</h1>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-6xl px-4 py-10">

        {/* Breadcrumb */}
        <p className="mb-6 text-sm text-gray-500">
       <Link to="/home"> Home </Link>   / <Link to="/shop"> Products </Link> /{" "}
          <span className="font-medium text-gray-800">
            {data.title}
          </span>
        </p>

        {/* Product Card */}
        <div className="grid overflow-hidden rounded-2xl bg-white shadow-lg md:grid-cols-2">

          {/* Image Section */}
          <div className="flex min-h-[450px] items-center justify-center bg-gray-100 p-8">
            <img
              src={data.images?.[0]}
              alt={data.title}
              className="h-[400px] w-full object-contain transition duration-300 hover:scale-105"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center p-8 md:p-12">

            {/* Category */}
            <span className="mb-3 w-fit rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium capitalize text-indigo-600">
              {data.category}
            </span>

            {/* Title */}
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              {data.title}
            </h2>

            {/* Rating */}
            <div className="mb-5 flex items-center gap-2">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-sm text-gray-500">
                {data.rating} / 5
              </span>
            </div>

            {/* Description */}
            <p className="mb-6 leading-7 text-gray-600">
              {data.description}
            </p>

            {/* Brand */}
            <div className="mb-4">
              <span className="text-sm text-gray-500">
                Brand
              </span>
              <p className="font-semibold text-gray-800">
                {data.brand}
              </p>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-center gap-4">
              <span className="text-4xl font-bold text-indigo-600">
                ${data.price}
              </span>

              <span className="rounded bg-green-100 px-3 py-1 text-sm font-semibold text-green-600">
                {data.discountPercentage}% OFF
              </span>
            </div>

            {/* Stock */}
            <div className="mb-6">
              <span className="text-sm text-gray-500">
                Availability
              </span>

              <p
                className={`font-semibold ${
                  data.stock > 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data.stock > 0
                  ? `${data.stock} items available`
                  : "Out of stock"}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
                Buy Now
              </button>

              <button onClick={()=>{
                dispatch(addtocart(data))
              }}  className="flex-1 rounded-lg border-2 border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50">
                Add to Cart
              </button>
            </div>

            <div className="flex gap-4 mt-4">
              <button disabled={id==1} onClick={()=>{
                naviagte(`/detail/${id -1}/product`)
               
              }} className="flex-1 rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
               Prev
              </button>

              <button onClick={handleclick} className="flex-1 rounded-lg border-2 border-indigo-600 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50">
                Next
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;