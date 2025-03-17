"use server";
import hashPassword from "@/app/utils/passwordEncrypter";
// import { client } from "@/sanity/lib/client";

const client = {
  projectId: "t8e4ngk6",
    dataset: "bdas",
    apiVersion: "2023-05-03", 
    token: "skcasFAvJwJXCS8O2PxpBFtljK4aDML13z5vIHRFdHTGdsJGUoQfl0q5wooel1emZXppfv6TJbk4EahbixD0HSKi5i81VggGusy3Rdfj1QEFrcF6J9uOvlJHPSWuO3WVo1ie6XVLAi4hrbeYyXacJYtIY9SKdxZgwHKsGILmWIBdeHRVR2IT", 
    useCdn: false,
}


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
      addressLine: formData["addressLine"],
      addressLine2: formData["addressLine2"],
      maritalStatus: formData["maritalStatus"],
      religion: formData["religion"],
    };

    const defaultPassword = await hashPassword("BiomedStudent");
    const studentAccount = {
        _type: "account",
        email: formData.institutionalEmail,
        password: defaultPassword
    };


    //Check if credentials exist
    const searchInstitutionalEmail = formData.institutionalEmail;
    const searchMobileNumber = formData.mobileNumber;
    const searchIndexNo = formData.indexNo;
    const existingUser = await client.fetch(`*[_type == 'student' && (institutionalEmail == "${searchInstitutionalEmail}" || mobileNumber == "${searchMobileNumber}" || indexNo == "${searchIndexNo}")]`);
    if (existingUser.length > 0) {
        console.log("User exists already");
        return { success: false, data: "Email OR Phone Number OR Index Number exists already" };
    } else {
        const result = await client.create(studentData);
        const accountResult = await client.create(studentAccount);
        console.log(client.token);
        return { success: true, data: result };
    }

    
  } catch (error) {
    console.error("Error creating student:", error);
    return { success: false, error: error.message };
  }
}
