import csv from "csv-parser";
import { Readable } from "stream";

export const parseCSV = (buffer) => {
    return new Promise((resolve, reject) => {
        const results = [];
        const stream = Readable.from(buffer);
        stream
            .pipe(csv())
            .on("data", (row) => {results.push(row);})
            .on("end", () => {resolve(results);})
            .on("error", (err) => {reject(err);});
    });
};