
import Link from "next/link";
export const metadata = {
  title: "Al-Quran",
};

type Product = {
  id: number;
  namaLatin: string;
  data: string;
  jumlahAyat: number;
};

async function getProducts() {
  const res = await fetch("https://equran.id/api/v2/surat", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ProductList() {
  const product: Product[] = await getProducts();
  return (
    <div className="py-10 px-10">
      <div className="py-2">
        {/* <AddProduct /> */}
      </div>

      <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>Nama Surah</th>
       
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {product?.data.map((product, index) => (
        <tr key={product.id}>
          <td>{index + 1}</td>
          <td>
            <Link href={`/tes/${product.nomor}`}>
              {product.namaLatin}
            </Link>
          </td>
          
          <td className="flex">
            <div className="mr-1">
              <Link href={`/tes/${product.nomor}`}>
                <button className="px-3 py-2 text-white bg-blue-500 rounded-md">
                  Baca
                </button>
              </Link>
              {/* <UpdateList /> */}
            </div>
            {/* <DeleteProduct {...product} /> */}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


      
    </div>
  );
}
