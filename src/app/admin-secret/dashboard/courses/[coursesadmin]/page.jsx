"use client";

import React from "react";

const CourseManagementPage = () => {
  return (
    <div className="bg-[#f0faf5] min-h-screen p-4">
      <div className="max-w-[1280px] mx-auto space-y-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#0a7a3f] rounded-md p-3 flex items-center justify-center">
              <img
                alt="Green square icon with white book symbol representing course management"
                className="w-6 h-6"
                height="24"
                src="https://storage.googleapis.com/a1aa/image/3290a44f-a7f0-427e-b8f9-3181154c7137.jpg"
                width="24"
              />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-[#111827] leading-tight">
                Course Management
              </h1>
              <p className="text-sm text-[#6b7280]">
                Manage academic courses and curriculum
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              className="flex items-center gap-2 border border-[#374151] text-[#374151] rounded-md px-4 py-2 text-sm font-medium hover:bg-[#e5e7eb] transition"
              type="button"
            >
              <i className="fas fa-download"></i>
              Export Courses
            </button>
            <button
              className="flex items-center gap-2 border border-[#374151] text-[#374151] rounded-md px-4 py-2 text-sm font-medium hover:bg-[#e5e7eb] transition"
              type="button"
            >
              <i className="fas fa-graduation-cap"></i>
              Course Catalog
            </button>
            <button
              className="bg-[#0a7a3f] text-white rounded-md px-4 py-2 text-sm font-semibold hover:bg-[#0a7a3f]/90 transition"
              type="button"
            >
              + Add Course
            </button>
          </div>
        </header>
        {/* Search and Filters */}
        <section className="bg-white rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
          <input
            className="flex-1 border border-[#d1d5db] rounded-md px-4 py-2 text-sm text-[#6b7280] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#0a7a3f]"
            placeholder="Search courses by name, code, or instructor..."
            type="search"
          />
          <div className="flex gap-3 flex-wrap">
            <select className="border border-[#d1d5db] rounded-md px-3 py-2 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#0a7a3f]">
              <option>Department</option>
              <option>Biomedical Engineering</option>
              <option>Biomedical Science</option>
              <option>Medical Laboratory Science</option>
            </select>
            <select className="border border-[#d1d5db] rounded-md px-3 py-2 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#0a7a3f]">
              <option>Level</option>
              <option>100</option>
              <option>200</option>
              <option>300</option>
            </select>
            <select className="border border-[#d1d5db] rounded-md px-3 py-2 text-sm text-[#374151] focus:outline-none focus:ring-2 focus:ring-[#0a7a3f]">
              <option>Type</option>
              <option>BTECH</option>
              <option>Other</option>
            </select>
            <button
              aria-label="Filter"
              className="border border-[#374151] rounded-md px-3 py-2 text-[#374151] hover:bg-[#e5e7eb] transition"
              type="button"
            >
              <i className="fas fa-filter"></i>
            </button>
          </div>
        </section>
        {/* Courses Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Course 1 */}
          <article className="bg-[#0a7a3f] rounded-lg shadow-md flex flex-col">
            <header className="px-4 py-3 flex justify-between items-start rounded-t-lg">
              <div className="flex items-center gap-2">
                <span className="bg-[#0a7a3f]/70 text-white text-xs font-semibold rounded px-2 py-0.5">
                  BME101
                </span>
                <span className="bg-[#a78bfa] text-white text-xs font-semibold rounded-full px-2 py-0.5">
                  BTECH
                </span>
              </div>
              <button
                aria-label="More options"
                className="text-white text-lg opacity-60 hover:opacity-100"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </header>
            <h2 className="px-4 text-white font-extrabold text-lg leading-snug mb-3" style={{ lineBreak: "anywhere" }}>
              Introduction to Biomedical Engineering
            </h2>
            <div className="bg-white rounded-b-lg p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-[#065f46] font-semibold">
                <i className="fas fa-ribbon"></i>
                <span className="text-lg">3 Credits</span>
                <span className="ml-auto bg-[#dcfce7] text-[#166534] text-xs font-semibold rounded-full px-3 py-0.5">
                  Active
                </span>
              </div>
              <ul className="text-[#374151] text-sm space-y-1 mb-3">
                <li className="flex items-center gap-2">
                  <i className="fas fa-building"></i>
                  Biomedical Engineering
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-book-open"></i>
                  Level 100
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-user"></i>
                  Prof. Dr. Sarah Mitchell
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i>
                  First Semester
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-clock"></i>
                  Mon/Wed/Fri 10:00-11:00 AM
                </li>
              </ul>
              <p className="text-xs text-[#4b5563] mb-4 leading-tight">
                An introductory course covering the fundamentals of biomedical engineering, including biomaterials,...
              </p>
              <hr className="border-[#e5e7eb] mb-4" />
              <div className="flex justify-between text-[#0a7a3f] font-semibold text-sm">
                <div className="flex flex-col items-center">
                  <i className="fas fa-user-friends text-lg"></i>
                  <span>45</span>
                  <span className="text-xs font-normal">Enrolled</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-user text-lg"></i>
                  <span>50</span>
                  <span className="text-xs font-normal">Capacity</span>
                </div>
              </div>
              <button
                className="mt-6 bg-[#0a7a3f] hover:bg-[#0a7a3f]/90 text-white font-semibold rounded-md py-2 w-full flex items-center justify-center gap-2"
                type="button"
              >
                <i className="fas fa-eye"></i>
                View Course Details
              </button>
            </div>
          </article>
          {/* Course 2 */}
          <article className="bg-white rounded-lg shadow-md flex flex-col">
            <header className="bg-[#0a7a3f] rounded-t-lg px-4 py-3 flex justify-between items-start">
              <div className="flex items-center gap-2">
                <span className="bg-[#0a7a3f]/70 text-white text-xs font-semibold rounded px-2 py-0.5">
                  BMS201
                </span>
                <span className="bg-[#a78bfa] text-white text-xs font-semibold rounded-full px-2 py-0.5">
                  BTECH
                </span>
              </div>
              <button
                aria-label="More options"
                className="text-white text-lg opacity-60 hover:opacity-100"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </header>
            <h2 className="bg-[#0a7a3f] text-white font-extrabold text-lg px-4 py-2 leading-snug" style={{ lineBreak: "anywhere" }}>
              Human Anatomy and Physiology
            </h2>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-[#065f46] font-semibold">
                <i className="fas fa-ribbon"></i>
                <span className="text-lg">4 Credits</span>
                <span className="ml-auto bg-[#dcfce7] text-[#166534] text-xs font-semibold rounded-full px-3 py-0.5">
                  Active
                </span>
              </div>
              <ul className="text-[#374151] text-sm space-y-1 mb-3">
                <li className="flex items-center gap-2">
                  <i className="fas fa-building"></i>
                  Biomedical Science
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-book-open"></i>
                  Level 200
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-user"></i>
                  Dr. Michael Chen
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i>
                  First Semester
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-clock"></i>
                  Tue/Thu 2:00-4:00 PM
                </li>
              </ul>
              <p className="text-xs text-[#4b5563] mb-4 leading-tight">
                Comprehensive study of human body systems, their structure, function, and interrelationships.
              </p>
              <hr className="border-[#e5e7eb] mb-4" />
              <div className="flex justify-between text-[#0a7a3f] font-semibold text-sm">
                <div className="flex flex-col items-center">
                  <i className="fas fa-user-friends text-lg"></i>
                  <span>38</span>
                  <span className="text-xs font-normal">Enrolled</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-user text-lg"></i>
                  <span>40</span>
                  <span className="text-xs font-normal">Capacity</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-[#374151]">
                Prerequisites:
                <span className="inline-block bg-[#f3f4f6] text-[#374151] rounded-full px-3 py-1 font-semibold mr-2">
                  BIO101
                </span>
              </div>
            </div>
          </article>
          {/* Course 3 */}
          <article className="bg-white rounded-lg shadow-md flex flex-col">
            <header className="bg-[#0a7a3f] rounded-t-lg px-4 py-3 flex justify-between items-start">
              <div className="flex items-center gap-2">
                <span className="bg-[#0a7a3f]/70 text-white text-xs font-semibold rounded px-2 py-0.5">
                  MLS301
                </span>
                <span className="bg-[#a78bfa] text-white text-xs font-semibold rounded-full px-2 py-0.5">
                  BTECH
                </span>
              </div>
              <button
                aria-label="More options"
                className="text-white text-lg opacity-60 hover:opacity-100"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </header>
            <h2 className="bg-[#0a7a3f] text-white font-extrabold text-lg px-4 py-2 leading-snug" style={{ lineBreak: "anywhere" }}>
              Clinical Microbiology
            </h2>
            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2 text-[#065f46] font-semibold">
                <i className="fas fa-ribbon"></i>
                <span className="text-lg">3 Credits</span>
                <span className="ml-auto bg-[#dcfce7] text-[#166534] text-xs font-semibold rounded-full px-3 py-0.5">
                  Active
                </span>
              </div>
              <ul className="text-[#374151] text-sm space-y-1 mb-3">
                <li className="flex items-center gap-2">
                  <i className="fas fa-building"></i>
                  Medical Laboratory Science
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-book-open"></i>
                  Level 300
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-user"></i>
                  Associate Prof. Emily Rodriguez
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i>
                  Second Semester
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-clock"></i>
                  Mon/Wed 1:00-2:30 PM
                </li>
              </ul>
              <p className="text-xs text-[#4b5563] mb-4 leading-tight">
                Study of microorganisms causing human diseases, diagnostic techniques, and antimicrobial therapy.
              </p>
              <hr className="border-[#e5e7eb] mb-4" />
              <div className="flex justify-between text-[#0a7a3f] font-semibold text-sm">
                <div className="flex flex-col items-center">
                  <i className="fas fa-user-friends text-lg"></i>
                  <span>25</span>
                  <span className="text-xs font-normal">Enrolled</span>
                </div>
                <div className="flex flex-col items-center">
                  <i className="fas fa-user text-lg"></i>
                  <span>30</span>
                  <span className="text-xs font-normal">Capacity</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-[#374151]">
                Prerequisites:
                <span className="inline-block bg-[#f3f4f6] text-[#374151] rounded-full px-3 py-1 font-semibold mr-2">
                  MLS201
                </span>
                <span className="inline-block bg-[#f3f4f6] text-[#374151] rounded-full px-3 py-1 font-semibold">
                  BMS201
                </span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default CourseManagementPage;
