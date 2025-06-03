"use client"
import { checkAuthorisationServerSide } from "@/server/check_authorisation_serside_action"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Users,
  BookOpen,
  MessageSquare,
  TrendingUp,
  Calendar,
  Bell,
  Eye,
  UserCheck,
  FileText,
  PlusCircle,
  BarChart3,
  Clock,
  Award,
  Activity,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { FetchDataAll } from "@/server/fetch_data_all copy"
import { FetchDataSingle } from "@/server/fetch_data_single"

// Bubble Loader Component
const BubbleLoader = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
    </div>
  )
}

const LecturerDashboard = () => {
  const router = useRouter()
  const [lecturerEmail, setLectuerEmail] = useState("")
  const [loading, setLoading] = useState(true)
  const [dataLoading, setDataLoading] = useState({
    students: true,
    news: true,
    events: true,
  })
  const [viewLimits, setViewLimits] = useState({
    students: 3,
    news: 3,
    events: 3,
  })
  const [dashboardData, setDashboardData] = useState({
    totalStudents: 0,
    activeCourses: 0,
    pendingReviews: 0,
    newsPublished: 0,
    assignedStudent: [],
    latestNews: [],
    upcomingEvents: [],
  })

  useEffect(() => {
    const fetchAuthorisation = async () => {
      try {
        const isAuthorised = await checkAuthorisationServerSide()
        if (isAuthorised && isAuthorised.authorised) {
          setLoading(false)
        } else {
          router.push("/")
        }
      } catch (error) {
        console.error("Error fetching authorization:", error)
        router.push("/") // Redirect to login if error occurs
      }
    }

    fetchAuthorisation()
  }, [])

  useEffect(() => {
    const loadAllDashboardData = async () => {
      try {
        // Fetch news
        const fetch_news_response = await FetchDataAll("news")
        if (fetch_news_response && fetch_news_response.success) {
          setDashboardData((prev) => ({
            ...prev,
            latestNews: fetch_news_response.data,
          }))
        }
        setDataLoading((prev) => ({ ...prev, news: false }))

        // Fetch events
        const fetch_event_response = await FetchDataAll("events")
        if (fetch_event_response.type === "success") {
          setDashboardData((prev) => ({
            ...prev,
            upcomingEvents: fetch_event_response.data,
          }))
        }
        setDataLoading((prev) => ({ ...prev, events: false }))

        // Fetch students
        const lecturerLocalStorage_email = localStorage.getItem("lecturer_email")
        const fetch_student_academic_life_response = await FetchDataSingle(
          lecturerLocalStorage_email,
          "student_academiclife",
          "assigned_lecturer_email",
          true,
        )
        console.log(fetch_student_academic_life_response)
        if (fetch_student_academic_life_response && fetch_student_academic_life_response.success) {
          setDashboardData((prev) => ({
            ...prev,
            assignedStudent: fetch_student_academic_life_response.data,
            totalStudents: fetch_student_academic_life_response.data.length,
          }))
        }
        setDataLoading((prev) => ({ ...prev, students: false }))
      } catch (err) {
        console.error("Error: ", err)
        setDataLoading({ students: false, news: false, events: false })
      }
    }
    loadAllDashboardData()
  }, [])

  const handleViewToggle = (section) => {
    setViewLimits((prev) => ({
      ...prev,
      [section]: prev[section] === 3 ? 8 : 3,
    }))
  }

  if (loading) {
    return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 border-t-transparent"></div>
    </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lecturer Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's an overview of your teaching activities.</p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Students</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.totalStudents}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  Assigned to you
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Courses</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.activeCourses}</p>
                <p className="text-sm text-blue-600 flex items-center mt-1">
                  <BookOpen className="w-4 h-4 mr-1" />
                  Current semester
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.pendingReviews}</p>
                <p className="text-sm text-orange-600 flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  Needs attention
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">News Published</p>
                <p className="text-3xl font-bold text-gray-900">{dashboardData.latestNews.length}</p>
                <p className="text-sm text-purple-600 flex items-center mt-1">
                  <Award className="w-4 h-4 mr-1" />
                  Available
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Bell className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <Eye className="w-8 h-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">View Students</span>
            </button>
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors">
              <UserCheck className="w-8 h-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Manage Careers</span>
            </button>
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-colors">
              <FileText className="w-8 h-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Update Syllabus</span>
            </button>
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-colors">
              <MessageSquare className="w-8 h-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Add Comments</span>
            </button>
            <button className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-red-300 hover:bg-red-50 transition-colors">
              <PlusCircle className="w-8 h-8 text-red-600 mb-2" />
              <span className="text-sm font-medium text-gray-700">Publish News</span>
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Students Assigned */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Students Assigned To You</h2>
              <Activity className="w-5 h-5 text-gray-400" />
            </div>

            {dataLoading.students ? (
              <BubbleLoader />
            ) : (
              <>
                <div className="space-y-4">
                  {dashboardData.assignedStudent.slice(0, viewLimits.students).map((assigned, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 border border-gray-100"
                    >
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Users className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">Index: {assigned.index_number}</p>
                        <p className="text-sm font-medium text-gray-900">
                          Name: {assigned.first_name} {assigned.middle_name} {assigned.last_name}
                        </p>
                        <p className="text-sm text-gray-600">
                          Grade: {assigned.grade} | Performance: {assigned.performance_rating}%
                        </p>
                        <p className="text-sm text-gray-600">Attendance: {assigned.attendance_rate}%</p>
                      </div>
                    </div>
                  ))}
                </div>

                {dashboardData.assignedStudent.length > 3 && (
                  <button
                    onClick={() => handleViewToggle("students")}
                    className="mt-4 flex items-center justify-center w-full py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    {viewLimits.students === 3 ? (
                      <>
                        View More <ChevronDown className="w-4 h-4 ml-1" />
                      </>
                    ) : (
                      <>
                        View Less <ChevronUp className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                )}
              </>
            )}
          </div>

          {/* Latest News & Upcoming Events */}
          <div className="space-y-6">
            {/* Latest News */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Latest News</h2>
                <Bell className="w-5 h-5 text-gray-400" />
              </div>

              {dataLoading.news ? (
                <BubbleLoader />
              ) : (
                <>
                  <div className="space-y-3">
                    {dashboardData.latestNews.slice(0, viewLimits.news).map((news, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-3 py-2">
                        <p className="text-sm font-medium text-gray-900">{news.title}</p>
                        <p className="text-xs text-gray-600 mt-1">{news.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          From: {news.from} | To: {news.to}
                        </p>
                        <p className="text-xs text-gray-500">Expires: {news.expire}</p>
                      </div>
                    ))}
                  </div>

                  {dashboardData.latestNews.length > 3 && (
                    <button
                      onClick={() => handleViewToggle("news")}
                      className="mt-4 flex items-center justify-center w-full py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {viewLimits.news === 3 ? (
                        <>
                          View More <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          View Less <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Events</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>

              {dataLoading.events ? (
                <BubbleLoader />
              ) : (
                <>
                  <div className="space-y-3">
                    {dashboardData.upcomingEvents.slice(0, viewLimits.events).map((event, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                        <div className="bg-green-100 p-2 rounded-full">
                          <Calendar className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{event.event_name}</p>
                          <p className="text-xs text-gray-500">
                            {event.event_date} at {event.event_time}
                          </p>
                          <p className="text-xs text-gray-500">From: {event.from}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {dashboardData.upcomingEvents.length > 3 && (
                    <button
                      onClick={() => handleViewToggle("events")}
                      className="mt-4 flex items-center justify-center w-full py-2 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {viewLimits.events === 3 ? (
                        <>
                          View More <ChevronDown className="w-4 h-4 ml-1" />
                        </>
                      ) : (
                        <>
                          View Less <ChevronUp className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Performance Overview</h2>
            <BarChart3 className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">92%</p>
              <p className="text-sm text-gray-600">Student Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">87%</p>
              <p className="text-sm text-gray-600">Assignment Completion</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                <Activity className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">94%</p>
              <p className="text-sm text-gray-600">Class Attendance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LecturerDashboard
