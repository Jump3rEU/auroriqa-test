"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContactPopupContextType {
  isOpen: boolean;
  openPopup: (prefillService?: string) => void;
  closePopup: () => void;
  prefillService: string;
}

const ContactPopupContext = createContext<ContactPopupContextType | undefined>(undefined);

export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefillService, setPrefillService] = useState("");

  const openPopup = (service = "") => {
    setPrefillService(service);
    setIsOpen(true);
  };

  const closePopup = () => setIsOpen(false);

  return (
    <ContactPopupContext.Provider value={{ isOpen, openPopup, closePopup, prefillService }}>
      {children}
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  const ctx = useContext(ContactPopupContext);
  if (!ctx) throw new Error("useContactPopup must be used within ContactPopupProvider");
  return ctx;
}
