"use server"
import { client } from "@/sanity/lib/client"

const fetchFunction = async(type_menu) => {
    try{
        console.log("Menu Type Before Send: ", account_menu_type);
        const retrievedAccounts = await client.fetch(`*[_type == "${account_menu_type}"]`);
        console.log("Retrieved Accounts:", retrievedAccounts);

        if (retrievedAccounts.length > 0) {
            return {
                type: "success",
                success: true,
                message: "successfully fetched data",
                data: retrievedAccounts
            }
        }

        return {
            type: "fail",
            success: false,
            message: "data not found"
        } 
    }catch(err){

    }
}

export const fetchAllAccounts = async(menu_type) => {
    try {
         if(!menu_type){
        return{
            type: "fail",
            success: false,
            message: "menu type is required"
        }
    }
    
    if(menu_type === "students"){
        fetchFunction("student")       
    }else if(menu_type === "lecturers"){
        return{
            type: "fail",
            success: false,
            message: "lecturers menu is not supported yet"
         }
        }
        
    } catch (err) {
        console.error("An error occurred trying to fetch users", err);
        return {
            type: "fail",
            success: false,
            message: "error fetching data"
        }
    }

}