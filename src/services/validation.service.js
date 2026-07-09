export const validateRecords = (records) => {
    const imported = [];
    const skipped = [];

    for (const record of records) {
        const hasEmail = record.email?.trim();
        const hasMobile = record.mobile_without_country_code?.trim();
        
        if (!hasEmail && !hasMobile) {
            skipped.push({
                record,
                reason: "Missing email and mobile",
            });
            continue;
        }
        imported.push(record);
    }
    return {
        imported,
        skipped,
    };
};