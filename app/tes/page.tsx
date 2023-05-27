
import Link from "next/link";
export const metadata = {
  title: "Al-Quran",
};

// type Product = {
//   id: number;
//   namaLatin: string;
//   data: string;
//   jumlahAyat: number;
// };
interface AyatData {
  nomor: number;
  namaArab: string;
  namaLatin: string;
  namaIndonesia: string;
  arti: string;
  jumlahAyat: number;
  // Add other properties here
}


// async function getProducts() {
//   const res = await fetch("https://equran.id/api/v2/surat", {
//     cache: "no-store",
//   });
//   return res.json();
// }

export default async function ProductList() {
  // const product: Product[] = await getProducts();
  const fetchData = await fetch ("https://equran.id/api/v2/surat")
  const res =await fetchData.json()
  return (

    <div className="container w-full  p-4 justify-items-center items-center">
    <div className="justify-items-center items-center">
      {res.data.map((data: AyatData) => (
        <>
        <div className="flex items-center justify-start gap-5">
        <div className="relative inline-block">
          <img src="/images/nomer-surat.png" alt="" />
          <p className="text-dark-blue dark:text-white font-bold absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs">
            {data.nomor}
          </p>
        </div>
        <div className="">
          <h1 className="text-dark-blue dark:text-white font-medium text-lg">
            {data.namaLatin}
          </h1>
          <p className="text-light-gray text-base md:text-sm">
            {data.arti} - {data.jumlahAyat} Ayat
          </p>
        </div>
      </div>
      <h1 className="text-primary-blue dark:text-[#5BC0EB] font-bold text-2xl font-arabic">
        {data.namaIndonesia}
      </h1>
      <div className="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <Link href={`/tes/${data.nomor}`}><span>Klik di sini untuk membaca surah {data.namaLatin} </span></Link>
  </div>

 

</div>
      </>
      ))}
    </div>
  </div>
    
  );
}
