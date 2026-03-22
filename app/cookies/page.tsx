import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zásady cookies | Auroriqa",
  description: "Informace o používání cookies na webu Auroriqa.",
  alternates: { canonical: "https://auroriqa.cz/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#090910] text-white">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6">Zásady cookies</h1>
        <p className="text-white/70 leading-relaxed mb-4">
          Tento web používá nezbytné cookies pro správné fungování a volitelné analytické cookies pro zlepšování výkonu a obsahu.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Typy cookies</h2>
        <ul className="list-disc pl-5 text-white/70 space-y-2">
          <li>Nezbytné cookies: bezpečnost, session, technické fungování webu.</li>
          <li>Analytické cookies: anonymní měření návštěvnosti a chování uživatelů.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Správa souhlasu</h2>
        <p className="text-white/70 leading-relaxed">
          Souhlas můžeš kdykoli změnit přes cookie lištu. Odmítnutí analytických cookies neovlivní funkčnost webu.
        </p>
      </section>
    </main>
  );
}
