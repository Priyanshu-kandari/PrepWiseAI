import express from "express";
import "dotenv/config";
import connectDB from "./src/database/DB.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  return res.json({ message: "SERVER STARTED" });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.log("Error starting server:", error);
  }
};

startServer();