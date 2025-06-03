"use server"
import { client } from "@/sanity/lib/client"
import passwordUtils from "@/app/utils/passwordEncrypter";

export const fetchStudentAccountInfo = async(accountID) => {
 try{
    const result = await client.fetch(`*[_type == 'account' && _id == '${accountID}']`);
   if(result.length > 0){
    return({success: true, data: result});
   }
   return({success: false, data: "Missing Account"})
 }catch(err){
    console.error("error fetching student account info", err);
 }
}