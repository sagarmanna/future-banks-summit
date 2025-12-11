import React from "react";

export default function Topics({ topics }) {
  return (
    <section id="topics" className="bg-white shadow rounded p-6 my-6">
      <h2 className="text-2xl font-semibold mb-4">Topic Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map(t => (
          <article key={t.title} className="p-4 border rounded hover:shadow">
            <h3 className="font-semibold">{t.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{t.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
