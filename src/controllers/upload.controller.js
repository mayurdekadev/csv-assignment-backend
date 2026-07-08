export const uploadCSV = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded",
            });
        }

        console.log("File ",req.file);
        return res.status(200).json({
            success: true,
            message: "CSV uploaded successfully",
            file: {
                originalName: req.file.originalname,
                mimeType: req.file.mimetype,
                size: req.file.size,
            },  
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};