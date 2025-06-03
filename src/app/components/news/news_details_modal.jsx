"use client";

import React from "react";

const NewsDetailsPage = () => {
  return (
    <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md relative p-6">
        <button
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="flex items-center gap-2 mb-4 text-gray-900 font-semibold text-base">
          <i className="fas fa-file-alt"></i>
          <span>News Details</span>
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
          New Research Lab Opening
          <span className="text-xs font-semibold bg-red-200 text-red-700 rounded-full px-2 py-0.5">
            high
          </span>
        </h2>

        <p className="bg-gray-100 text-gray-700 text-sm rounded-md p-4 mb-6 leading-relaxed">
          The biomedical department is excited to announce the opening of our
          new state-of-the-art research laboratory.
        </p>

        <div className="flex flex-wrap justify-between text-gray-700 text-sm mb-8">
          <div className="mb-4 w-full sm:w-auto">
            <p className="font-semibold">Sent to:</p>
            <p>All Students &amp; Faculty</p>
          </div>
          <div className="mb-4 w-full sm:w-auto">
            <p className="font-semibold">Author:</p>
            <p>Dr. Smith</p>
          </div>
          <div className="w-full sm:w-auto">
            <p className="font-semibold">Posted:</p>
            <p>January 15, 2024 at 10:30 AM</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-gray-900 text-sm hover:bg-gray-100 focus:outline-none"
          >
            <i className="far fa-edit"></i>
            Edit
          </button>
          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2 text-sm focus:outline-none"
          >
            <i className="fas fa-trash-alt"></i>
            Delete
          </button>
          <button
            type="button"
            className="ml-auto border border-gray-300 rounded-md px-4 py-2 text-gray-900 text-sm hover:bg-gray-100 focus:outline-none"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsPage;
