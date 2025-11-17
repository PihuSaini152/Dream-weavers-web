import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Start server
const PORT = 4000;
app.listen(PORT, () => console.log(`Server running on https://dream-weavers-server.vercel.app/${PORT}`));
