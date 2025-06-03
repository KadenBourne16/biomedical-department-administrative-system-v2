"use server"
import { client } from "@/sanity/lib/client";
import passwordUtils from "@/app/utils/passwordEncrypter";
import { generateToken } from "@/app/utils/JWT";
import { cookies } from "next/headers";

export default async function LoginServerSideAction(data) {
  const { email, password, accountType } = data;
  const cookiesStore = await cookies();
  try {
    const result = await client.fetch(`*[_type == 'account' && email == "${email}"]`);

    if (result && result.length > 0) {
      const account = result[0];

      // Check if account type matches
      if (
        account.account_type &&
        accountType &&
        account.account_type.toLowerCase() === accountType.toLowerCase()
      ) {
        // Check password
        const compareResult = await passwordUtils.comparePassword(password, account.password);
        if (compareResult) {
          const token = generateToken(account._id);
          cookiesStore.set({
            name: "bdas_auth_cookies",
            value: token,
            httpOnly: true,
            path: "/",
          });
          return { type: "success", success: true, data: account, token };
        } else {
          return { type: "fail", success: false, message: "Invalid password" };
        }
      } else {
        return { type: "fail", success: false, message: "No credentials match account type" };
      }
    } else {
      return { type: "fail", success: false, message: "Account not found" };
    }
  } catch (err) {
    console.error("Login Server Error", err);
    return { type: "error", success: false, message: "An error occurred during login" };
  }
}