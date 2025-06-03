"use server"
import { readFile } from "@/app/utils/functions/file_manipulation"
import { verifyToken } from "@/app/utils/JWT";

export const AuthenticateUser = async(id, filename, token) => {

    try {    
        const readFile_response = await readFile(filename);
        if (readFile_response && readFile_response.success) {
            const readFileData = readFile_response.data;

            // Find id in the data object (support both array and object)
            let user = null;
            if (Array.isArray(readFileData)) {
                user = readFileData.find(u => u._id === id);
            } else if (typeof readFileData === "object" && readFileData !== null) {
                user = readFileData._id === id ? readFileData : null;
            }

            if (!user) {
                return {
                    type: "fail",
                    success: false,
                    message: "User not found"
                };
            }
            // Verify token
            const verify_response = verifyToken(token);
            console.log(verify_response)

            if (verify_response.success === true) {
                // If response is okay, return success
                return {
                    type: "success",
                    success: true,
                    message: "Authentication successful",
                    user
                };
            } else {
                // Else return fail and message
                return {
                    type: "fail",
                    success: false,
                    message: "Invalid or expired token"
                };
            }
        } else {
            return {
                type: "fail",
                success: false,
                message: "Could not read user data"
            };
        }
    } catch (err) {
        console.error("Error occurred", err);
        return {
            type: "error",
            success: false,
            message: "Error occurred, contact developer if problem persist"
        };
    }
}