import { parseCSV } from "./csv.service.js";
import { extractCRMData } from "./ai.service.js";
import { chunkArray } from "../utils/chunkArray.js";

export const processImport = async (buffer) => {
    const records = await parseCSV(buffer);
    const chunks = chunkArray(records, 20);
    const finalRecords = [];

    for (const chunk of chunks) {
        console.log(`Processing batch of ${chunk.length} records`);
        const result = await extractCRMData(chunk);
        finalRecords.push(...result.records);
    }
    return {
        totalRecords: records.length,
        imported: finalRecords.length,
        records: finalRecords
    };
};