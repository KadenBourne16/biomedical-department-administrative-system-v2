"use server"
import { client } from "@/sanity/lib/client";

export const FetchAccountInfoAdmin = async () => {
    try {
        // Fetch all documents of type "account"
        const fetch_account_data_info = await client.fetch(`*[_type == "account"]`);
        return {
            type: "success",
            success: true,
            message: "Fetched all accounts successfully",
            data: fetch_account_data_info
        };
    } catch (err) {
        console.error(err);
        return {
            type: "error",
            success: false,
            message: "Failed to fetch accounts",
            error: err.message || err
        };
    }
}