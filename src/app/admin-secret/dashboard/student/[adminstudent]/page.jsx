"use client";

import React from "react";

const StudentsPage = () => {
  return (
    <div className="bg-[#f8fafc] font-sans text-[#0f172a]">
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold leading-tight">Students</h1>
            <p className="text-sm text-[#475569]">Manage student records and information</p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
            <div className="relative text-[#475569]">
              <input
                className="pl-10 pr-4 py-2 rounded border border-[#e2e8f0] focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent text-sm w-56"
                placeholder="Search students..."
                type="search"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]">
                <i className="fas fa-search"></i>
              </span>
            </div>
            <button className="flex items-center space-x-2 bg-[#0f172a] text-white text-sm font-semibold rounded px-4 py-2 hover:bg-[#1e293b] transition">
              <i className="fas fa-user-plus"></i>
              <span>Add Student</span>
            </button>
          </div>
        </header>
        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Student Card 1 */}
          <article className="bg-[#e8f0fe] rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-center items-center p-8">
              <img
                alt="Placeholder avatar image of a student with a light gray background"
                className="w-24 h-24 rounded-full border-2 border-white"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/9af3d11d-8aa2-4fab-5cef-39d5ea05464d.jpg"
                width="100"
              />
            </div>
            <div className="bg-white p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-base leading-tight">John Doe</h2>
                  <p className="text-xs text-[#64748b]">john.doe@university.edu</p>
                </div>
                <button aria-label="More options" className="text-[#475569] hover:text-[#0f172a]">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
              <dl className="text-xs text-[#64748b] space-y-1">
                <div className="flex justify-between">
                  <dt>Index Number:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">BIO/2023/001</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Level:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">200</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Program:</dt>
                  <dd className="font-bold text-[13px] text-[#0f172a]">Biomedical Engineering</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt>Status:</dt>
                  <dd>
                    <span className="inline-block bg-[#d1fae5] text-[#065f46] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </dd>
                </div>
              </dl>
              <button className="w-full flex justify-center items-center space-x-2 border border-[#e2e8f0] rounded-md py-2 text-sm font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition">
                <i className="fas fa-eye"></i>
                <span>View Profile</span>
              </button>
            </div>
          </article>
          {/* Student Card 2 */}
          <article className="bg-[#e8f0fe] rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-center items-center p-8">
              <img
                alt="Placeholder avatar image of a student with a light gray background"
                className="w-24 h-24 rounded-full border-2 border-white"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/9af3d11d-8aa2-4fab-5cef-39d5ea05464d.jpg"
                width="100"
              />
            </div>
            <div className="bg-white p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-base leading-tight">Sarah Johnson</h2>
                  <p className="text-xs text-[#64748b]">sarah.johnson@university.edu</p>
                </div>
                <button aria-label="More options" className="text-[#475569] hover:text-[#0f172a]">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
              <dl className="text-xs text-[#64748b] space-y-1">
                <div className="flex justify-between">
                  <dt>Index Number:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">BIO/2023/002</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Level:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">300</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Program:</dt>
                  <dd className="font-bold text-[13px] text-[#0f172a]">Biomedical Science</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt>Status:</dt>
                  <dd>
                    <span className="inline-block bg-[#d1fae5] text-[#065f46] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Active
                    </span>
                  </dd>
                </div>
              </dl>
              <button className="w-full flex justify-center items-center space-x-2 border border-[#e2e8f0] rounded-md py-2 text-sm font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition">
                <i className="fas fa-eye"></i>
                <span>View Profile</span>
              </button>
            </div>
          </article>
          {/* Student Card 3 */}
          <article className="bg-[#e8f0fe] rounded-lg shadow-sm overflow-hidden">
            <div className="flex justify-center items-center p-8">
              <img
                alt="Placeholder avatar image of a student with a light gray background"
                className="w-24 h-24 rounded-full border-2 border-white"
                height="100"
                src="https://storage.googleapis.com/a1aa/image/9af3d11d-8aa2-4fab-5cef-39d5ea05464d.jpg"
                width="100"
              />
            </div>
            <div className="bg-white p-6 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-base leading-tight">Michael Chen</h2>
                  <p className="text-xs text-[#64748b]">michael.chen@university.edu</p>
                </div>
                <button aria-label="More options" className="text-[#475569] hover:text-[#0f172a]">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
              <dl className="text-xs text-[#64748b] space-y-1">
                <div className="flex justify-between">
                  <dt>Index Number:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">BIO/2023/003</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Level:</dt>
                  <dd className="font-semibold text-[13px] text-[#0f172a]">100</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Program:</dt>
                  <dd className="font-bold text-[13px] text-[#0f172a]">Medical Laboratory Science</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt>Status:</dt>
                  <dd>
                    <span className="inline-block bg-[#e2e8f0] text-[#475569] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                      Inactive
                    </span>
                  </dd>
                </div>
              </dl>
              <button className="w-full flex justify-center items-center space-x-2 border border-[#e2e8f0] rounded-md py-2 text-sm font-semibold text-[#0f172a] hover:bg-[#f1f5f9] transition">
                <i className="fas fa-eye"></i>
                <span>View Profile</span>
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
};

export default StudentsPage;
