import express from "express";
import cors from "cors";
import uploadRoutes from "./routes/upload.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Backend Running",
    });
});

app.use("/api", uploadRoutes);

export default app;