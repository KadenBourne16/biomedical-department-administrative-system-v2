"use server";
import { readFile, writeFile } from "@/app/utils/functions/file_manipulation";
import { client } from "@/sanity/lib/client";

export const FetchStudentBioDetails = async (indexNo_param) => {
    try {
        const read_studentbio_response = await readFile("student");
        
        // Check if reading from cache was successful
        if (read_studentbio_response.type === "success") {
            const the_data = read_studentbio_response.data;

            // Check if the data is an array
            if (Array.isArray(the_data)) {
                const found = the_data.find(student => student.indexNo === indexNo_param);
                if (found) {
                    return {
                        type: "success",
                        success: true,
                        message: "Successfully found information",
                        data: found
                    };
                }
            } else if (typeof the_data === "object" && the_data !== null) {
                // If it's an object, check if the indexNo exists
                if (the_data.indexNo === indexNo_param) {
                    return {
                        type: "success",
                        success: true,
                        message: "Successfully found information",
                        data: the_data
                    };
                }
            }
        }

        // If cache read failed or no data found, fetch from the database
        const query = `*[_type == "student" && indexNo == "${indexNo_param}"]`;
        const fetch_student_bio = await client.fetch(query);

        if (fetch_student_bio.length > 0) {
            await writeFile(fetch_student_bio, "student");
            return {
                type: "success",
                success: true,
                message: "Successfully retrieved from db",
                data: fetch_student_bio[0]
            };
        } 

    } catch (err) {
        console.error("Error: ", err);
        return {
            type: "error",
            success: false,
            message: `Error: ${err}`,
        };
    }
};
