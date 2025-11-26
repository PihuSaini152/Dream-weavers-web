import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      style={{
        minHeight: "90vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Soft Gradient Light */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-200px",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(142,99,255,0.18) 0%, transparent 70%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      ></div>

      <div style={{ maxWidth: "950px", width: "100%", zIndex: 2 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "2.8rem",
            marginBottom: "25px",
            fontWeight: "700",
            background: "linear-gradient(90deg, #8E63FF, #B784FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About Me
        </motion.h2>

        {/* PARAGRAPH + IMAGE SIDE BY SIDE */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "35px",
            marginBottom: "40px",
           
          }}
        >
          {/* LEFT TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.8",
              opacity: 0.9,
              color: "var(--text-muted)",
              flex: 1,
            }}
          >
            Hi, I'm <span style={{ color: "var(--accent)" }}>Priyanka Saini</span>, 
            the creator behind 
            <strong style={{ color: "var(--accent)" }}> Dream Weavers Web</strong> — 
            where I build stunning websites, share coding tutorials, and help others 
            start their web development journey.
            <br /><br />
            I’m a passionate <strong>Full-Stack Developer</strong> who loves creating 
            modern UI, smooth animations, clean backend logic and meaningful user 
            experiences. My goal is simple — 
            <strong> turn ideas into beautiful, high-performance digital products.</strong>
          </motion.p>

          {/* RIGHT SIDE PHOTO */}
          <motion.img
            src="/about.jpg"   // yaha apni photo ka path lagana
            // alt="Priyanka Saini"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            
            style={{
              width: "280px",
              height: "280px",
              objectFit: "cover",
              borderRadius: "20px",
              boxShadow: "0 0 20px rgba(142,99,255,0.25)",
              border: "2px solid rgba(255,255,255,0.1)",
            
            }}
          />
        </div>

        {/* CARDS — UNCHANGED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {[
            {
              title: "Clean Code",
              desc: "Maintainable, scalable and developer-friendly code.",
            },
            {
              title: "Creative Design",
              desc: "Elegance + minimalism, with bold visual energy.",
            },
            {
              title: "Performance First",
              desc: "Fast, responsive UI with optimized backend flow.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.04 }}
              style={{
                padding: "20px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 18px rgba(142,99,255,0.12)",
              }}
            >
              <h4
                style={{
                  fontSize: "1.1rem",
                  color: "var(--accent)",
                  marginBottom: "10px",
                }}
              >
                {card.title}
              </h4>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
