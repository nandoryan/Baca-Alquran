"use client";
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type surahs = {
  nomor: number;
  arti: string;
};

const Home = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    getSurahList();
  }, []);

  const getSurahList = async () => {
    try {
      const response = await fetch('https://equran.id/api/v2/surat');
      const data = await response.json();
      setSurahs(data.chapters);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Home - Daftar Surah Al-Quran</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">Daftar Surah Al-Quran</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {surahs.data.map((surah) => (
          <Link key={surah.id} href={`/surah/${surah.id}`}>
            <a className="surah-card bg-white border border-gray-300 rounded p-4 cursor-pointer transition-colors hover:bg-gray-100">
              <p className="text-lg font-semibold">{surah.namaLatin}</p>
              <p className="text-gray-500">{surah.arti}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
