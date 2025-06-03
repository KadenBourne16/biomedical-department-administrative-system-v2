"use server"
import { readFile, writeFile } from "@/app/utils/functions/file_manipulation"
import { client } from "@/sanity/lib/client";

export const Fetch_All_Dashboard_Info = async() => {
    try{
        const readNews_response = await readFile("news");

        if(readNews_response.type === "fail"){
            const query = `*[_type == "news"]`
            const fetchNews_db = await client.fetch(query);
            if(fetchNews_db > 0){
                await writeFile(fetchNews_db, "news")
            }

            return{
                type: "success",
                success: true,
                message: "Successfully fetched information",
                data: fetchNews_db
            }
        }


        if(readNews_response.type === "error"){
            console.error("Error reading value", readNews_response.message);
            return{
                type: "error",
                success: false,
                message: readNews_response.message
            }
        }

        return{
            type: "success",
            success: "true",
            message: "Successfully read cache",
            data: readNews_response.data
        }
    }catch(err){
        console.error("An error occured retrieving dashboard information: ", err)
        return{
            type: "error",
            success: false,
            message: err,
        }
    }
}