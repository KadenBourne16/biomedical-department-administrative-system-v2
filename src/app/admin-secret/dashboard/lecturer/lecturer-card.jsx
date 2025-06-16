"use client";
import React from "react";

const LecturerCard = ({ lecturer, setModalType, setLecturerKey }) => {

    const viewLecturerProfile = () => {
        setModalType("Lecturer-Profile");
        setLecturerKey(lecturer._id);
    }

    const manageLecturer = () => {
        setModalType("Manage-Lecturer");
        setLecturerKey(lecturer._id);
    }

  return (
    <div className="bg-[#af0c35] rounded-lg shadow-sm overflow-hidden">
      <div className="flex justify-center items-center p-8">
        <img
          alt={lecturer.firstname || "Lecturer Avatar"}
          className="w-24 h-24 rounded-full border-2 border-white"
          src={lecturer.image}
          width="100"
          height="100"
        />
      </div>

      <div className="bg-white p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="font-bold text-base leading-tight">{lecturer.firstname || "N/A"}, {lecturer.lastname}</h2>
            <p className="text-xs text-[#64748b]"><span className="font-semibold">Personal Email:</span> {lecturer.email || "N/A"}</p>
            <p className="text-xs text-[#64748b]"><span className="font-semibold">Institutional Email:</span> {lecturer.institutional_email || "N/A"}</p>
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
            <dt>Subject:</dt>
            <dd className="font-semibold text-[13px] text-[#0f172a]">{lecturer.subject || "N/A"}</dd>
          </div>

          <div className="flex justify-between">
            <dt>Experience:</dt>
            <dd className="font-semibold text-[13px] text-[#0f172a]">{lecturer.experience || "N/A"}</dd>
          </div>

          <div className="flex justify-between">
            <dt>Department:</dt>
            <dd className="font-bold text-[13px] text-[#0f172a]">{lecturer.department || "N/A"}</dd>
          </div>

          <div className="flex justify-between items-center">
            <dt>Status:</dt>
            <dd>
              <span className="inline-block bg-[#d1fae5] text-[#065f46] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                {lecturer.status || "Active"}
              </span>
            </dd>
          </div>
        </dl>

        <button
          onClick={viewLecturerProfile}
          className="w-full flex justify-center items-center space-x-2 border border-[#e2e8f0] rounded-md py-2 text-sm font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition"
        >
          <i className="fas fa-eye"></i>
          <span>View Profile</span>
        </button>

        <button
          onClick={manageLecturer}
          className="w-full flex justify-center items-center space-x-2 border border-[#e2e8f0] rounded-md py-2 text-sm font-semibold text-white hover:bg-[#8a4f4f] transition bg-[#d61b1b]"
        >
          <i className="fas fa-eye"></i>
          <span>Manage Lecturer</span>
        </button>
      </div>
    </div>
  );
};

export default LecturerCard;
