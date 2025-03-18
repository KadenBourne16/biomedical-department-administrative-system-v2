import Student from "@/app/class/studentClass";

// Function to receive data from outside this module
export function temp(data) {
    return data; // Simply returning the data
}

// Function to create a current student instance
export function curr_student(data) {
    const theCurrStudent = temp(data); // Get the current student data

    // Create a new Student instance using the received data
    const the_curr_student = new Student(
        theCurrStudent.indexNo, 
        theCurrStudent.entryMode, 
        theCurrStudent.entryLevel, 
        theCurrStudent.currentLevel, 
        theCurrStudent.program, 
        theCurrStudent.dateOfAdmission, 
        theCurrStudent.dateOfCompletion, 
        theCurrStudent.residence, 
        theCurrStudent.prefix, 
        theCurrStudent.firstName, 
        theCurrStudent.middleName, 
        theCurrStudent.lastName, 
        theCurrStudent.gender, 
        theCurrStudent.dateOfBirth, 
        theCurrStudent.placeOfBirth, 
        theCurrStudent.nationality, 
        theCurrStudent.hometown, 
        theCurrStudent.cityOfBirth, 
        theCurrStudent.mobileNumber, 
        theCurrStudent.institutionalEmail, 
        theCurrStudent.addressLine, 
        theCurrStudent.addressLine2, 
        theCurrStudent.maritalStatus, 
        theCurrStudent.religion
    );

    return the_curr_student; // Return the created Student instance
}