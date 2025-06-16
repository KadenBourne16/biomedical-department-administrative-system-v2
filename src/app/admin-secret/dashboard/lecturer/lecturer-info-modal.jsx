"use client";
import React from 'react';

const LecturerModal = ({ lecturer, setModalType }) => {
  // List of keys to display, ensuring proper formatting and fallbacks for empty values
  const displayDetails = [
    { label: "First Name", value: lecturer.firstname },
    { label: "Middle Name", value: lecturer.middlename || "N/A" },
    { label: "Last Name", value: lecturer.lastname },
    { label: "Gender", value: lecturer.gender },
    { label: "Date of Birth", value: lecturer.date_of_birth },
    { label: "Email", value: lecturer.email },
    { label: "Institutional Email", value: lecturer.institutional_email },
    { label: "Institution", value: lecturer.institution },
    { label: "Department Role", value: lecturer.department_role },
    { label: "Department Role Year", value: lecturer.department_role_year },
    { label: "Courses Taught", value: lecturer.courses_taught },
    { label: "Current Research Area", value: lecturer.current_research_area },
    { label: "External Industry", value: lecturer.external_industry },
    { label: "External Industry Nature", value: lecturer.external_industry_nature },
    { label: "External Institutions", value: lecturer.external_institutions },
    { label: "External Institutions Nature", value: lecturer.external_institutions_nature },
    { label: "Professional Affiliation", value: lecturer.professional_affiliation },
    { label: "Professional Qualification", value: lecturer.professional_qualification },
    { label: "Programs", value: lecturer.programs },
    { label: "Qualification Type", value: lecturer.qualification_type },
    { label: "Research Areas", value: lecturer.research_areas },
    { label: "Research Collaborations", value: lecturer.research_collaborations },
    { label: "Roles", value: lecturer.roles },
    { label: "Year of Completion", value: lecturer.year_of_completion },
    { label: "Year of Study", value: lecturer.year_of_study },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out">
      {/* White Modal Content with full width */}
      <div className="bg-white w-full h-screen max-w-full p-8 space-y-6 relative overflow-y-auto shadow-lg">
        {/* Close Button */}
        <button
          onClick={() => setModalType("")}
          className="absolute top-4 right-4 text-red-600 hover:text-white px-2 rounded-sm bg-white hover:bg-red-500 transition-all z-10"
        >
            x
        </button>

        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-[#cc0134] to-[#500202] p-4 rounded-t-lg shadow-md mb-6">
          <h2 className="text-3xl font-semibold text-white text-center">Lecturer Details</h2>
          {/* Full Name Display */}
          <p className="text-xl font-semibold text-white text-center mt-2">
            {lecturer.firstname} {lecturer.middlename ? `${lecturer.middlename} ` : ""}{lecturer.lastname}
          </p>
        </div>

        {/* Profile Picture Section */}
        <div className="flex justify-center mb-6">
          <img
            src={lecturer.profile_picture || "https://via.placeholder.com/150"} // Default placeholder image
            alt={`${lecturer.firstname} ${lecturer.lastname}`}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Lecturer Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayDetails.map((detail, index) => (
            <div key={index} className="flex justify-between items-center space-x-4">
              <span className="font-medium text-sm text-gray-700">{detail.label}:</span>
              <span className="text-sm text-gray-500">{detail.value || "N/A"}</span>
            </div>
          ))}
        </div>

        {/* Close Button (at the bottom) */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setModalType("")}
            className="px-4 py-2 bg-[#d61b1b] text-white rounded-md hover:bg-red-900 transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LecturerModal;
