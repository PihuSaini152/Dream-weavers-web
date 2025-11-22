import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "Clothes Store Website",
      desc: "A fully responsive fashion e-commerce platform with backend integration and smooth cart system.",
      img: "/project1.jpg",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://clothes-9s4adhayi-priyanka-sainis-projects-6a0ab081.vercel.app",
    },
    {
      title: "Interior Design Website",
      desc: "Modern interior design and architecture showcase site with dynamic backend for content updates.",
      img: "/project2.jpg",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      live: "https://interior-70q32tfoq-priyanka-sainis-projects-6a0ab081.vercel.app",
    },
    {
      title: "Thar Car Showcase",
      desc: "Landing page for Mahindra Thar with dynamic design, animations, and backend-driven contact form.",
      img: "/project3.jpg",
      tech: ["React", "Node.js", "Express"],
      live: "https://thar-website-r4h9.vercel.app/",
    },
    {
      title: "Car E-Commerce",
      desc: "E-commerce platform for buying and selling cars, built with modern UI and responsive layout.",
      img: "/project4.jpg",
      tech: ["React", "CSS", "JavaScript"],
      live: "https://cars-ecommerce-priyanka.vercel.app",
    },
    {
      title: "Personal Portfolio",
      desc: "My own portfolio website showcasing my full-stack work, skills, and creative web experiences.",
      img: "/project5.jpg",
      tech: ["React", "Framer Motion", "CSS"],
      live: "https://dreamweaversweb.vercel.app",
    },
    {
      title: "Mini Projects Collection",
      desc: "A collection of small web apps including weather app, todo list, and form validation projects.",
      img: "/project6.jpg",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      live: "https://miniapps-priyanka.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section"
      style={{
        minHeight: "90vh",
        padding: "100px 10%",
        position: "relative",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-150px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(142,99,255,0.18), transparent 70%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      ></div>

      {/* Section Heading */}
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
        My Projects
      </motion.h2>

      {/* Project Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "28px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 25px rgba(142,99,255,0.35)",
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
            }}
          >
            {/* Image */}
            <motion.img
              src={p.img}
              alt={p.title}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            />

            {/* Content */}
            <div style={{ padding: "22px" }}>
              <h3 style={{ color: "var(--accent)", marginBottom: "10px" }}>{p.title}</h3>
              <p style={{ opacity: 0.85, fontSize: "0.95rem", marginBottom: "14px" }}>
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "18px",
                }}
              >
                {p.tech.map((t, j) => (
                  <span
                    key={j}
                    style={{
                      fontSize: "0.8rem",
                      background: "rgba(142,99,255,0.15)",
                      color: "#CBB9FF",
                      padding: "6px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Single Centered Button */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "var(--accent)",
                    color: "white",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    transition: "0.3s ease",
                  }}
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
