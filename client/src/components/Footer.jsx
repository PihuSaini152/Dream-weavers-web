import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        padding: "45px 20px",
        textAlign: "center",
        background: "rgba(255,255,255,0.03)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        position: "relative",
      }}
    >
      {/* Glowing line on top */}
      <div
        style={{
          height: "3px",
          width: "160px",
          margin: "0 auto 25px",
          background: "linear-gradient(90deg, #8E63FF, #B784FF)",
          borderRadius: "6px",
        }}
      ></div>

      <h3
        style={{
          fontSize: "1.6rem",
          marginBottom: "8px",
          fontWeight: "600",
        }}
      >
        Thank you for visiting! 💜
      </h3>

      <p
        style={{
          fontSize: "1rem",
          opacity: 0.8,
          marginBottom: "25px",
        }}
      >
        Let’s connect and create something amazing together.
      </p>

      {/* Insta Button */}
  

      <p
        style={{
          marginTop: "30px",
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        © 2025 Priyanka Saini • Dream Weavers Web  
      </p>
    </footer>
  );
}
