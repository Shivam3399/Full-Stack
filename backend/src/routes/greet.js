import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  const { name } = req.query;

  console.log("Received query params:", req.query); // Debugging log

  if (!name || name.trim() === "") {
    console.error("Error: Name is missing or empty.");
    return res.status(400).json({ message: "Name is required." });
  }

  res.setHeader("Cache-Control", "no-store");

  console.log(`Sending response: Hello, ${name}! Welcome to Younglabs.`); // Debugging log
  res.json({ message: `Hello, ${name}! Welcome to Younglabs.` });
});

export default router;
