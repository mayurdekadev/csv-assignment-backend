import { processImport } from "../services/import.service.js";

export const uploadCSV = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        const result = await processImport(req.file.buffer);

        return res.status(200).json({
            success: true,
            ...result,
        });

    } catch (error) {
        console.error(error);
        
        if (
            error.status === 503 ||
            error.code === 503 ||
            error.message?.includes("UNAVAILABLE")
        ) {
            return res.status(503).json({
                success: false,
                message:
                    "The AI service is currently busy. Please try again in a few moments.",
            });
        }

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};