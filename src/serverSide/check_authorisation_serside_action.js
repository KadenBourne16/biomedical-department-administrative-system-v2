"use server"
import {cookies} from "next/headers"
import { verifyToken } from "@/app/utils/JWT"

export async function checkAuthorisationServerSide(){
    const cookiesStore = cookies();
    const tokenInCookies = cookiesStore.get("bdas_auth_cookies");
    
    try{
        const isVerified = verifyToken(tokenInCookies["value"]);
        const userId = isVerified.id;

        if(isVerified.checked){
            return{authorised: true, data: "Authorised", userId};
        }else{
            return{authorised: false, data: "Unauthorised, threat"};
        }
    }catch(err){
        console.error("fetching cookies error, file: checkAuth, line: 8", err)
    }
}