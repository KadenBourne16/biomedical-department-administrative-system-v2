import React from 'react';

// Function to generate a random mock student data
const generateMockData = () => {
  return {
    indexNo: `S-${Math.floor(Math.random() * 1000)}`,
    entryMode: 'Direct',
    entryLevel: Math.floor(Math.random() * 5) + 100,
    currentLevel: Math.floor(Math.random() * 3) + 200,
    program: 'Computer Science',
    dateOfAdmission: new Date(2018, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    dateOfCompletion: new Date(2023, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    residence: 'On-campus',
    prefix: 'Mr.',
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Smith',
    gender: 'Male',
    dateOfBirth: new Date(1998, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toLocaleDateString(),
    placeOfBirth: 'New York',
    nationality: 'American',
    hometown: 'Brooklyn',
    cityOfBirth: 'New York',
    mobileNumber: '+1 123-456-7890',
    institutionalEmail: 'john.doe@university.edu',
    addressLine: '123 Main St',
    addressLine2: 'Apt 101',
    maritalStatus: 'Single',
    religion: 'Christianity',
    profilePicture: 'https://randomuser.me/api/portraits/men/21.jpg', // Random profile picture
  };
};

const StudentProfile = () => {
  const student = generateMockData(); // Get the random mock data

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row items-center mb-12">
        <div className="w-32 h-32 mb-6 md:mb-0">
          <img
            src={student.profilePicture || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="text-center md:text-left md:ml-6">
          <h2 className="text-4xl font-bold text-gray-800">{`${student.prefix} ${student.firstName} ${student.middleName} ${student.lastName}`}</h2>
          <p className="text-lg text-gray-600 mt-2">{student.program}</p>
          <p className="text-sm text-gray-500">{student.entryLevel} - {student.currentLevel} Level</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Personal Details</h3>
          <p><strong>Gender:</strong> {student.gender}</p>
          <p><strong>Date of Birth:</strong> {student.dateOfBirth}</p>
          <p><strong>Place of Birth:</strong> {student.placeOfBirth}</p>
          <p><strong>Hometown:</strong> {student.hometown}</p>
          <p><strong>Nationality:</strong> {student.nationality}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Information</h3>
          <p><strong>Mobile Number:</strong> {student.mobileNumber}</p>
          <p><strong>Institutional Email:</strong> {student.institutionalEmail}</p>
          <p><strong>Address:</strong> {student.addressLine}, {student.addressLine2}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Academic Information</h3>
          <p><strong>Index No:</strong> {student.indexNo}</p>
          <p><strong>Entry Mode:</strong> {student.entryMode}</p>
          <p><strong>Program:</strong> {student.program}</p>
          <p><strong>Date of Admission:</strong> {student.dateOfAdmission}</p>
          <p><strong>Date of Completion:</strong> {student.dateOfCompletion}</p>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Other Details</h3>
          <p><strong>Marital Status:</strong> {student.maritalStatus}</p>
          <p><strong>Religion:</strong> {student.religion}</p>
          <p><strong>Residence:</strong> {student.residence}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
