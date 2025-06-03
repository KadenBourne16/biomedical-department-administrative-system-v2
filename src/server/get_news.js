"use server"
import { client } from "@/sanity/lib/client";
import { readFile } from "@/app/utils/functions/file_manipulation";

export const GetNews = async() => {
    const readNews_response = await readFile("news");
    if(readNews_response.type === "success"){
        return{
            type: "success",
            success: true,
            message: "Successfully fetched news",
            data: readNews_response.data
        }
    }

    if(readNews_response.type === "fail" || readNews_response.type ==="error"){
        return{
            type: "fail",
            success: false,
            message: "failed to retrieved, could be an error"
        }
    }

    if(!readNews_response){
        const query = '*[_type == "news"]'
        const sanity_newsFetch_response = client.fetch(query);
        if(sanity_newsFetch_response.length > 0){
            return{
                type: "success",
                success: true,
                meessage: "Successfully retrieved information from db",
                data: sanity_newsFetch_response
            }
        }
    }
}