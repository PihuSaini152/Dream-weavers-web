import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    setStatus(result.message);

    if (result.success) {
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          maxWidth: "550px",
          padding: "32px",
          borderRadius: "14px",
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.05)",
          backdropFilter: "blur(14px)"
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "20px",
            textAlign: "center",
            color: "var(--accent)"
          }}
        >
          Let's Work Together
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ ...inputStyle, resize: "none" }}
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "12px",
              background: "linear-gradient(90deg, #8E63FF, #B784FF)",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
              border: "none",
              color: "#fff",
              fontSize: "1rem"
            }}
          >
            Send Message
          </motion.button>

          {status && <p style={{ marginTop: "6px", opacity: 0.85 }}>{status}</p>}
        </form>

        {/* Instagram Direct Link */}
        <div
          style={{
            marginTop: "30px",
            textAlign: "center"
          }}
        >
          <p style={{ marginBottom: "10px", color: "var(--text-muted)" }}>
            Or connect with me here:
          </p>

          <motion.a
            href="https://www.instagram.com/dreamweaversweb"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              background: "rgba(255,255,255,0.08)",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              textDecoration: "none"
            }}
          >
            <FaInstagram size={22} color="#FF4EC9" />
            Instagram
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.25)",
  color: "white"
};
