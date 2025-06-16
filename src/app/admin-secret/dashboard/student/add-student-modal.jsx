"use client";
import { SignUpStudentServerAction } from "@/server/student";
import React, { useState } from "react";

const AddStudentModal = ({ setModalType }) => {
  const [formData, setFormData] = useState({
    indexNo: "",
    entryMode: "",
    entryLevel: "",
    currentLevel: "",
    program: "",
    dateOfAdmission: "",
    dateOfCompletion: "",
    hall: "",
    prefix: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    hometown: "",
    cityOfBirth: "",
    mobileNumber: "",
    institutionalEmail: "",
    personalEmail: "",
    addressLine: "",
    addressLine2: "",
    maritalStatus: "",
    religion: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancelModal = () => {
    setModalType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitStudentForm = async () => {
      const submit_student_form_admin_response = await SignUpStudentServerAction(formData);
      if(submit_student_form_admin_response.success) {
        setModalType("Success");
      }
    };
    submitStudentForm();
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-20 flex justify-center items-center z-50 p-4 overflow-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl space-y-6"
      >
        <h2 className="text-2xl font-semibold text-blue-700 text-center">Add New Student</h2>

        {/* Academic Information */}
        <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <legend className="col-span-full text-lg font-medium text-gray-700 mb-2">Academic Info</legend>
          {[
            { name: "indexNo", type: "text" },
            { name: "entryMode", type: "text" },
            { name: "entryLevel", type: "select", options: ["100", "200", "300", "400"] },
            { name: "currentLevel", type: "select", options: ["100", "200", "300", "400"] },
            { name: "program", type: "select", options: ["BTech Biomedical Engineering", "Top-up", "Certificate", "BTech Weekend", "HND Regular"] },
            { name: "dateOfAdmission", type: "date" },
            { name: "dateOfCompletion", type: "date" },
            { name: "hall", type: "text" },
          ].map(({ name, type, options }) => (
            <div key={name} className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700" htmlFor={name}>
                {name.replace(/([A-Z])/g, " $1")}
              </label>
              {type === "select" ? (
                <select
                  name={name}
                  value={formData[name] || ""} // Ensure controlled input
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-sm"
                  required
                >
                  <option value="" disabled>Select {name}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={name}
                  placeholder={name.replace(/([A-Z])/g, " $1")}
                  value={formData[name] || ""} // Ensure controlled input
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-sm"
                  type={type}
                  required
                />
              )}
            </div>
          ))}
        </fieldset>

        {/* Personal Info */}
        <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <legend className="col-span-full text-lg font-medium text-gray-700 mb-2">Personal Info</legend>
          {[
            { name: "prefix", type: "select", options: ["Mr", "Mrs", "Ms"] },
            { name: "firstName", type: "text" },
            { name: "middleName", type: "text" },
            { name: "lastName", type: "text" },
            { name: "gender", type: "select", options: ["Male", "Female"] },
            { name: "dateOfBirth", type: "date" },
            { name: "placeOfBirth", type: "text" },
            { name: "nationality", type: "text" },
            { name: "hometown", type: "text" },
            { name: "cityOfBirth", type: "text" },
            { name: "maritalStatus", type: "text" },
            { name: "religion", type: "text" },
          ].map(({ name, type, options }) => (
            <div key={name} className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700" htmlFor={name}>
                {name.replace(/([A-Z])/g, " $1")}
              </label>
              {type === "select" ? (
                <select
                  name={name}
                  value={formData[name] || ""} // Ensure controlled input
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-sm"
                >
                  <option value="" disabled>Select {name}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  name={name}
                  placeholder={name.replace(/([A-Z])/g, " $1")}
                  value={formData[name] || ""} // Ensure controlled input
                  onChange={handleChange}
                  className="border rounded px-3 py-2 text-sm"
                  type={type}
                />
              )}
            </div>
          ))}
        </fieldset>

        {/* Contact Info */}
        <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <legend className="col-span-full text-lg font-medium text-gray-700 mb-2">Contact Info</legend>
          {[
            "mobileNumber",
            "institutionalEmail",
            "personalEmail",
            "addressLine",
            "addressLine2",
          ].map((field) => (
            <div key={field} className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700" htmlFor={field}>
                {field.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                name={field}
                placeholder={field.replace(/([A-Z])/g, " $1")}
                value={formData[field] || ""} // Ensure controlled input
                onChange={handleChange}
                className="border rounded px-3 py-2 text-sm"
                type={field.includes("Email") ? "email" : "text"}
                required
              />
            </div>
          ))}
        </fieldset>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={handleCancelModal}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentModal;
