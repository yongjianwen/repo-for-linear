"use client";

import { useEffect, useState } from "react";

const logos = [
  { label: "Spark", icon: "✦", colors: "from-violet to-cyan" },
  { label: "Orbit", icon: "◌", colors: "from-amber to-pink" },
  { label: "Bloom", icon: "✿", colors: "from-emerald to-lime" },
  { label: "Pulse", icon: "◆", colors: "from-sky to-indigo" },
];

export function RandomLogo() {
  const [logoIndex, setLogoIndex] = useState(0);
  const logo = logos[logoIndex];

  useEffect(() => {
    setLogoIndex(Math.floor(Math.random() * logos.length));
  }, []);

  return (
    <div className={`logo ${logo.colors}`} aria-label={`${logo.label} logo`}>
      <span className="logo__orbit" aria-hidden="true" />
      <span className="logo__mark" aria-hidden="true">
        {logo.icon}
      </span>
      <span className="logo__label">{logo.label}</span>
    </div>
  );
}
