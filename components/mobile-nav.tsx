"use client";

import { useEffect, useState } from "react";
import { Dialog } from "radix-ui";
import { Menu, X } from "lucide-react";

const links = [
  ["news", "Recent News"],
  ["home", "Home"],
  ["about", "About"],
  ["projects & thesis", "Projects & Thesis"],
  ["experience", "Experience"],
  ["articles", "Articles"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

export function MobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  // Close the mobile menu if the window becomes desktop-sized.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 769px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="mobile-menu-button"
          aria-label="Open navigation menu"
        >
          <Menu size={26} aria-hidden="true" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-overlay" />
        <Dialog.Content
          className="mobile-menu-panel"
          aria-describedby={undefined}
        >
          <Dialog.Title className="mobile-menu-title">
            Navigation menu
          </Dialog.Title>

          <Dialog.Close asChild>
            <button
              type="button"
              className="mobile-menu-close"
              aria-label="Close navigation menu"
            >
              <X size={28} aria-hidden="true" />
            </button>
          </Dialog.Close>

          <div className="mobile-menu-scroll">
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {links.map(([id, label]) => (
                <Dialog.Close asChild key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={(active || "home") === id ? "location" : undefined}
                  >
                    {label}
                  </a>
                </Dialog.Close>
              ))}
            </nav>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
