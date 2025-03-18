class Student {
    constructor(indexNo, 
                entryMode, 
                entryLevel, 
                currentLevel, 
                program, 
                dateOfAdmission, 
                dateOfCompletion, 
                residence, 
                prefix, 
                firstName, 
                middleName, 
                lastName, 
                gender, 
                dateOfBirth, 
                placeOfBirth, 
                nationality, 
                hometown, 
                cityOfBirth, 
                mobileNumber, 
                institutionalEmail, 
                addressLine, 
                addressLine2, 
                maritalStatus, 
                religion) {
      
      this.indexNo = indexNo;
      this.entryMode = entryMode;
      this.entryLevel = entryLevel;
      this.currentLevel = currentLevel;
      this.program = program;
      this.dateOfAdmission = dateOfAdmission;
      this.dateOfCompletion = dateOfCompletion;
      this.residence = residence;
      this.prefix = prefix;
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.gender = gender;
      this.dateOfBirth = dateOfBirth;
      this.placeOfBirth = placeOfBirth;
      this.nationality = nationality;
      this.hometown = hometown;
      this.cityOfBirth = cityOfBirth;
      this.mobileNumber = mobileNumber;
      this.institutionalEmail = institutionalEmail;
      this.addressLine = addressLine;
      this.addressLine2 = addressLine2;
      this.maritalStatus = maritalStatus;
      this.religion = religion;
    }
  
    getStudentInfo() {
      return {
        "Index Number": this.indexNo,
        "Entry Mode": this.entryMode,
        "Entry Level": this.entryLevel,
        "Current Level": this.currentLevel,
        "Program": this.program,
        "Date of Admission": this.dateOfAdmission,
        "Date of Completion": this.dateOfCompletion,
        "Residence": this.residence,
        "Prefix": this.prefix,
        "First Name": this.firstName,
        "Middle Name": this.middleName,
        "Last Name": this.lastName,
        "Gender": this.gender,
        "Date of Birth": this.dateOfBirth,
        "Place of Birth": this.placeOfBirth,
        "Nationality": this.nationality,
        "Hometown": this.hometown,
        "City of Birth": this.cityOfBirth,
        "Mobile Number": this.mobileNumber,
        "Institutional Email": this.institutionalEmail,
        "Address Line": this.addressLine,
        "Address Line 2": this.addressLine2,
        "Marital Status": this.maritalStatus,
        "Religion": this.religion
      };
    }
  }


return Student;
  