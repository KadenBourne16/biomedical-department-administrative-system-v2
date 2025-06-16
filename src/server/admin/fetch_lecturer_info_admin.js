"use server"
import { client } from "@/sanity/lib/client";

export const FetchLecturerInfoAdmin = async () => {
    try {
        // Fetch all documents of type "lecturer"
        const fetch_lecturer_data_info = await client.fetch(`*[_type == "lecturer"]`);
        return {
            type: "success",
            success: true,
            message: "Fetched all lecturers successfully",
            data: fetch_lecturer_data_info
        };
    } catch (err) {
        console.error(err);
        return {
            type: "error",
            success: false,
            message: "Failed to fetch lecturers",
            error: err.message || err
        };
    }
}