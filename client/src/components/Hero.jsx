import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="hero-bg" style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <div style={{ position: "relative", zIndex: 2 }}>
        
        {/* Greeting */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: "3.2rem", fontWeight: "600", marginBottom: "6px" }}
        >
          Hello, I'm <span style={{ color: "var(--accent)" }}>Priyanka Saini</span>
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            fontSize: "2.6rem",
            fontWeight: "700",
            marginBottom: "16px",
            background: "linear-gradient(90deg, #7B4FFF, #B384FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Full-Stack Web Developer
        </motion.h2>

        {/* Short Intro Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          style={{ 
            maxWidth: "540px",
            fontSize: "1.1rem",
            opacity: 0.85,
            lineHeight: "1.6",
            marginBottom: "28px"
          }}
        >
          I create meaningful web experiences with clean UI and scalable backend architecture. 
          My goal is to turn ideas into polished digital products.
        </motion.p>

        {/* Contact Button */}
      <motion.a
  href="#contact"
  whileHover={{ 
    scale: 1.07, 
    boxShadow: "0 0 15px rgba(123,79,255,0.65)", 
    backgroundColor: "#8E63FF"
  }}
  whileTap={{ scale: 0.95 }}
  style={{
    padding: "14px 42px",
    background: "var(--accent)",
    borderRadius: "8px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "0.3s ease",
    display: "inline-block",
    color: "white",
  }}
>
  Contact Me
</motion.a>


      </div>
    </section>
  );
}
