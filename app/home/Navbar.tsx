import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-white font-bold text-lg">My Store</a>
            </Link>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link href="/">
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">Home</p>
              </Link>
              <Link href="/products">
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">Products</p>
              </Link>
              <Link href="/cart">
                <p className="text-gray-300 hover:text-white px-3 py-2 rounded-md cursor-pointer">Cart</p>
              </Link>
            </div>
            <div className="md:hidden">
              <button className="text-gray-300 hover:text-white focus:outline-none">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
