"use server";

import { client } from "@/sanity/lib/client";
import { readFile, writeFile } from "@/app/utils/functions/file_manipulation";

export const GetAnalysis = async () => {
  try {
    const Analysis = [];

    // Try reading from local cache (mocking this logic — implement readFile properly)
    let students = await readFile("student");
    let lecturers = await readFile("lecturer");
    let accounts = await readFile("account");

    // Fallback to Sanity if data is missing
    if (!students || students.length === 0) {
      students = await client.fetch(`*[_type == "student"]`);
      await writeFile(students, "student");
    }

    if (!lecturers || lecturers.length === 0) {
      lecturers = await client.fetch(`*[_type == "lecturer"]`);
      await writeFile(lecturers, "lecturer");
    }

    if (!accounts || accounts.length === 0) {
      accounts = await client.fetch(`*[_type == "account"]`);
      await writeFile(accounts, "account");
    }

    // Push analysis data
    Analysis.push({
      name: "Students",
      total: students.length,
    });

    Analysis.push({
      name: "Lecturers",
      total: lecturers.length,
    });

    const activeAccounts = accounts.filter((acc) => acc.status !== "blocked");
    const blockedAccounts = accounts.filter((acc) => acc.status === "blocked");

    Analysis.push({
      name: "Active Accounts",
      total: activeAccounts.length,
    });

    Analysis.push({
      name: "Blocked Accounts",
      total: blockedAccounts.length,
    });

    // Example for courses:
    const courses = await client.fetch(`*[_type == "course"]`);
    Analysis.push({
      name: "Courses",
      total: courses.length,
    });

    return {
      type: "success",
      success: true,
      message: "Analysis fetched successfully",
      data: Analysis,
    };
  } catch (err) {
    console.error("An error occurred:", err);
    return {
      type: "error",
      success: false,
      message: err.message || "Unknown error",
    };
  }
};
