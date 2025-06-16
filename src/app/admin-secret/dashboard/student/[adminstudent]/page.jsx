"use client";
import React, { useEffect, useState } from "react";
import StudentCard from "../student-card";
import { FetchStudentInfoAdmin } from "@/server/admin/fetch_student_info_admin";
import AddStudentModal from "../add-student-modal";
import StudentProfileModal from "../student-profile-modal";
import { useStudent } from "@/app/components/context/admin_student_context";

const StudentsPage = () => {
  const [modalType, setModalType] = useState("");
  const [student, setStudent] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayStudent, setDisplayStudent] = useState([]);
  const [studentAcademicData, setStudentAcademicData] = useState([]);
 


  const students_data = async () => {
    const students_data_response = await FetchStudentInfoAdmin();
    setStudent(students_data_response.data);
    setDisplayStudent(students_data_response.data);
  };


useEffect(() => {
    if (modalType === "Success") {
      students_data();
    }
    if(setModalType === "Student-Profile") {
      console.log("modalType", modalType);
    }
    // eslint-disable-next-line
  }, [modalType]);


  useEffect(() => {
    students_data();
  }, []);

  const queryActive = () => {
  if (searchQuery.trim() === "") {
    setDisplayStudent(student);
    return;
  }
  const lowerQuery = searchQuery.toLowerCase();
  const result = student.filter((s) =>
    Object.values(s)
      .filter((v) => typeof v === "string" || typeof v === "number")
      .some((v) => String(v).toLowerCase().includes(lowerQuery))
  );
  setDisplayStudent(result);
};

useEffect(() => {
  queryActive();
  // eslint-disable-next-line
}, [searchQuery, student]);

  return (
    <div className="bg-[#f8fafc] font-sans text-[#0f172a] min-h-screen w-full">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          {modalType === "Student-Profile" && (
            <StudentProfileModal setModalType={setModalType} />
          )}
          
          {modalType === "Add Student" && (
            <div>
              <AddStudentModal setModalType={setModalType} />
            </div>
          )}
          {modalType === "Success" && (
            <div className="fixed inset-0 bg-black/10 flex justify-center items-center z-50 p-4 overflow-auto">
                <div
          role="alert"
          className="max-w-md w-full bg-white shadow-lg rounded-xl p-6 text-center space-y-4"
          >
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-2xl font-semibold text-gray-900">Student Created</h3>
          <p className="text-gray-600 text-base">The student has been successfully added to the system.</p>
          <button
            onClick={() => setModalType("")}
            className="mt-4 px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition"
          >
            Close
          </button>
        </div>
            </div>
          )}
          <div>
            <h1 className="text-2xl font-extrabold leading-tight">Students</h1>
            <p className="text-sm text-[#475569]">
              Manage student records and information
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="relative text-[#475569]">
              <input
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-sm w-56"
                placeholder="Search students..."
                type="search"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <button
              onClick={() => {
                setModalType("Add Student");
              }}
              className="flex items-center space-x-2 bg-[#0f172a] text-white text-sm font-semibold rounded px-4 py-2 hover:bg-[#1e293b] transition"
            >
              <i className="fas fa-user-plus"></i>
              <span>Add Student</span>
            </button>
          </div>
        </header>

        <div className="w-full">
          <StudentCard studentData={displayStudent} setModalType = {setModalType}/>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
