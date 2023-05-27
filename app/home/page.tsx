import { Url } from "url";
import Navbar from "../products/navBar";
import AddProduct from "../home/addProduct";

export const metadata = {
  title: "Product List",
};

type Product = {
  nomor: number;
  namaLatin: string;
  // image: Url;
  tempatTurun: string;
  arti: string;
};

async function getProducts() {
  const res = await fetch("https://equran.id/api/v2/surat", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const products: Product[] = await getProducts();
  return (
    
    <div className=" px-4 bg-slate-300">
        <div className=" px-4 bg-slate-300">
    <Navbar/>
    </div>
    
      <div className="mt-10 pt-8 ">
      <AddProduct/>
      <h1 className="text-4xl font-semibold from-neutral-800 my-4">My Products</h1>
      
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((products, index) => (
          <div key={products.nomor} className="bg-white p-4 rounded-lg shadow transition-transform hover:scale-105 hover:transition-duration-4">
            {/* <img
              src={product.image.toString()}
              alt={product.namaLatin}
              className="w-full h-40 object-contain mb-4"
            /> */}
            <h2 className="text-lg font-bold mb-2">{products.namaLatin}</h2>
            <p className="text-gray-500 mb-2">{products.tempatTurun}</p>
            <div className="flex justify-between">
            <p className="text-green-500 font-bold">${products.arti}</p>
            <a className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-auto cursor-pointer">
                Buy Now
              </a>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
