"use client";
import { useStudent } from "@/app/components/context/admin_student_context";
import MinorLoadingAnimation from "@/app/components/global/mini_loading_animation";
import React from "react";

const StudentCard = ({ studentData, setModalType }) => {
   const {data, setData} = useStudent()

  // Loading: studentData is undefined or null
  if (studentData === undefined || studentData === null) {
    return (
      <div className="flex justify-center items-center w-full py-12">
        <MinorLoadingAnimation />
      </div>
    );
  }

  // Empty: studentData is an empty array
  if (Array.isArray(studentData) && studentData.length === 0) {
    return (
      <div className="flex justify-center items-center w-full py-12">
        <p className="text-center text-gray-500 col-span-full">No students found.</p>
      </div>
    );
  }

  const viewStudentProfile = (studentIndex) => {
    setModalType("Student-Profile");
    setData(studentData[studentIndex]);
  }

  // Display students
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {studentData.map((student) => (
        <div key={student._id || student.indexNo || Math.random()}>
          <article className="bg-[#91b9ff] rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-center items-center p-8">
              <img
                alt="Placeholder avatar image of a student"
                className="w-24 h-24 rounded-full border-2 border-white"
                src="https://storage.googleapis.com/a1aa/image/9af3d11d-8aa2-4fab-5cef-39d5ea05464d.jpg"
                width="100"
                height="100"
              />
            </div>
            <div className="bg-white p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-base leading-tight">{student.firstName || "N/A"}</h2>
                  <p className="text-xs text-[#64748b]">{student.institutionalEmail || "N/A"}</p>
                </div>
                <button
                  aria-label="More options"
                  className="text-[#475569] hover:text-[#0f172a]"
                >
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
              <dl className="text-xs text-[#64748b] space-y-1">
                <div className="flex justify-between">
                  <dt>Index Number:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">{student.indexNo || "N/A"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Level:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">
                    {student.currentLevel || "N/A"}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt>Program:</dt>
                  <dd className="font-bold text-[13px] text-[#0f172a]">{student.program || "N/A"}</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt>Status:</dt>
                  <dd>
                    <span className="inline-block bg-[#d1fae5] text-[#065f46] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      {student.status || "Active"}
                    </span>
                  </dd>
                </div>
              </dl>
              <button
              onClick={() => viewStudentProfile(studentData.indexOf(student))}
              className="w-full flex justify-center items-center space-x-2 border border-[#e2e8f0] rounded-md py-2 text-sm font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition"
              >
              <i className="fas fa-eye"></i>
              <span>View Profile</span>
            </button>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default StudentCard;