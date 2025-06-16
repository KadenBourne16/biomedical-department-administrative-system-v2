"use client";
import React, { useState, useEffect } from "react";
import LecturerCard from "@/app/admin-secret/dashboard/lecturer/lecturer-card";
import { FetchLecturerInfoAdmin } from "@/server/admin/fetch_lecturer_info_admin";
import LecturerModal from "../lecturer-info-modal";
import LecturerManageModal, { LecturerManagementModal } from "@/app/admin-secret/dashboard/lecturer/manage-lecturerr";

const LecturerDashboard = () => {
  const [update, setUpdate] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalType, setModalType] = useState("");
  const [lecturers, setLecturers] = useState([]);
  const [lecturerKey, setLecturerKey] = useState("");
  const [messageType, setMessageType] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const fetchLecturers = async () => {
      try {
        const fetchLecturersResponse = await FetchLecturerInfoAdmin();
        if (fetchLecturersResponse.type === "success") {
          console.log("Fetched lecturers successfully:", fetchLecturersResponse.data);
          setLecturers(fetchLecturersResponse.data);
        }

        if (fetchLecturersResponse.type === "fail") {
          setMessageType({
            type: "fail",
            message: fetchLecturersResponse.message || "Failed to fetch lecturers.",
          });
        }

        if (fetchLecturersResponse.type === "error") {
          setMessageType({
            type: "error",
            message: fetchLecturersResponse.message || "Failed to fetch lecturers.",
          });
        }
      } catch (error) {
        console.error("Error fetching lecturers:", error);
      }
    };

    fetchLecturers();
  }, []);

  useEffect(() => {
    console.log("Lecturer Key:", lecturerKey);
    console.log("Modal Type:", modalType);
  }, [lecturerKey, modalType]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredLecturers = lecturers.filter((lecturer) =>
    lecturer.firstname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          {/* Add Lecturer Button */}
   

          {/* Lecturer Modal */}
          {modalType === "Lecturer-Profile" && (
            <LecturerModal
              lecturer={lecturers.find((l) => l._id === lecturerKey)}
              setModalType={setModalType}
            />
          )}

          { modalType === "Manage-Lecturer" && (
            <LecturerManagementModal setModalType={setModalType}/>
          )

          }

          <h2 className="text-3xl font-bold text-gray-900">Available Lecturers</h2>
          <div className="flex items-center space-x-4">
                <input
                type="text"
                placeholder="Search Lecturer..."
                className="p-3 w-72 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={handleSearchChange}
            />
                <button
                onClick={() => alert("Add Lecturer functionality is under development.")}
                className="flex text-sm items-center bg-[#d61b1b] text-white font-semibold py-2 px-4 rounded-sm shadow-sm hover:bg-red-800 transition-all"
            >
                Add Lecturer
            </button>
          </div>
         
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLecturers.map((lecturer) => (
            <LecturerCard
              key={lecturer._id}
              lecturer={lecturer}
              setModalType={setModalType}
              setLecturerKey={setLecturerKey}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboard;
