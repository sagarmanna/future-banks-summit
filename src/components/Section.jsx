import React from "react";

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="bg-white shadow rounded p-6 my-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </section>
  );
}
