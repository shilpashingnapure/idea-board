import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import ideaRoutes from "./routes/ideas";


AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established");
    const app = express();
    const PORT = process.env.PORT || 8000;

    app.use(cors());
    app.use(express.json());

    app.use("/api/ideas", ideaRoutes);
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log("Error connecting to database:", error));
