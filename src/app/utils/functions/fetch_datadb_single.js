"use server"
import client from '@/sanity/lib/client'
import { writeFile } from './file_manipulation'

export const fetchDataDBSingle = async (filename, search_field, search_data, group) => {
    // if group is true, search all fields for any field matching search_data, else only search the specified field
    try {
        
        let query;
        if (group) {
            // Search all fields for the value
            query = `*[_type == "${filename}" && count(array::filter(keys(@), key => @[key] == "${search_data}")) > 0]`;
        } else {
            // Search only the specified field
            query = `*[_type == "${filename}" && ${search_field} == "${search_data}"]`;
        }

        const dbfetch_response = await client.fetch(query);

        if (!dbfetch_response || dbfetch_response.length === 0) {
            return {
                type: "fail",
                success: false,
                message: "Did not find anything"
            }
        }

        const writeFileResponse = await writeFile(dbfetch_response, filename);
        if (writeFileResponse.type === "error") {
            console.error("Error writing to file", writeFileResponse.message);
        }

        if (writeFileResponse.type === "success") {
            console.log("Successfully wrote to file", writeFileResponse.message);
        }

        return {
            type: "success",
            success: true,
            message: "Successfully retrieved",
            data: dbfetch_response
        };

    } catch (err) {
        console.error("An error occurred while fetching data from the database", err);
        return {
            type: "error",
            success: false,
            message: "Error encountered while fetching data"
        };
    }
}