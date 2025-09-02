import { useState } from "react";
import { NeonInput } from "./neon-input";
import { offerBar } from "@/constants";
import { useDiscountModal } from "@/hooks/useDiscountModal";
import { useIsMobile } from "@/hooks/use-mobile";

export function DiscountModal() {
  const { isOpen, openModal, closeModal } = useDiscountModal();
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    closeModal();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Modal */}
      {isOpen && (
        <div
          id="discount-modal"
          role="dialog"
          aria-modal="true"
          aria-hidden="false"
          aria-labelledby="discount-title"
          className="fixed inset-0 z-[9999]"
        >
          <div
            className="overlay absolute inset-0 bg-black/60 backdrop-blur-md"
            onClick={handleOverlayClick}
          ></div>
          <div className="panel neo-glow relative mx-auto mt-[6vh] max-w-[900px] w-[92%] bg-white/6 border border-white/12 rounded-[20px] shadow-[0_0_36px_rgba(71,214,255,0.35)]">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 22px",
              }}
            >
              <h3
                id="discount-title"
                className="neon-headline"
                style={{ fontSize: "1.25rem" }}
              >
                {offerBar.heading} — {offerBar.sub}
              </h3>
              <button
                onClick={closeModal}
                className="neo-btn magnetic hover:scale-110 transition-transform"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div style={{ padding: "0 22px 22px" }}>
              <form onSubmit={handleSubmit}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: "12px",
                  }}
                >
                  <NeonInput
                    placeholder={offerBar.form[0]}
                    value={formData.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                  />
                  <NeonInput
                    placeholder={offerBar.form[1]}
                    value={formData.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                  />
                  <NeonInput
                    type="email"
                    placeholder={offerBar.form[2]}
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                  />
                  <NeonInput
                    type="tel"
                    placeholder={offerBar.form[3]}
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white/10 text-white placeholder:text-white/60 border-white/20"
                  />
                </div>
                <div style={{ marginTop: "14px" }}>
                  <button
                    className="neo-btn magnetic hover:scale-105 transition-transform px-6 py-3 rounded-lg text-white font-semibold"
                    type="submit"
                  >
                    {offerBar.cta}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Floating Open Button - Hidden on mobile */}
      {!isMobile && (
        <button
          onClick={openModal}
          id="open-discount"
          className="neo-btn magnetic hover:scale-105 transition-transform px-4 py-3 rounded-full text-white font-semibold shadow-lg"
        >
          Get Discount
        </button>
      )}
    </>
  );
}
