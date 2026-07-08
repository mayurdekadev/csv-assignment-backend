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
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};