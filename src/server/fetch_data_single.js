"use server"
import { readFile, writeFile } from "@/app/utils/functions/file_manipulation"
import { client } from "@/sanity/lib/client"

export const FetchDataSingle = async (data, db_filename, search_field, group_search) => {
    try {
        const read_single_data_response = await readFile(db_filename);

        // Helper function to filter data
        const filterData = (the_data) => {
            if (Array.isArray(the_data)) {
                if (group_search) {
                    // Return all objects where ANY field matches the value
                    const found = the_data.filter(item =>
                        Object.values(item).some(val => val === data)
                    );
                    if (found.length > 0) {
                        return {
                            type: "success",
                            success: true,
                            message: "Successfully found group information",
                            data: found
                        }
                    }
                } else {
                    // Return the first object where the search_field matches the value
                    const found = the_data.find(item => item[search_field] === data);
                    if (found) {
                        return {
                            type: "success",
                            success: true,
                            message: "Successfully found information",
                            data: found
                        }
                    }
                }
            } else if (typeof the_data === "object" && the_data !== null) {
                if (group_search) {
                    if (Object.values(the_data).some(val => val === data)) {
                        return {
                            type: "success",
                            success: true,
                            message: "Successfully found group information",
                            data: [the_data]
                        }
                    }
                } else {
                    if (the_data[search_field] === data) {
                        return {
                            type: "success",
                            success: true,
                            message: "Successfully found information",
                            data: the_data
                        }
                    }
                }
            }
            return null;
        };

        // If cache read failed, fetch from DB
        if (read_single_data_response.type === "fail") {
            const query = `*[_type == "${db_filename}"]`;
            const fetch_single_data_response = await client.fetch(query);

            if (fetch_single_data_response.length > 0) {
                await writeFile(fetch_single_data_response, db_filename);
                // Use the same filter logic on fresh data
                const result = filterData(fetch_single_data_response);
                if (result) return result;
            }
        }

        if (read_single_data_response.type === "error") {
            console.error("Error occurred while reading cache", read_single_data_response.message)
            return {
                type: "error",
                success: false,
                message: read_single_data_response.message
            }
        }

        // If cache read is successful, filter the data
        const the_data = read_single_data_response.data;
        const cacheResult = filterData(the_data);
        if (cacheResult) return cacheResult;

        // Not found
        return {
            type: "fail",
            success: false,
            message: "No matching data found"
        }

    } catch (err) {
        console.error("Error: ", err);
        return {
            type: "error",
            success: false,
            message: `Error: ${err}`,
        }
    }
}