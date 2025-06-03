"use client";

import NewsDetailsPage from "@/app/components/news/news_details_modal";
import React from "react";

const NewsAnnouncementsPage = () => {
  return (
    <div className="bg-[#f0f5fb] min-h-screen p-6">
      <div className="max-w-[1280px] mx-auto space-y-6">
        {/* Header Section */}
        <section className="bg-white rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-lg w-12 h-12 bg-gradient-to-r from-[#f97316] to-[#dc2626]">
              <i className="fas fa-newspaper text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-[#0f172a] font-extrabold text-lg md:text-xl leading-tight">
                News & Announcements
              </h1>
              <p className="text-[#475569] text-sm md:text-base font-normal leading-snug max-w-[320px] md:max-w-none">
                Manage department news and important announcements
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="flex items-center gap-2 border border-[#e2e8f0] rounded-md px-4 py-2 text-[#0f172a] font-semibold text-sm hover:bg-[#f9fafb] transition"
            >
              <i className="fas fa-download"></i> Export
            </button>
            <button
              type="button"
              className="flex items-center gap-2 border border-[#e2e8f0] rounded-md px-4 py-2 text-[#0f172a] font-semibold text-sm hover:bg-[#f9fafb] transition"
            >
              <i className="fas fa-bell"></i> Send Notification
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-md px-5 py-2 font-semibold text-white text-sm bg-gradient-to-r from-[#f97316] to-[#dc2626] hover:brightness-110 transition"
            >
              <i className="fas fa-plus"></i> Create News
            </button>
          </div>
        </section>


        {/*News Details */}
        <NewsDetailsPage/>
        {/* Search and Filters */}
        <section className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-sm">
          <input
            type="search"
            placeholder="Search news by title, content, or author..."
            className="flex-grow max-w-full sm:max-w-[600px] rounded-md border border-[#e2e8f0] bg-[#f9fafb] text-[#64748b] text-sm placeholder-[#94a3b8] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          />
          <select
            aria-label="Priority filter"
            className="rounded-md border border-[#e2e8f0] bg-white text-[#475569] text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          >
            <option>Priority</option>
            <option>High Priority</option>
            <option>Medium Priority</option>
            <option>Low Priority</option>
          </select>
          <select
            aria-label="Audience filter"
            className="rounded-md border border-[#e2e8f0] bg-white text-[#475569] text-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          >
            <option>Students</option>
            <option>Faculty</option>
            <option>All</option>
          </select>
          <button
            type="button"
            aria-label="Filter"
            className="border border-[#e2e8f0] rounded-md p-2 text-[#475569] hover:bg-[#f9fafb] transition"
          >
            <i className="fas fa-filter"></i>
          </button>
        </section>

        {/* News Cards */}
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="News articles"
        >
          {/* Card 1 */}
          <article
            className="bg-white rounded-xl shadow-sm flex flex-col"
            aria-labelledby="news1-title"
          >
            <header className="rounded-t-xl px-5 py-4 bg-gradient-to-r from-[#f97316] to-[#dc2626] flex justify-between items-start">
              <h2
                id="news1-title"
                className="text-white font-extrabold text-base leading-tight max-w-[calc(100%-24px)]"
              >
                New Research Lab Opening
              </h2>
              <button
                aria-label="More options"
                className="text-white text-lg opacity-70 hover:opacity-100 transition"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </header>
            <div className="px-5 pt-2 pb-4 flex flex-col flex-grow">
              <span className="inline-block bg-[#fca5a5] text-[#7f1d1d] text-xs font-semibold rounded-full px-3 py-0.5 mb-3 w-max">
                High Priority
              </span>
              <p className="text-[#334155] text-sm leading-relaxed mb-4 flex-grow">
                The biomedical department is excited to announce the opening of our new state-of-the-art research laboratory.
              </p>
              <hr className="border-[#e2e8f0] mb-4" />
              <ul className="text-[#64748b] text-xs space-y-1 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fas fa-user"></i> By Dr. Smith
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> To: All Students &amp; Faculty
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i> Jan 15, 2024, 10:30 AM
                </li>
              </ul>
              <button
                type="button"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm rounded-md py-2 flex items-center justify-center gap-2"
              >
                <i className="fas fa-eye"></i> View Full Article
              </button>
            </div>
          </article>

          {/* Card 2 */}
          <article
            className="bg-white rounded-xl shadow-sm flex flex-col"
            aria-labelledby="news2-title"
          >
            <header className="rounded-t-xl px-5 py-4 bg-gradient-to-r from-[#f97316] to-[#dc2626] flex justify-between items-start">
              <h2
                id="news2-title"
                className="text-white font-extrabold text-base leading-tight max-w-[calc(100%-24px)]"
              >
                Semester Registration Deadline
              </h2>
              <button
                aria-label="More options"
                className="text-white text-lg opacity-70 hover:opacity-100 transition"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </header>
            <div className="px-5 pt-2 pb-4 flex flex-col flex-grow">
              <span className="inline-block bg-[#f3e79b] text-[#713f12] text-xs font-semibold rounded-full px-3 py-0.5 mb-3 w-max">
                Medium Priority
              </span>
              <p className="text-[#334155] text-sm leading-relaxed mb-4 flex-grow">
                Reminder: The deadline for semester registration is approaching. Please complete your course selections.
              </p>
              <hr className="border-[#e2e8f0] mb-4" />
              <ul className="text-[#64748b] text-xs space-y-1 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fas fa-user"></i> By Admin Office
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> To: All Students
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i> Jan 14, 2024, 02:20 PM
                </li>
              </ul>
              <button
                type="button"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm rounded-md py-2 flex items-center justify-center gap-2"
              >
                <i className="fas fa-eye"></i> View Full Article
              </button>
            </div>
          </article>

          {/* Card 3 */}
          <article
            className="bg-white rounded-xl shadow-sm flex flex-col"
            aria-labelledby="news3-title"
          >
            <header className="rounded-t-xl px-5 py-4 bg-gradient-to-r from-[#f97316] to-[#dc2626] flex justify-between items-start">
              <h2
                id="news3-title"
                className="text-white font-extrabold text-base leading-tight max-w-[calc(100%-24px)]"
              >
                Faculty Meeting Scheduled
              </h2>
              <button
                aria-label="More options"
                className="text-white text-lg opacity-70 hover:opacity-100 transition"
              >
                <i className="fas fa-ellipsis-v"></i>
              </button>
            </header>
            <div className="px-5 pt-2 pb-4 flex flex-col flex-grow">
              <span className="inline-block bg-[#6ee7b7] text-[#064e3b] text-xs font-semibold rounded-full px-3 py-0.5 mb-3 w-max">
                Low Priority
              </span>
              <p className="text-[#334155] text-sm leading-relaxed mb-4 flex-grow">
                Monthly faculty meeting scheduled for next week. Please check your calendars and confirm attendance.
              </p>
              <hr className="border-[#e2e8f0] mb-4" />
              <ul className="text-[#64748b] text-xs space-y-1 mb-6">
                <li className="flex items-center gap-2">
                  <i className="fas fa-user"></i> By Department Head
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-paper-plane"></i> To: All Faculty
                </li>
                <li className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i> Jan 13, 2024, 09:15 AM
                </li>
              </ul>
              <button
                type="button"
                className="bg-[#f97316] hover:bg-[#ea580c] text-white font-semibold text-sm rounded-md py-2 flex items-center justify-center gap-2"
              >
                <i className="fas fa-eye"></i> View Full Article
              </button>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default NewsAnnouncementsPage;
