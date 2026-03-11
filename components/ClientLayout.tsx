"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { ContactPopupProvider } from "@/contexts/ContactPopupContext";
import ContactPopup from "@/components/ContactPopup";
import CookieConsent from "@/components/CookieConsent";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ContactPopupProvider>
        {children}
        <ContactPopup />
        <CookieConsent />
      </ContactPopupProvider>
    </LanguageProvider>
  );
}

