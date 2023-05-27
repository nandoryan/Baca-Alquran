import Link from "next/link"
export default async function Product({params} : {params:{surahId:string}}) {
  const fetchData = await fetch (`https://equran.id/api/v2/surat/${params.surahId}`)
  const res =await fetchData.json()
  console.log(res)
  return (
    <div>
      {/* <h1>{params.surahId}</h1>
     <h1>{res.data.nama}</h1>
    <h1>{res.data.namaLatin}</h1>
     <h1>{res.data.jumlahAyat}</h1>
      <h1>{res.data.tempatTurun}</h1>
       <h1>{res.data.arti}</h1> */}
        {/* <h1>{res.data.deskripsi}</h1> */}
         {/* <h1>{res.data.ayat.teksArab}</h1> */}

          {/* <h1 className="text-white">{res.data.ayat.map(data => (
            <div key={data.teksAyat}>
              {data.nomorAyat}
            {data.teksArab}
            {data.teksLatin}
            
            {data.teksIndonesia}
  
            
            </div>
          ))}</h1> */}

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          {/* <div className="p-4">
            <h2 className="text-xl font-medium text-gray-800">{res.data.nama}</h2>
            <p className="text-gray-500">{res.data.deskripsi}</p>
          </div> */}
          <div className="p-4 bg-white">
            <div className="space-y-4">
              {res.data.ayat.map((data) => (
                <div key={data.nomorAyat}>
                  <div className="text-sm text-gray-800 ">{data.nomorAyat}</div>
                  <div className="text-gray-600 text-right font-arabic text-2xl">{data.teksArab}</div>
                  <div className="text-gray-600 text-right">{data.teksLatin}</div>
                  <div className="text-gray-600">{data.teksIndonesia}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-200">
      <Link href="/"><button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                  back
          </button></Link>
        </div>
       
      </div>
    
{/* <div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
{res.data.ayat.map(data => (
            <div key={data.teksAyat}>
              {data.nomorAyat}
            {data.teksArab}
            {data.teksLatin}
            
            {data.teksIndonesia}
  
            
            </div>
          ))}
 
    <h2 className="card-title">{res.data.nama}</h2>
    <p>{res.data.deskripsi}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{res.data.jumlahAyat}</button>
    </div>
  </div>
</div> */}
    </div>
  );
}
