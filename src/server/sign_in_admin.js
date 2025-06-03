"use server";
import { client } from "@/sanity/lib/client";
import { writeFile } from "@/app/utils/functions/file_manipulation";
import { generateToken } from "@/app/utils/JWT";
import passwordUtils from "@/app/utils/passwordEncrypter";

export const signInAdmin = async (email, the_password) => {
  try {
    const accounts = await client.fetch(
      `*[_type == "account" && email == $email]`,
      { email }
    );

    // If no matching account
    if (!accounts || accounts.length === 0) {
      return {
        type: "fail",
        success: false,
        message: "Invalid email or password",
        data: null,
      };
    }

    const account = accounts[0];

    const isPasswordCorrect = await passwordUtils.comparePassword(the_password, account.password);
    if (!isPasswordCorrect) {
      return {
        type: "fail",
        success: false,
        message: "Invalid email or password",
        data: null,
      };
    }

    // Generate token
    const token = generateToken(account._id);
     //remove the password section from the account data

    const { password, ...safeData } = account;
    console.log(safeData)
    // Write to file
    const write_response = await writeFile(safeData, "loggedIn");
    console.log(write_response)

    return {
      type: "success",
      success: true,
      message: "Sign-in successful",
      data: account,
      token,
    };

  } catch (err) {
    console.error("Error during admin sign-in:", err);
    return {
      type: "error",
      success: false,
      message: "Sign-in failed. Please try again.",
      data: null,
    };
  }
};
