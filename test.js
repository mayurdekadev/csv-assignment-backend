import { extractCRMData } from "./src/services/ai.service.js";

const sample = [];

for (let i = 1; i <= 10; i++) {

    sample.push({
        "Full Name": `John ${i}`,
        "Phone": `98765432${i}`,
        "Email": `john${i}@gmail.com`,
        "City": "Mumbai"
    });

}

const result = await extractCRMData(sample);

console.log(result);