"use server"
import passwordUtils from "@/app/utils/passwordEncrypter"

export const runCheckFunctions = async(passwordToCheck, storedpassword) => {
   try{
    const result = await passwordUtils.comparePassword(passwordToCheck, storedpassword);
    console.log(result)
    if(result){
        return({success: true, data: "successful"})
    }
    return({success: false, data: "unsuccessful"})
   }catch(err){
    console.error("Comparing Password Error",err)
   }
} 