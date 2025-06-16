"use client";
import React, { useEffect, useState } from "react";
import LoadingScreen from "@/app/loading";
import { AuthenticateUser  } from "@/server/authenticate_account";
import { useParams } from "next/navigation";
import {
  ChevronDown,
  ChevronUp,
  Newspaper,
  Pencil,
  User, // Alternative for UserFriends
  GraduationCap, // Alternative for UserGraduate
  Shield, // Alternative for ShieldCheck
  UserX, // Alternative for UserSlash
  Activity,
  Book, // Alternative for BookOpen
  Home, // Alternative for Building
  Clock,
  BookAIcon,
} from "lucide-react";
import { FetchStudentInfoAdmin } from "@/server/admin/fetch_student_info_admin";
import { FetchLecturerInfoAdmin } from "@/server/admin/fetch_lecturer_info_admin";
import { FetchAccountInfoAdmin } from "@/server/admin/fetch_account_info_admin";



const MiniLoading = () => {
  return(
    <>
         <div className="flex justify-center items-center py-8">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
    </>
  )
}


const GeneralDashboard = () => {
  const param = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [update, setUpdate] = useState(false);
  const [error, setError] = useState(false);
  const [news, setNews] = useState([]);
  const [modalType, setModalType] = useState("");
  const [selectedNews, setSelectedNews] = useState(null);
  const [limit, setLimit] = useState(3);
  const [allDashboardData, setSetAllDashboardData] = useState({
    total_students: "",
    total_lecturers: "",
    active_accounts: "",
    active_accounts_list: [], 
    blocked_accounts: "",
    blocked_accounts_list: [],
    current_logs: [],
    courses: [],
    pending_requests: [],
    news_list: []
  })

  const [dashboardStats, setDashboardStats] = useState({
    students: 1247,
    lecturers: 89,
    activeAccounts: 1298,
    blockedAccounts: 38,
    currentLogs: 156,
    courses: 45,
    departments: 8,
    pendingRequests: 12,
  });


const calculateActiveAndBlockedAccounts = (data) => {
  if (Array.isArray(data)) {
    const blockedAccounts = data.filter((obj) => obj.blocked === true);
    setSetAllDashboardData((prev) => ({
      ...prev,
      blocked_accounts: blockedAccounts.length ===  0 ? "0":blockedAccounts.length,
      active_accounts: data.length - blockedAccounts.length,
    }));
  }
};


useEffect(() => {
  const getAllDashboardInformation = async () => {
    try {
      const fetch_student_information_response = await FetchStudentInfoAdmin();
      const fetch_lecturer_information_response = await FetchLecturerInfoAdmin();
      const fetch_all_accounts_response = await FetchAccountInfoAdmin();

      console.log(fetch_all_accounts_response);
      calculateActiveAndBlockedAccounts(fetch_all_accounts_response.data);

      setSetAllDashboardData((prev) => ({
         ...prev,
        total_lecturers: Array.isArray(fetch_lecturer_information_response.data)
          ? fetch_lecturer_information_response.data.length
          : 0,
      }));
  
      setSetAllDashboardData((prev) => ({
        ...prev,
        total_students: Array.isArray(fetch_student_information_response.data)
          ? fetch_student_information_response.data.length
          : 0,
      }));

    } catch (err) {
      console.error(err);
    }
  };
  
  getAllDashboardInformation();
}, []);


useEffect(() => {
    const authenticateUser  = async () => {
      const admin_id = localStorage.getItem("admin_id");
      const token = localStorage.getItem("admin_token");

      const authenticate_user_response = await AuthenticateUser (
        admin_id,
        "loggedIn",
        token
      );

      if (
        authenticate_user_response.type === "success" ||
        authenticate_user_response.success === true
      ) {
        setIsLoading(false);
      } else {
        setIsLoading(false);
        // setError("An error occurred: " + authenticate_user_response.message);
      }
    };

    authenticateUser ();
  }, []);

  const handleSeeMore = () => {
    setLimit(limit + 3);
  };

  const handleSeeLess = () => {
    setLimit(limit - 3);
  };

  const ViewNewsModal = (item) => {
    setModalType("news");
    setSelectedNews(item);
  };

  if (isLoading) return <LoadingScreen />;

  // Icon color mapping for stats
  const iconColorMap = {
    Students: "text-blue-600",
    Lecturers: "text-green-600",
    "Active Accounts": "text-green-700",
    "Blocked Accounts": "text-red-600",
    "Current Logs": "text-purple-500",
    Courses: "text-orange-600",
    Departments: "text-indigo-600",
    "Pending Requests": "text-yellow-500",
  };

  // Icon component mapping for stats
  const iconMap = {
    Students: <User  size={24} aria-hidden="true" />,
    Lecturers: <GraduationCap size={24} aria-hidden="true" />,
    "Active Accounts": <Shield size={24} aria-hidden="true" />,
    "Blocked Accounts": <UserX size={24} aria-hidden="true" />,
    "Current Logs": <Activity size={24} aria-hidden="true" />,
    Courses: <Book size={24} aria-hidden="true" />,
    Departments: <Home size={24} aria-hidden="true" />,
    "Pending Requests": <Clock size={24} aria-hidden="true" />,
  };

  // Badge color and text for news priority
  const priorityBadge = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return (
          <span className="text-[10px] font-semibold bg-red-200 text-red-700 rounded-full px-2 py-0.5 select-none">
            high
          </span>
        );
      case "medium":
        return (
          <span className="text-[10px] font-semibold bg-yellow-200 text-yellow-800 rounded-full px-2 py-0.5 select-none">
            medium
          </span>
        );
      case "low":
        return (
          <span className="text-[10px] font-semibold bg-green-200 text-green-700 rounded-full px-2 py-0.5 select-none">
            low
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#F9FAFB] space-y-10 p-4 sm:p-6 md:p-10">
      {modalType === "news" && selectedNews && (
        <div className="fixed inset-0 h-screen bg-black/90 bg-opacity-90 flex justify-center items-center z-50 p-4">
          <div className="bg-white p-6 rounded shadow-md max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-3 w-full flex justify-center text-blue-700 mb-2">
              <Newspaper size={32} />
            </div>
            <h2 className="text-xl font-bold mb-2">{selectedNews.title}</h2>
            <p className="mb-2 whitespace-pre-wrap">{selectedNews.message}</p>
            <p className="text-sm text-gray-500">Sent to: {selectedNews.to}</p>
            <p className="text-sm text-gray-500">Posted: {selectedNews.time}</p>
            <button className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline">
              Edit <Pencil size={16} />
            </button>
            <button
              onClick={() => {
                setModalType("");
                setSelectedNews(null);
              }}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 block w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className="bg-red-200 p-5 text-red-700 border border-red-400 rounded-md">
          <strong>Error:</strong> {error}
        </div>
      )}

      <header className="flex justify-between items-center">
        <h1 className="font-semibold text-xl md:text-2xl">Admin Dashboard</h1>
        <p className="text-xs text-gray-500 whitespace-nowrap">
          Biomedical Department Management System
        </p>
      </header>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Students", value: allDashboardData.total_students},
          { label: "Lecturers", value: allDashboardData.total_lecturers },
          { label: "Active Accounts", value: allDashboardData.active_accounts },
          { label: "Blocked Accounts", value: allDashboardData.blocked_accounts},
          { label: "Current Logs", value: dashboardStats.currentLogs },
          { label: "Courses", value: dashboardStats.courses },
          { label: "Departments", value: dashboardStats.departments },
          { label: "Pending Requests", value: dashboardStats.pendingRequests },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-4 shadow-sm flex justify-between items-center"
          >
            <div>
              <p className="text-xs text-gray-600 mb-1">{stat.label}</p>
              <div className="font-extrabold text-xl leading-none">{stat.value ? stat.value:(<MiniLoading/>)}</div>
              <p className="text-xs text-gray-500 mt-1">
                {stat.label === "Pending Requests"
                  ? "Requires attention"
                  : "Total count"}
              </p>
            </div>
            <div
              className={`${iconColorMap[stat.label]} text-2xl`}
              aria-hidden="true"
            >
              {iconMap[stat.label]}
            </div>
          </div>
        ))}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Newspaper size={20} aria-hidden="true" />
            Latest News
          </h2>

          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
            {news.length > 0 ? (
              news.slice(0, limit).map((item, index) => (
                <article
                  key={index}
                  className="flex justify-between items-start border-b border-gray-200 pb-4 last:border-0 last:pb-0"
                >
                  <div className="max-w-[calc(100%-80px)]">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm">{item.title}</h3>
                      {priorityBadge(item.priority)}
                    </div>
                    <p className="text-xs text-gray-600 mb-1 whitespace-pre-wrap">
                      {item.message ||
                        "The biomedical department is excited to announce the opening of our new state-of-the-art research laboratory."}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-tight">
                      To: {item.to || "All Students & Faculty"}
                      <br />
                      By: {item.by || "Dr. Smith"} • {item.time || "Jan 15, 10:30 AM"}
                    </p>
                  </div>
                  <button
                    className="ml-4 px-4 py-1 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 flex items-center gap-2 text-xs"
                    onClick={() => ViewNewsModal(item)}
                    aria-label={`View ${item.title} news`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View
                  </button>
                </article>
              ))
            ) : (
              <div className="flex justify-center items-center py-8">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            {news.length > 0 && (
              <>
                {limit === 3 ? (
                  <div className="px-5 py-2 text-gray-400 flex flex-row items-center justify-center cursor-pointer select-none">
                    <button
                      onClick={handleSeeMore}
                      className="flex items-center gap-1 text-sm font-semibold hover:text-gray-600"
                      aria-label="See more news"
                    >
                      See More <ChevronDown size={16} />
                    </button>
                  </div>
                ) : limit === 6 ? (
                  <div className="px-5 py-2 text-gray-400 flex flex-row items-center justify-center cursor-pointer select-none">
                    <button
                      onClick={handleSeeLess}
                      className="flex items-center gap-1 text-sm font-semibold hover:text-gray-600"
                      aria-label="See less news"
                    >
                      See Less <ChevronUp size={16} />
                    </button>
                  </div>
                ) : null}
              </>
            )}
          </div>
        </div>

        <aside className="bg-white rounded-lg p-6 shadow-sm h-fit">
          <h2 className="font-semibold text-lg mb-4">Quick Actions</h2>
          <div className="space-y-3 flex flex-col text-xs">
            {[
              {
                name: "Add Student",
                href: `/admin-secret/dashboard/student/${param.dynamic}`,
                icon: <User  size={16} className="text-blue-600" />,
                subtitle: "Register a new student",
              },
              {
                name: "Add Lecturer",
                href: `/admin-secret/dashboard/lecturer/${param.dynamic}`,
                icon: <GraduationCap size={16} className="text-blue-600" />,
                subtitle: "Add faculty member",
              },
              {
                name: "Create Course",
                href: `/admin-secret/dashboard/courses/${param.dynamic}`,
                icon: <Book size={16} className="text-blue-600" />,
                subtitle: "Set up new course",
              },
              {
                name: "Manage Departments",
                href: `/admin-secret/departments/${param.dynamic}`,
                icon: <Home size={16} className="text-blue-600" />,
                subtitle: "Department settings",
              },
              {
                name: "News",
                href: `/admin-secret/dashboard/news/${param.dynamic}`,
                icon: <BookAIcon size={16} className="text-blue-600" />,
                subtitle: "Add News",
              },
              {
                name: "Review Requests",
                href: `/admin-secret/requests/${param.dynamic}`,
                icon: <Clock size={16} className="text-blue-600" />,
                subtitle: "Pending approvals",
              },
            ].map((action, index) => (
              <a
                key={index}
                href={action.href}
                className="w-full text-left border border-gray-300 rounded px-4 py-2 hover:bg-gray-50 flex items-center gap-3"
              >
                {action.icon}
                <div>
                  <p className="font-semibold text-[13px] leading-tight">
                    {action.name}
                  </p>
                  <p className="text-[10px] text-gray-500 leading-tight">
                    {action.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
};

export default GeneralDashboard;
