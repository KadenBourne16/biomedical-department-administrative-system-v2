"use server"
import { client } from '@/sanity/lib/client'
import { writeFile } from './file_manipulation'

export const FetchDataDBAll = async (filename) => {
    try{
        const dbfetch_response = client.fetch(`*[_type == "${filename}"]`)
        if(!dbfetch_response || dbfetch_response.length === 0){
            return {
                type: "fail",
                success: false,
                message: "Did not find anything"
            }
        }

        if(dbfetch_response.length > 0){
            await writeFile(dbfetch_response, filename);
            if(writeFile.type === "error"){
                console.error("Error writing to file", writeFile.message);
            }

            if(writeFile.type === "success"){
                console.log("Successfully wrote to file", writeFile.message);
                return {
                    type: "success",
                    success: true,
                    message: "Successfully retrieved",
                    data: dbfetch_response
                };
            }
        }

    }catch(err){
        console.error("An error occurred while fetching data from the database", err);
        return {
            type: "error",
            success: false,
            message: "Error encountered while fetching data"
        };
    }
}