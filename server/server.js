import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./db.js";

const app = express();

// Middlewares
app.use(cors({origin : process.env.ORIGIN}));
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

connectDB()

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on http://dream-weavers-server.vercel.app/${PORT}`));
