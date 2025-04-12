"use server"
import { client } from "@/sanity/lib/client";
import passwordUtils from "@/app/utils/passwordEncrypter";
import { generateToken } from "@/app/utils/JWT";
import {cookies} from "next/headers"

export default async function LoginServerSideAction(data) {
    const { email, password } = data; // Destructure email and password from data
    const cookiesStore = await cookies();
    try {
        const result = await client.fetch(`*[_type == 'account' && email == "${email}"]`);

        if (result && result.length > 0) { // Check if result is not empty
            const compareResult = await passwordUtils.comparePassword(password, result[0].password); // Use await here
            if (compareResult) {
                const token = generateToken(result[0]._id);
                cookiesStore.set({
                    name: "bdas_auth_cookies",
                    value: token,
                    httpOnly: true,
                    path: '/'
                })
                return { success: true, data: result[0], token}; // Return the first result
            } else {
                return { success: false, data: "Invalid password" }; // Return invalid password message
            }
        } else {
            return { success: false, data: "Account not found" }; // Return account not found message
        }
    } catch (err) {
        console.error("Login Server Error", err);
        return { success: false, data: "An error occurred during login" }; // Return error message
    }
}