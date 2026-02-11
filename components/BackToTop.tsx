"use client";

import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const target = document.getElementById("services");
      if (!target) {
        setVisible(false);
        return;
      }

      const triggerY = target.getBoundingClientRect().top + window.scrollY;
      const hasScrolled = window.scrollY > 0;
      setVisible(hasScrolled && window.scrollY >= triggerY);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#accueil"
      aria-label="Retour en haut"
      className={`back-to-top ${visible ? "back-to-top--visible" : "back-to-top--hidden"}`}
    />
  );
};

export default BackToTop;
