import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./db.js";

const app = express();

// CORS FIX
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));

app.use(express.json());

// MongoDB Connect
connectDB();

// Routes
app.use("/api", contactRoutes);

// --- Vercel ke liye required ---
export default app;
