import React from "react";

export default function Navbar() {
  const items = [
    { href:'#overview', label:'Overview' },
    { href:'#topics', label:'Topics' },
    { href:'#who', label:'Who' },
    { href:'#industries', label:'Industries' },
    { href:'#contact', label:'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/assets/Future-Banks-Summit-KSA-2023.png" alt="logo" className="h-10 object-contain"/>
          <span className="font-semibold">Future Banks Summit</span>
        </div>
        <div className="hidden md:flex gap-4">
          {items.map(it => (
            <a key={it.href} href={it.href} className="text-sm hover:text-sky-600">{it.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
}
