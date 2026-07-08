export const crmSchema = {
    type: "object",
    properties: {
        records: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    created_at: { type: "string" },
                    name: { type: "string" },
                    email: { type: "string" },
                    country_code: { type: "string" },
                    mobile_without_country_code: { type: "string" },
                    company: { type: "string" },
                    city: { type: "string" },
                    state: { type: "string" },
                    country: { type: "string" },
                    lead_owner: { type: "string" },
                    crm_status: { type: "string" },
                    crm_note: { type: "string" },
                    data_source: { type: "string" },
                    possession_time: { type: "string" },
                    description: { type: "string" }
                },
                required: []
            }
        }
    }
};