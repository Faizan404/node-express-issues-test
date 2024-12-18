import dotenv from "dotenv";
import express from "express";

import issueRoutes from "./routes/issue";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/issues", issueRoutes);

// Database connection
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error starting application:", error);
    process.exit(1);
  });

export default app;
