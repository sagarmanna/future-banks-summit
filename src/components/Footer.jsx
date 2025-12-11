import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between">
        <div>
          <h4 className="font-semibold">Future Banks Summit</h4>
          <p className="text-sm">info@verve-management.com | +971 4 243 4677</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm">&copy; 2025 Verve Management</div>
      </div>
    </footer>
  );
}
