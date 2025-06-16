"use client";

import dynamic from 'next/dynamic';
import { Calendar, Award, BookOpen, Newspaper, TrendingUp, GraduationCap, Users, Clock, Bell, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState, useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import LoadingScreen from "@/app/components/global/loading_animation";
import { checkAuthorisationServerSide } from "@/server/check_authorisation_serside_action";
import { FetchUserServerSideAction } from "@/server/fetch_user_serverside_action";
import { Fetch_All_News_Student_Info } from "@/server/fetch_all_news_info";


export default function DashboardStudent() {
  const params = useParams();
  const router = useRouter();
  const studentId = params.id; // This will extract the dynamic segment from the URL
  const [studentInfo, setStudentInfo] = useState({}); // Initialize as empty object
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // Add error state
  const [globalLoading, setGlobalLoading] = useState(true);
  const [news, setNews] = useState([]);
  const [limit, setLimit] = useState(3)
  
  useEffect(() => {
    if (studentInfo) {
      localStorage.setItem("student_index", studentInfo.indexNo);
    }
  }, [studentInfo]);

  // Check for authorisation
  useEffect(() => {
    const fetchAuthorisation = async () => {
      try {
        const isAuthorised = await checkAuthorisationServerSide();
        if (isAuthorised && isAuthorised.authorised) {
          setGlobalLoading(false);
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Error fetching authorization:", error);
        router.push("/"); // Redirect to login if error occurs
      }
    };

    fetchAuthorisation();
  }, []);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await FetchUserServerSideAction(studentId);
        if (response.success === true) {
          setStudentInfo(response.data[0]);
        } else {
          setError("No student data found");
        }
      } catch (err) {
        console.error("Error fetching student data:", err);
        setError("Failed to load student data");
      } finally {
        setLoading(false);
      }
    };
    
    // Call the function
    fetchStudentData();
  }, [studentId]); // Dependency array to run effect when studentId changes
  

  useEffect(() => {
    const fetchAllDashboardInformation = async() => {
      try{
        const fetch_all_info_response = await Fetch_All_News_Student_Info();
        setNews(fetch_all_info_response.data)
        if(fetch_all_info_response.type === "success"){
          setGlobalLoading(false);
        }
      }catch(err){
        console.error("Could retrieve news: ", err);
      }
      
    }

    fetchAllDashboardInformation();
  }, [])
  
  // Show loading state
  if (loading) {
    return (
      <LoadingScreen/>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="container mx-auto p-6">
        <div className="border-red-200 bg-red-50 p-6 rounded-md">
          <div className="flex items-center gap-3 text-red-700">
            <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
              <Bell className="h-4 w-4" />
            </div>
            <div>
              <p className="font-bold">Error Loading Dashboard</p>
              <p>{error}</p>
              <p className="text-sm mt-2">Student ID: {studentId}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const studentData = {
    cgpa: studentInfo.cgpa || 4,
    gpa: studentInfo.gpa || 4,
    gradeLevel: studentInfo.gradeLevel || "A", // Use the fetched grade level
  };

  // Function to determine grade color
  const getGradeColor = (grade) => {
    const gradeColors = {
      "A+": "bg-emerald-500",
      A: "bg-green-500",
      B: "bg-blue-500",
      C: "bg-yellow-500",
      D: "bg-orange-500",
      E: "bg-red-400",
      F: "bg-red-600",
    };
    return gradeColors[grade] || "bg-gray-500";
  };

  const getGradeMessage = (grade) => {
    if (grade === "A" || grade === "A+") return "Excellent Performance!";
    if (grade === "B") return "Good Performance";
    if (grade === "C") return "Average Performance";
    return "Needs Improvement";
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-[#2541B2] to-indigo-600 bg-clip-text text-transparent">
              {studentInfo.firstName}
            </span>
          </h1>
          <p className="text-slate-600 mt-1">
            Student ID: <span className="font-medium">{studentInfo.indexNo}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-blue-50 text-blue-700 border border-blue-200 rounded-md px-2 py-1">
            Active Student
          </span>
          <span className="bg-green-50 text-green-700 border border-green-200 rounded-md px-2 py-1">
            {studentInfo.department || "Biomedical Department"}
          </span>
        </div>
      </div>

      {/* Academic Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CGPA Score Card */}
        <div className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-[#2541B2] to-indigo-600 text-white rounded-md">
          <div className="p-4">
            <h2 className="flex items-center justify-between text-lg font-bold">
              CGPA Score
              <BookOpen className="h-5 w-5" />
            </h2>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="text-5xl font-bold mb-2">{studentData.cgpa}</div>
              <p className="text-blue-100 text-center">Cumulative Grade Point Average</p>
            </div>
          </div>
        </div>

        {/* GPA Score Card */}
        <div className="overflow-hidden border-0 shadow-lg bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-md">
          <div className="p-4">
            <h2 className="flex items-center justify-between text-lg font-bold">
              Current GPA
              <TrendingUp className="h-5 w-5" />
            </h2>
            <div className="flex flex-col items-center justify-center py-4">
              <div className="text-5xl font-bold mb-2">{studentData.gpa}</div>
              <p className="text-emerald-100 text-center">Current Semester GPA</p>
            </div>
          </div>
        </div>

        {/* Grade Level Card */}
        <div className="overflow-hidden border-0 shadow-lg">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md">
            <div className="p-4">
              <h2 className="flex items-center justify-between text-lg font-bold">
                Grade Level
                <Award className="h-5 w-5" />
              </h2>
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`text-4xl font-bold text-white ${getGradeColor(
                    studentData.gradeLevel,
                  )} rounded-full w-20 h-20 flex items-center justify-center mb-4 shadow-lg`}
                >
                  {studentData.gradeLevel}
                </div>
                <p className="text-slate-600 text-center font-medium">{getGradeMessage(studentData.gradeLevel)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 text-sm font-medium">Current Semester</p>
              <p className="text-xl font-bold text-blue-900">2024/1</p>
            </div>
            <Calendar className="h-6 w-6 text-blue-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Enrolled Courses</p>
              <p className="text-xl font-bold text-green-900">6</p>
            </div>
            <BookOpen className="h-6 w-6 text-green-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 text-sm font-medium">Study Groups</p>
              <p className="text-xl font-bold text-purple-900">3</p>
            </div>
            <Users className="h-6 w-6 text-purple-600" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-600 text-sm font-medium">Attendance</p>
              <p className="text-xl font-bold text-orange-900">95%</p>
            </div>
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
        </div>
      </div>

      {/* News and Events Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Latest News Card */}
        <div className="lg:col-span-2 shadow-lg rounded-md">
          <div className="bg-gradient-to-r from-[#2541B2] to-indigo-600 text-white rounded-t-md p-4">
            <h2 className="flex items-center justify-between">
              Latest News
              <Newspaper className="h-5 w-5" />
            </h2>
          </div>
          <div className="p-0">
            <div className="">
              {news
                .filter(item => item.to === "All Students") // <-- Fix here
                .slice(0, limit)
                .map((item,index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 transition-colors">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-slate-500">{item.message}</p>
                        <p className="text-sm text-slate-500">{item.from}</p>
                        <p className="text-sm text-slate-500">{item.to}</p>
                        <p className="text-sm text-slate-500">{item.posted_date}</p>
                        <p className="text-sm text-slate-500">{item.expire}</p>
                      </div>
                    </div>
                  </div>
              ))}
              <span className="mb-2 w-full flex justify-center">
                { limit === 3 ? (
                  <>
                    <button onClick={() => {setLimit(limit + 3)}} className="flex flex-row hover:text-blue-200 hover:cursor-pointer">
                    <ChevronDown/>
                    Show More
                    </button>
                  </>
                ):
                (
                   <>
                    <button onClick={() => {setLimit(limit - 3)}} className="flex flex-row hover:text-blue-200 hover:cursor-pointer">
                    <ChevronUp/>
                    Show Less
                    </button>
                  </>
                )
              }
              </span>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button className="w-full text-[#2541B2] hover:bg-blue-50 border border-blue-600 rounded-md py-2">
                View all news
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events Card */}
        <div className="shadow-lg rounded-md">
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-t-md p-4">
            <h2 className="flex items-center justify-between">
              Upcoming Events
              <Calendar className="h-5 w-5" />
            </h2>
          </div>
          <div className="p-0">
            <div className="divide-y divide-slate-200">
              {/* {studentData.events.map((event) => (
                <div key={event.id} className="p-4 hover:bg-slate-50 transition-colors">
                  <h3 className="font-medium text-slate-900 mb-2">{event.title}</h3>
                  <div className="flex flex-col gap-1 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              ))} */}
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50">
              <button className="w-full text-emerald-600 hover:bg-emerald-50 border border-emerald-200 rounded-md py-2">
                View calendar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="shadow-lg rounded-md">
        <div className="p-4">
          <h2 className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-[#2541B2]" />
            Quick Actions
          </h2>
        </div>
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="h-auto p-4 flex flex-col gap-2 border border-blue-200 rounded-md hover:bg-blue-50">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <span className="text-sm font-medium">View Courses</span>
          </button>
          <button className="h-auto p-4 flex flex-col gap-2 border border-green-200 rounded-md hover:bg-green-50">
            <Award className="h-6 w-6 text-green-600" />
            <span className="text-sm font-medium">Check Grades</span>
          </button>
          <button className="h-auto p-4 flex flex-col gap-2 border border-purple-200 rounded-md hover:bg-purple-50">
            <Calendar className="h-6 w-6 text-purple-600" />
            <span className="text-sm font-medium">View Schedule</span>
          </button>
          <button className="h-auto p-4 flex flex-col gap-2 border border-orange-200 rounded-md hover:bg-orange-50">
            <Users className="h-6 w-6 text-orange-600" />
            <span className="text-sm font-medium">Study Groups</span>
          </button>
        </div>
      </div>
    </div>
  );
}