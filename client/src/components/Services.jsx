import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaRocket, FaPalette, FaDatabase, FaShieldAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode size={36} />,
      title: "Frontend Development",
      desc: "Modern, responsive UI with clean animations and fast interactions.",
    },
    {
      icon: <FaLayerGroup size={36} />,
      title: "Backend Development",
      desc: "Secure, scalable APIs and logic layers that ensure reliability.",
    },
    {
      icon: <FaDatabase size={36} />,
      title: "Database Management",
      desc: "Efficient MySQL & MongoDB schemas for smooth data flow.",
    },
    {
      icon: <FaPalette size={36} />,
      title: "UI / UX Integration",
      desc: "Translating Figma & Adobe XD designs into pixel-perfect websites.",
    },
    {
      icon: <FaRocket size={36} />,
      title: "Deployment & Launch",
      desc: "Hosting, optimization, and continuous delivery setup for your projects.",
    },
    {
      icon: <FaShieldAlt size={36} />,
      title: "Performance & Security",
      desc: "Enhancing web performance and implementing secure architecture.",
    },
  ];

  return (
    <section
      id="services"
      className="services-section"
      style={{
        minHeight: "90vh",
        padding: "100px 10%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-150px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(123,79,255,0.15), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: "2.8rem",
          marginBottom: "50px",
          fontWeight: "700",
          textAlign: "center",
          background: "linear-gradient(90deg, #8E63FF, #B784FF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          zIndex: 2,
        }}
      >
        What I Do
      </motion.h2>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(142,99,255,0.4)",
            }}
            transition={{ duration: 0.4 }}
            style={{
              padding: "30px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(12px)",
              textAlign: "center",
              cursor: "pointer",
              color: "var(--text-light)",
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ color: "var(--accent)", marginBottom: "18px" }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: "10px", fontWeight: "600" }}>
              {service.title}
            </h3>
            <p style={{ fontSize: "0.95rem", opacity: 0.85 }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
