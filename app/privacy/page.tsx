import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ochrana soukromí | Auroriqa",
  description: "Jak Auroriqa zpracovává osobní údaje v kontaktním formuláři.",
  alternates: { canonical: "https://auroriqa.cz/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#090910] text-white">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6">Ochrana soukromí</h1>
        <p className="text-white/70 leading-relaxed mb-4">
          Při odeslání kontaktního formuláře zpracováváme jméno, email, telefon (volitelně) a obsah zprávy výhradně za účelem reakce na poptávku.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Právní základ</h2>
        <p className="text-white/70 leading-relaxed">
          Zpracování probíhá na základě oprávněného zájmu odpovědět na tvůj dotaz a před uzavřením smlouvy dle čl. 6 odst. 1 písm. b) a f) GDPR.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Doba uchování</h2>
        <p className="text-white/70 leading-relaxed">
          Údaje uchováváme po dobu nezbytně nutnou pro vyřízení poptávky a následnou obchodní komunikaci.
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-3">Kontakt</h2>
        <p className="text-white/70 leading-relaxed">V případě dotazů napiš na hello@auroriqa.cz.</p>
      </section>
    </main>
  );
}
