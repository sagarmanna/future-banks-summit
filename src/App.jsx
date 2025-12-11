import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Topics from "./components/Topics";
import Footer from "./components/Footer";
import { overviewText, whoWillYouMeet, topicsList, industriesList } from "./content";

export default function App() {
  return (
    <div className="font-sans text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        <Section id="overview" title="Event Overview">
          <p>{overviewText}</p>
        </Section>

        <Section id="who" title="Who Will You Meet">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whoWillYouMeet.map(p => (
              <li key={p} className="bg-white shadow p-3 rounded">{p}</li>
            ))}
          </ul>
        </Section>

        <Topics topics={topicsList} />

        <Section id="industries" title="Industries Covered">
          <ul className="flex flex-wrap gap-3">
            {industriesList.map(i => (
              <li key={i} className="px-3 py-1 bg-slate-100 rounded">{i}</li>
            ))}
          </ul>
        </Section>

        <Section id="contact" title="Contact & Brochure">
          <p>For more info contact: info@verve-management.com | +971 4 243 4677</p>
          <div className="mt-4 flex gap-3">
            <a href="/assets/final_logo_proptech.pdf" download className="px-4 py-2 bg-sky-600 text-white rounded">Download Brochure</a>
            <a href="#contact" className="px-4 py-2 border border-sky-600 text-sky-600 rounded">Register</a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
