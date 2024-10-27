
"use client";

import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-yellow-300 to-blue-400 min-h-screen font-sans text-gray-900 py-20">
      <main className="container mx-auto p-6">

        <div className="flex items-center justify-center pb-6">
          <img src="/main.jpeg" alt="Main" width={300} />
        </div>

        <h1 className="text-6xl font-extrabold text-center text-red-600 mt-4" style={{ fontFamily: 'Comic Sans MS, sans-serif' }}>
          Plusle to Pulse ピカとピコ  ⚡
        </h1>
        <p className="text-center text-gray-700 mt-8 text-2xl">
          Plusle is an Electric-type Pokémon known for its upbeat and supportive nature, often seen cheering on its teammates with boundless energy. With red, rabbit-like ears and a small, white body, Plusle has positive-themed markings, including a “+” symbol on its cheeks and a red plus-shaped tail. It generates sparks of electricity to motivate others, especially its partner Minun. Plusle is a friendly, energetic Pokémon, popular for its cheerleader-like spirit and ability to boost the morale of those around it.
        </p>

        <div className="flex items-center justify-center mt-8 gap-6">
          <a href="https://t.me/PlusleToPulse" target="_blank" rel="noreferrer">
            <FaTelegram size="2em" color="#dc2626" />
          </a>
          <a href="https://x.com/plusletopulse" target="_blank" rel="noreferrer">
            <FaTwitter size="2em" color="#dc2626" />
          </a>
        </div>

        <div className="text-center text-2xl pt-14 text-red-600 space-y-4">
          <h3 className="font-bold">Initial Supply:</h3>
          <p className="text-red-600 text-4xl">
            1,000,000,000
          </p>
        </div>


        <div className="text-center flex items-center justify-center mt-8 py-14 gap-5">
          <a
            href="https://app.9inch.io/?chain=pulsechain&outputCurrency=0x006d197201d162343D62C9F9759F0758336dF560"
            target="_blank"
            className="bg-yellow-400 flex gap-2 px-10 justify-center items-center text-blue-600 font-bold border text-4xl py-2  rounded hover:bg-yellow-500 transition"
            rel="noreferrer"
          >
            Buy
          </a>

          <a href="https://dexscreener.com/pulsechain/0x0b635019c81339a04d3347ea4234328c403dd12e" target="_blank"
            className="bg-yellow-400 flex gap-2 px-10 justify-center items-center text-blue-600 font-bold border text-4xl py-2 rounded hover:bg-yellow-500 transition"
            rel="noreferrer"
          >
            Dexscreener
          </a>
        </div>

        <div className="text-center text-4xl pt-4 text-red-600">Ca: 0x006d197201d162343D62C9F9759F0758336dF560</div>

        <div className="flex items-center justify-center mt-8 gap-6 py-10">
          <img src="/1.webp" alt="Plusle 1" className="h-44" />
          <img src="/2.png" alt="Plusle 2" className="h-44" />
          <img src="/3.jpg" alt="Plusle 2" className="h-44" />
          <img src="/4.png" alt="Plusle 2" className="h-44" />
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center text-red-600 mb-4">Plusle Token Price Chart</h2>
          <div className="">
            {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
            <iframe src="https://dexscreener.com/pulsechain/0x0b635019c81339a04d3347ea4234328c403dd12e?embed=1&theme=dark" className="w-full h-[600px]" />
          </div>
        </div>
      </main>
    </div>
  );
}