import Link from "next/link";
export default function Home() {
  return (
    <div>
      {/* <div className="pt-32 text-4xl font-mono font-semibold text-center ">
      Assalamualaikum Hamba Allah
      </div> */}

<div className="hero min-h-16 bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-2xl font-bold"> Assalamualaikum Hamba Allah</h1>
      <p className="py-6">Sudahkah antum baca Al-Quran hari ini?. Apabila belum yuk mari baca Al-Quran di bawah ini!</p>
    
    </div>
  </div>
</div>
<div className="container text-center">
<Link href="/tes"><button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                  klik di sini untuk memulai membaca Al-Quran
          </button></Link>
          </div>
    </div>
    
  );
}
