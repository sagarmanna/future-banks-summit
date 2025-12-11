import React from "react";

export default function Hero() {
  return (
    <header className="bg-gradient-to-r from-sky-800 to-slate-900 text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold">4th Annual Future Banks Summit & Awards</h1>
          <p className="mt-4 text-lg">September 11 - 12, 2023 | Riyadh Marriott Hotel</p>
          <p className="mt-6 max-w-xl text-slate-100">Digital Innovations Transforming the Kingdom’s Banking Landscape</p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 bg-white text-slate-900 rounded shadow">Register</a>
            <a href="/assets/final_logo_proptech.pdf" download className="px-5 py-3 border border-white rounded">Download Brochure</a>
          </div>
        </div>
        <div className="flex-1">
          <img src="/assets/Future-Banks-Summit-KSA-2023.png" alt="hero" className="w-full max-w-md mx-auto"/>
        </div>
      </div>
    </header>
  );
}
