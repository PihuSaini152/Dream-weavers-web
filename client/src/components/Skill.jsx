import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMysql, SiNetlify, SiVercel } from "react-icons/si";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML" },
        { icon: <FaCss3Alt />, name: "CSS" },
        { icon: <FaJsSquare />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
      ],
    },
    {
      title: "Database",
      skills: [
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaDatabase />, name: "Postman" },
        { icon: <FaFigma />, name: "Figma" },
      ],
    },
    {
      title: "Hosting",
      skills: [
        { icon: <SiNetlify />, name: "Netlify" },
        { icon: <SiVercel />, name: "Vercel" },
        { icon: <FaCloud />, name: "Render" },
      ],
    },
    {
      title: "Other Skills",
      skills: [
        { icon: <FaDatabase />, name: "REST APIs" },
        { icon: <FaFigma />, name: "Responsive Design" },
        { icon: <FaGitAlt />, name: "Version Control" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="skills-section"
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
          right: "-200px",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(142,99,255,0.18) 0%, transparent 70%)",
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
        My Skills
      </motion.h2>

      {/* Skill Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {skillCategories.map((category, i) => (
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
              padding: "28px",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(10px)",
              textAlign: "center",
              color: "var(--text-light)",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "20px",
                color: "var(--accent)",
              }}
            >
              {category.title}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "18px",
              }}
            >
              {category.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  whileHover={{
                    scale: 1.15,
                    color: "var(--accent)",
                    textShadow: "0 0 12px rgba(142,99,255,0.7)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "2rem",
                    color: "var(--text-light)",
                    cursor: "pointer",
                  }}
                >
                  {skill.icon}
                  <span style={{ fontSize: "0.85rem", opacity: 0.85 }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
