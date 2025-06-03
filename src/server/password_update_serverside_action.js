"use server";
import { client } from "@/sanity/lib/client";
import passwordUtils from "@/app/utils/passwordEncrypter";

export const PasswordUpdate = async (newPassword, documentId) => {
  const fieldName = 'password';
  const encryptedPassword = await passwordUtils.hashPassword(newPassword);
  try {
    const result = await client
      .patch(documentId) // Specify the document ID to patch
      .set({ [fieldName]: encryptedPassword }) // Set the new password
      .commit(); // Commit the changes
    return { success: true, data: "result" }; // Return success and result
  } catch (err) {
    console.error("Error updating password:", err); // Log the error for debugging
    return { success: false, data: err.message }; // Return failure and error message
  }
};