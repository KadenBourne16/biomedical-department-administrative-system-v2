"use client"

import { Calendar, Award, BookOpen, Newspaper, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { FetchUserServerSideAction } from "@/serverSide/fetch_user_serverside_action"

export default function DashboardStudent() {
  const params = useParams()
  const studentId = params.id // This will extract the dynamic segment from the URL

  const [studentInfo, setStudentInfo] = useState({}) // Initialize as empty object, not string
  const [loading, setLoading] = useState(true) // State to manage loading
  const [error, setError] = useState(null) // Add error state

  useEffect(() => {
    // Define the fetch function
    const fetchStudentData = async () => {
      try {
        const response = await FetchUserServerSideAction(studentId)
        // console.log(response);
        if (response) {
          setStudentInfo(response.data[0])
        } else {
          setError("No student data found")
        }
      } catch (err) {
        console.error("Error fetching student data:", err)
        setError("Failed to load student data")
      } finally {
        setLoading(false)
      }
    }

    // Call the function
    fetchStudentData()
  }, [studentId]) // Dependency array to run effect when studentId changes

  // Show loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#2541B2]"></div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="p-6 max-w-6xl mx-auto">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Error</p>
          <p>{error}</p>
          <p className="text-sm mt-2">Student ID: {studentId}</p>
        </div>
      </div>
    )
  }

  const studentData = {
    cgpa: studentInfo.cgpa || 4,
    gpa: studentInfo.gpa || 4,
    gradeLevel: studentInfo.gradeLevel || "A", // Use the fetched grade level
    news: [
      { id: 1, title: "Campus Library Extended Hours", date: "Mar 15, 2025" },
      { id: 2, title: "New Research Opportunities Available", date: "Mar 12, 2025" },
      { id: 3, title: "Student Council Elections Next Week", date: "Mar 10, 2025" },
    ],
    events: [
      { id: 1, title: "Mid-term Exams", date: "Mar 25, 2025", time: "9:00 AM" },
      { id: 2, title: "Career Fair", date: "Apr 5, 2025", time: "10:00 AM" },
      { id: 3, title: "Workshop: Study Skills", date: "Apr 10, 2025", time: "2:00 PM" },
    ],
  }

  // Function to determine grade color
  const getGradeColor = (grade) => {
    const gradeColors = {
      "A+": "bg-green-500",
      A: "bg-green-600",
      B: "bg-blue-500",
      C: "bg-yellow-500",
      D: "bg-orange-500",
      E: "bg-red-400",
      F: "bg-red-600",
    }
    return gradeColors[grade] || "bg-gray-500"
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-[#2541B2] mb-6">
        Welcome back, <span>{studentInfo.firstName}|{studentInfo.indexNo}</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* CGPA Score Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#2541B2] p-4 text-white flex items-center justify-between">
            <h2 className="font-semibold text-lg">CGPA Score</h2>
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-[#2541B2]">{studentData.cgpa}</div>
            <p className="text-gray-500 mt-2">Cumulative Grade Point Average</p>
          </div>
        </div>

        {/* GPA Score Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#2541B2] p-4 text-white flex items-center justify-between">
            <h2 className="font-semibold text-lg">GPA Score</h2>
            <TrendingUp className="h-5 w-5" />
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-[#2541B2]">{studentData.gpa}</div>
            <p className="text-gray-500 mt-2">Current Semester GPA</p>
          </div>
        </div>

        {/* Grade Level Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#2541B2] p-4 text-white flex items-center justify-between">
            <h2 className="font-semibold text-lg">Grade Level</h2>
            <Award className="h-5 w-5" />
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            <div
              className={`text-5xl font-bold text-white ${getGradeColor(studentData.gradeLevel)} rounded-full w-24 h-24 flex items-center justify-center`}
            >
              {studentData.gradeLevel}
            </div>
            <p className="text-gray-500 mt-4">
              {studentData.gradeLevel === "A" || studentData.gradeLevel === "A+"
                ? "Excellent Performance!"
                : studentData.gradeLevel === "B"
                  ? "Good Performance"
                  : studentData.gradeLevel === "C"
                    ? "Average Performance"
                    : "Needs Improvement"}
            </p>
          </div>
        </div>

        {/* News Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden md:col-span-2 lg:col-span-2">
          <div className="bg-[#2541B2] p-4 text-white flex items-center justify-between">
            <h2 className="font-semibold text-lg">Latest News</h2>
            <Newspaper className="h-5 w-5" />
          </div>
          <div className="p-4">
            <ul className="divide-y divide-gray-200">
              {studentData.news.map((item) => (
                <li key={item.id} className="py-3">
                  <div className="flex justify-between">
                    <p className="font-medium">{item.title}</p>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-2 text-[#2541B2] hover:underline text-sm font-medium">View all news</button>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#2541B2] p-4 text-white flex items-center justify-between">
            <h2 className="font-semibold text-lg">Upcoming Events</h2>
            <Calendar className="h-5 w-5" />
          </div>
          <div className="p-4">
            <ul className="divide-y divide-gray-200">
              {studentData.events.map((event) => (
                <li key={event.id} className="py-3">
                  <p className="font-medium">{event.title}</p>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                </li>
              ))}
            </ul>
            <button className="mt-2 text-[#2541B2] hover:underline text-sm font-medium">View calendar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

