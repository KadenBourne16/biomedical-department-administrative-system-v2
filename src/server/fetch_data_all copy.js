"use server"
import { readFile, writeFile } from "@/app/utils/functions/file_manipulation"
import { client } from "@/sanity/lib/client"

export const FetchDataAll = async(db_filename) => {
    try {
        const read_all_data_response = await readFile(db_filename);
        if (read_all_data_response.type === "fail") {
            const query = `*[_type == "${db_filename}"]`;
            const fetch_single_data_response = await client.fetch(query);

            if (fetch_single_data_response.length > 0) {
                await writeFile(fetch_single_data_response, db_filename);
                return {
                    type: "success",
                    success: true,
                    message: "Successfully retrieved from db",
                    data: fetch_single_data_response
                };
            }
        }

        if (read_all_data_response.type === "error") {
            console.error("Error occurred while reading cache", read_all_data_response.message);
            return {
                type: "error",
                success: false,
                message: read_all_data_response.message
            };
        }

        // If cache read is successful, return the cached data
        if (read_all_data_response.type === "success") {
            return read_all_data_response;
        }
    } catch (err) {
        console.error("Error: ", err);
        return {
            type: "error",
            success: false,
            message: `Error: ${err}`,
        };
    }
}