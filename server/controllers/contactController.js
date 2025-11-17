import { db } from "../db.js";
import nodemailer from "nodemailer";

export const sendMessage = (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields required" });
  }

  const query = "INSERT INTO bbb (name, email, message) VALUES (?, ?, ?)";
  const values = [name, email, message];

  db.query(query, values, async (err) => {
    if (err) {
      console.error("❌ Database Error:", err);
      return res.status(500).json({ success: false, message: "Server error" });
    }

    // -------------------------
    // 📩 EMAIL SENDING SECTION
    // -------------------------
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "sainipihu152@gmail.com",   // apna gmail
          pass: "izdv hysy zzzn ywzs   ",      // APP PASSWORD (same 16-character)
        },
      });

      await transporter.sendMail({
        from: "Portfolio Message <sainipihu152@gmail.com>",
        to: "sainipihu152@gmail.com",     // jaha message aayega
        subject: "New Portfolio Message",
        html: `
          <h2>New Message Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `
      });

      return res.status(200).json({ 
        success: true, 
        message: "Message saved & email sent successfully!" 
      });

    } catch (emailError) {
      console.error("❌ Email Error:", emailError);
      return res.status(200).json({
        success: true,
        message: "Message saved but email not sent.",
      });
    }
  });
};
