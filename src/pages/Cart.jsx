
import React from 'react';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 1999,
      quantity: 1,
      image: 'https://placehold.co/120x120?text=Headphones',
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 2499,
      quantity: 2,
      image: 'https://placehold.co/120x120?text=Watch',
    },
  ];

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          My Cart
        </h1>

        <p className="mb-8 text-gray-500">
          You have {totalItems} items in your cart.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="space-y-4 lg:col-span-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-28 rounded-lg object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Price: ₹{item.price.toLocaleString('en-IN')}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <p className="text-lg font-bold text-gray-800">
                    ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                  </p>

                  <button
                    onClick={() =>
                      alert(`${item.name} removed from cart`)
                    }
                    className="mt-3 text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-bold text-gray-800">
              Order Summary
            </h2>

            <div className="mb-4 flex justify-between text-gray-600">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="mb-4 flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>

            <div className="mb-4 flex justify-between text-gray-600">
              <span>Shipping</span>
              <span className="font-medium text-green-600">Free</span>
            </div>

            <div className="my-5 border-t border-gray-200" />

            <div className="mb-6 flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>

            <button
              onClick={() => alert('Checkout coming soon!')}
              className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Secure checkout • Free shipping
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
