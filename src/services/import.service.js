import { parseCSV } from "./csv.service.js";
import { extractCRMData } from "./ai.service.js";
import { chunkArray } from "../utils/chunkArray.js";
import { validateRecords } from "./validation.service.js";

export const processImport = async (buffer) => {
    const records = await parseCSV(buffer);
    const chunks = chunkArray(records, 20);
    const finalRecords = [];
    
    for (const chunk of chunks) {
        const result = await extractCRMData(chunk);
        
        finalRecords.push(...result.records);
    }
    
    const validation = validateRecords(finalRecords);

    return {
        totalRecords: records.length,
        imported: validation.imported.length,
        skipped: validation.skipped.length,
        records: validation.imported,
        skippedRecords: validation.skipped,
    };
};