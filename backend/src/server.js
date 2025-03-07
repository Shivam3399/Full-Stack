import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import greetRouter from "./routes/greet.js"; // Import the greet route

dotenv.config();

const app = express();

// Middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/greet", greetRouter); // Mount greet route

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
