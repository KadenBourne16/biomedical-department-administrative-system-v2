"use server";
import passwordUtils from "@/app/utils/passwordEncrypter";
import { client } from "@/sanity/lib/client";

export async function SignUpStudentServerAction(formData) {
  try {
    const studentData = {
      _type: "student",
      indexNo: formData["indexNo"],
      entryMode: formData["entryMode"],
      entryLevel: formData["entryLevel"],
      currentLevel: formData["currentLevel"],
      program: formData["program"],
      dateOfAdmission: formData["dateOfAdmission"],
      dateOfCompletion: formData["dateOfCompletion"],
      residence: formData["residence"],
      prefix: formData["prefix"],
      firstName: formData["firstName"],
      middleName: formData["middleName"],
      lastName: formData["lastName"],
      gender: formData["gender"],
      dateOfBirth: formData["dateOfBirth"],
      placeOfBirth: formData["placeOfBirth"],
      nationality: formData["nationality"],
      hometown: formData["hometown"],
      cityOfBirth: formData["cityOfBirth"],
      mobileNumber: formData["mobileNumber"],
      institutionalEmail: formData["institutionalEmail"],
      personalEmail: formData["personalEmail"],
      addressLine: formData["addressLine"],
      addressLine2: formData["addressLine2"],
      maritalStatus: formData["maritalStatus"],
      religion: formData["religion"],
    };

    const defaultPassword = await passwordUtils.hashPassword("BiomedStudent");
    const studentAccount = {
        _type: "account",
        email: formData.institutionalEmail,
        password: defaultPassword,
        account_type: "student"
    };


    //Check if credentials exist
    const searchInstitutionalEmail = formData.institutionalEmail;
    const searchMobileNumber = formData.mobileNumber;
    const searchIndexNo = formData.indexNo;
    const searchPersonalEmail = formData.personalEmail;
    const existingUser = await client.fetch(`*[_type == 'student' && (institutionalEmail == "${searchInstitutionalEmail}" || mobileNumber == "${searchMobileNumber}" || indexNo == "${searchIndexNo}" || personalEmail == "${searchPersonalEmail}")]`);
    if (existingUser.length > 0) {
        console.log("User exists already");
        return { success: false, data: "User Exist Already" };
    } else {
        const result = await client.create(studentData);
        const accountResult = await client.create(studentAccount);
        return { success: true, data: result };
    }

    
  } catch (error) {
    console.error("Error creating student:", error);
    return { success: false, error: error.message };
  }
}
