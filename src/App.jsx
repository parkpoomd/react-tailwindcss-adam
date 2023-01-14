import { useEffect, useState } from "react";

function App() {
  const property = {
    imageUrl:
      "https://images.unsplash.com/photo-1600585153490-76fb20a32601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center",
    priceInCents: 190000,
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 4,
  };

  return (
    <div className="antialiased text-gray-900">
      <Navbar />
      <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
        <PropertyCard property={property} />
      </div>
    </div>
  );
}

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleEscape = (e) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prevOpen) => !prevOpen)}
        className="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
      >
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
          alt="Your avatar"
        />
      </button>
      {isOpen && (
        <button
          onClick={() => setIsOpen(false)}
          tabIndex={-1}
          className="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
        ></button>
      )}
      {isOpen ? (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Account settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Support
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          >
            Sign out
          </a>
        </div>
      ) : null}
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0">
        <div>
          <button
            type="button"
            className="text-white flex items-center space-x-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
              />
            </svg>
            <span className="uppercase font-semibold tracking-wide">
              The Home
            </span>
          </button>
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen((prevOpen) => !prevOpen)}
            type="button"
            className="block text-gray-500 hover:text-white focus:outline-none focus:text-white"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      <nav className={`${isOpen ? "block" : "hidden"} sm:block`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:flex sm:space-y-0 sm:space-x-2 sm:p-0">
          <a
            href="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            List your property
          </a>
          <a
            href="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Trips
          </a>
          <a
            href="#"
            className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800"
          >
            Messages
          </a>
          <div className="hidden sm:block sm:ml-6">
            <AccountDropdown />
          </div>
        </div>
        <div className="px-4 py-5 border-t border-gray-800 sm:hidden">
          <div className="flex items-center">
            <img
              className="h-8 w-8 border-2 border-gray-600 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              alt="Your avatar"
            />
            <span className="ml-3 font-semibold text-white">David Green</span>
          </div>
          <div className="mt-4 space-y-2">
            <a href="#" className="block text-gray-400 hover:text-white">
              Account settings
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Support
            </a>
            <a href="#" className="block text-gray-400 hover:text-white">
              Sign out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function PropertyCard({ property }) {
  return (
    <div>
      <img
        className="h-full w-full object-cover rounded-lg shadow-md"
        src={property.imageUrl}
        alt={property.imageAlt}
      />
      <div className="relative px-4 -mt-16">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 py-0.5 rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
            <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
              {property.beds} beds &bull; {property.baths} baths
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
            {property.title}
          </h4>
          <div className="mt-1">
            {property.formattedPrice}
            <span className="text-gray-600 text-sm"> / wk</span>
          </div>
          <div className="mt-2 flex items-center">
            {[...Array(5)].map((n, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-4 h-4 ${
                  i < property.rating ? "text-teal-500" : "text-gray-400"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}

            <span className="ml-2 text-gray-600 text-sm">
              {property.reviewCount} reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
