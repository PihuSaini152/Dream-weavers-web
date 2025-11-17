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
   <a 
  href="https://instagram.com/your_username" 
  target="_blank"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "12px 22px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.18)",
    backdropFilter: "blur(10px)",
    fontSize: "1rem",
    fontWeight: "500",
    color: "white",
    textDecoration: "none",
    transition: "0.3s",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.05)";
    e.currentTarget.style.boxShadow = "0 0 18px rgba(255,0,150,0.45)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  {/* Instagram Gradient Icon */}
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      background: "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    <path d="M7 2C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2H7Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 8.5C9.79 8.5 8 10.29 8 12.5C8 14.71 9.79 16.5 12 16.5C14.21 16.5 16 14.71 16 12.5C16 10.29 14.21 8.5 12 8.5Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
  </svg>

  Instagram
</a>

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
