import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
     <nav style={{
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  padding: "18px 9%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 999,
  background: "rgba(14, 14, 22, 0.65)",
  backdropFilter: "blur(14px)",
  borderBottom: "1px solid rgba(123, 79, 255, 0.35)",
  boxShadow: "0px 0px 18px rgba(123, 79, 255, 0.25)"
}}>

        
        {/* LOGO */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="/assets/logo.png" alt="logo" style={{ height: "40px" }} />
          {/* <h2 style={{ fontSize: "1.3rem", fontWeight: 600 }}>dream weavers web</h2> */}
        </div>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={{ display: "flex", gap: "35px", alignItems: "center" }}>
          {navLinks.map((link, i) => (
            <a key={i} href={link.href} style={{ position: "relative", cursor: "pointer" }}>
              {link.label}
              <span className="underline"></span>
            </a>
          ))}
        </div>

        {/* MOBILE ICON */}
        <div className="mobile-toggle" onClick={() => setMenuOpen(true)}>
          <FaBars size={26} />
        </div>
      </nav>

      {/* MOBILE SLIDE MENU */}
     {menuOpen && (
  <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "rgba(10,10,10,0.96)",
      backdropFilter: "blur(12px)",
      display: "flex",
      flexDirection: "column",
      padding: "80px 40px",
      zIndex: 99999,
    }}
  >
    {/* Close Button */}
    <FaTimes
      size={32}
      style={{
        position: "absolute",
        top: "24px",
        right: "24px",
        cursor: "pointer",
        color: "white"
      }}
      onClick={() => setMenuOpen(false)}
    />

    {/* Menu Links */}
 {navLinks.map((link, i) => (
  <a
    key={i}
    href={link.href}
    onClick={() => setMenuOpen(false)}
    className="mobile-menu-link"
  >
    {link.label}
  </a>
))}

  </motion.div>
)}

    </>
  );
}
