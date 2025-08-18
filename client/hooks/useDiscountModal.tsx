import { createContext, useContext, useState, ReactNode } from "react";

interface DiscountModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const DiscountModalContext = createContext<
  DiscountModalContextType | undefined
>(undefined);

export function DiscountModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <DiscountModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </DiscountModalContext.Provider>
  );
}

export function useDiscountModal() {
  const context = useContext(DiscountModalContext);
  if (context === undefined) {
    throw new Error(
      "useDiscountModal must be used within a DiscountModalProvider",
    );
  }
  return context;
}
