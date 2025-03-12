// src/query/student_query.js
export const checkAndCreateTable = `
  CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    indexNo VARCHAR(50),
    entryMode VARCHAR(50),
    entryLevel VARCHAR(50),
    currentLevel VARCHAR(50),
    program VARCHAR(100),
    dateOfAdmission DATE,
    dateOfCompletion DATE,
    hall VARCHAR(100),
    prefix VARCHAR(10),
    firstName VARCHAR(100),
    middleName VARCHAR(100),
    lastName VARCHAR(100),
    gender ENUM('Male', 'Female', 'Other'),
    dateOfBirth DATE,
    placeOfBirth VARCHAR(100),
    nationality VARCHAR(50),
    hometown VARCHAR(100),
    cityOfBirth VARCHAR(100),
    mobileNumber VARCHAR(15),
    institutionalEmail VARCHAR(100),
    addressLine VARCHAR(255),
    addressLine2 VARCHAR(255),
    maritalStatus ENUM('Single', 'Married', 'Divorced', 'Widowed'),
    religion VARCHAR(50)
  );
`;

export const insertStudentQuery = (student) => `
  INSERT INTO students (
    indexNo, entryMode, entryLevel, currentLevel, program,
    dateOfAdmission, dateOfCompletion, hall, prefix, firstName,
    middleName, lastName, gender, dateOfBirth, placeOfBirth,
    nationality, hometown, cityOfBirth, mobileNumber,
    institutionalEmail, addressLine, addressLine2, maritalStatus, religion
  ) VALUES (
    '${student.indexNo}', '${student.entryMode}', '${student.entryLevel}', '${student.currentLevel}', '${student.program}',
    '${student.dateOfAdmission}', '${student.dateOfCompletion}', '${student.hall}', '${student.prefix}', '${student.firstName}',
    '${student.middleName}', '${student.lastName}', '${student.gender}', '${student.dateOfBirth}', '${student.placeOfBirth}',
    '${student.nationality}', '${student.hometown}', '${student.cityOfBirth}', '${student.mobileNumber}',
    '${student.institutionalEmail}', '${student.addressLine}', '${student.addressLine2}', '${student.maritalStatus}', '${student.religion}'
  );
`;

export const checkExistingUser  = async (student, connection) => {
  const query = `SELECT * FROM students WHERE (indexNo = ? OR institutionalEmail = ?) AND mobileNumber = ?`;
  
  try {
    const values = [student.indexNo, student.institutionalEmail, student.mobileNumber];
    const [result] = await connection.execute(query, values); // Await the execution and destructure the result

    if (result.length > 0) {
      return "Found"; // User exists
    } else {
      return "Not Found"; // User does not exist
    }
  } catch (err) {
    console.error('Error checking existing user:', err);
    throw new Error('Database query failed'); // Handle error appropriately
  }
};