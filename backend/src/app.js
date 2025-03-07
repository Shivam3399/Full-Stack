import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests
app.use(morgan("dev")); // Log HTTP requests

// Default route
app.get("/", (req, res) => {
  res.send("✅ Backend API is running...");
});

export default app;
