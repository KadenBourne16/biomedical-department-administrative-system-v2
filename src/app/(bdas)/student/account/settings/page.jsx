"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  User,
  Shield,
  Bell,
  BookOpen,
  FileText,
  Moon,
  LogOut,
  ChevronLeft,
  Mail,
  Eye,
  EyeOff,
  Save,
  AlertTriangle,
} from "lucide-react"

const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState("account")
  const [showPassword, setShowPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [pushNotifications, setPushNotifications] = useState(true)
  const [accountId, setAccountId] = useState("")

  useEffect(() => {
    setAccountId(localStorage.getItem("sid"));
  }, [])

  // Mock student data
  const studentData = {
    name: "John Doe",
    email: "john.doe@student.edu",
    studentId: "STU12345",
    program: "Computer Science",
    year: "3rd Year",
    profileImage: "/ProfilePic.jpg",
  }

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
    // Redirect to login page
    // window.location.href = "/login"
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    // In a real app, you would apply the dark mode to the entire app
    // document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      {/* Header */}
      <header
        className={`${darkMode ? "bg-gray-800" : "bg-[#2541B2]"} text-white p-4 flex items-center justify-between`}
      >
        <Link href={`/student/dashboard/${accountId}`} className="flex items-center space-x-2 text-white hover:text-gray-200">
          <ChevronLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-xl font-bold">Settings</h1>
        <div className="w-24"></div> {/* Spacer for centering */}
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className={`md:w-1/4 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4 h-fit`}>
          <div className="flex flex-col items-center mb-6 p-4">
            <div className="relative">
              <Image
                src={studentData.profileImage || "/placeholder.svg"}
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full border-4 border-[#2541B2]"
              />
              <div
                className={`absolute bottom-0 right-0 w-4 h-4 rounded-full ${darkMode ? "bg-green-400" : "bg-green-500"} border-2 ${darkMode ? "border-gray-800" : "border-white"}`}
              ></div>
            </div>
            <h2 className="mt-2 font-bold text-lg">{studentData.name}</h2>
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>{studentData.program}</p>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{studentData.studentId}</p>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("account")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                    activeTab === "account"
                      ? "bg-[#2541B2] text-white"
                      : darkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Shield size={18} />
                  <span>Account & Security</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                    activeTab === "profile"
                      ? "bg-[#2541B2] text-white"
                      : darkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <User size={18} />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                    activeTab === "notifications"
                      ? "bg-[#2541B2] text-white"
                      : darkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("academic")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                    activeTab === "academic"
                      ? "bg-[#2541B2] text-white"
                      : darkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <BookOpen size={18} />
                  <span>Academic</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("appearance")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                    activeTab === "appearance"
                      ? "bg-[#2541B2] text-white"
                      : darkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Moon size={18} />
                  <span>Appearance</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("report")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                    activeTab === "report"
                      ? "bg-[#2541B2] text-white"
                      : darkMode
                        ? "text-gray-200 hover:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <FileText size={18} />
                  <span>Report an Issue</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 text-red-500 hover:bg-red-50 hover:text-red-600 ${
                    darkMode ? "hover:bg-red-900/30" : ""
                  }`}
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className={`md:w-3/4 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-6`}>
          {/* Account & Security */}
          {activeTab === "account" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Account & Security</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Login Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Email Address
                      </label>
                      <div className="flex">
                        <div
                          className={`flex-grow px-3 py-2 border rounded-l-md ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}
                        >
                          {studentData.email}
                        </div>
                        <button className={`px-3 py-2 bg-[#2541B2] text-white rounded-r-md hover:bg-[#2541B2]/90`}>
                          <Mail size={18} />
                        </button>
                      </div>
                    </div>

                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Password
                      </label>
                      <div className="flex">
                        <input
                          type={showPassword ? "text" : "password"}
                          value="••••••••••••"
                          readOnly
                          className={`flex-grow px-3 py-2 border rounded-l-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                        />
                        <button
                          onClick={() => setShowPassword(!showPassword)}
                          className={`px-3 py-2 border-y border-r ${darkMode ? "bg-gray-600 border-gray-600" : "bg-gray-200 border-gray-300"} rounded-r-md`}
                        >
                          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                      <div className="mt-2">
                        <button className="text-[#2541B2] text-sm hover:underline">Change Password</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Two-Factor Authentication</h3>
                  <div
                    className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"} flex items-center justify-between`}
                  >
                    <div>
                      <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                        Enhance your account security
                      </p>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Add an extra layer of security to your account
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90">
                      Enable
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Connected Devices</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Current Device</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Chrome on Windows • Active now
                        </p>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Current</div>
                    </div>
                    <button className="text-[#2541B2] text-sm hover:underline">View All Devices</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Profile */}
          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>

              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/3 flex flex-col items-center">
                    <Image
                      src={studentData.profileImage || "/placeholder.svg"}
                      alt="Profile"
                      width={150}
                      height={150}
                      className="rounded-full border-4 border-[#2541B2]"
                    />
                    <button className="mt-4 px-4 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90">
                      Change Photo
                    </button>
                  </div>

                  <div className="sm:w-2/3 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label
                          className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                        />
                      </div>
                      <div>
                        <label
                          className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Student ID
                      </label>
                      <input
                        type="text"
                        defaultValue={studentData.studentId}
                        readOnly
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"} opacity-75`}
                      />
                      <p className="text-xs mt-1 text-gray-500">Student ID cannot be changed</p>
                    </div>

                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Program
                      </label>
                      <input
                        type="text"
                        defaultValue={studentData.program}
                        readOnly
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"} opacity-75`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Bio
                      </label>
                      <textarea
                        rows="3"
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                        placeholder="Tell us about yourself"
                      ></textarea>
                    </div>

                    <div className="flex justify-end">
                      <button className="px-4 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90 flex items-center gap-2">
                        <Save size={18} />
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeTab === "notifications" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Notification Preferences</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Assignment Reminders
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Get notified about upcoming assignments
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={emailNotifications}
                          onChange={() => setEmailNotifications(!emailNotifications)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Grade Updates</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Get notified when grades are posted
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={true} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Course Announcements
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Get notified about important course announcements
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={true} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Push Notifications</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Enable Push Notifications
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Receive notifications on your device
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={pushNotifications}
                          onChange={() => setPushNotifications(!pushNotifications)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>

                    {pushNotifications && (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                              Due Date Reminders
                            </p>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              Get reminded before assignments are due
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={true} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Messages</p>
                            <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                              Get notified when you receive new messages
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={true} className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                          </label>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Academic */}
          {activeTab === "academic" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Academic Settings</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Display Preferences</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Show GPA on Dashboard
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Display your current GPA on your dashboard
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={true} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Show Upcoming Assignments
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Display upcoming assignments on your dashboard
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={true} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Calendar Integration</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Sync with Google Calendar
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Automatically add academic events to your Google Calendar
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90">
                        Connect
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>
                          Sync with Apple Calendar
                        </p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Automatically add academic events to your Apple Calendar
                        </p>
                      </div>
                      <button className="px-4 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Study Preferences</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="mb-4">
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Preferred Study Time
                      </label>
                      <select
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                      >
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                        <option>Late Night</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}
                      >
                        Study Session Duration
                      </label>
                      <select
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                      >
                        <option>30 minutes</option>
                        <option>1 hour</option>
                        <option>1.5 hours</option>
                        <option>2 hours</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Appearance */}
          {activeTab === "appearance" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Appearance Settings</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Theme</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`font-medium ${darkMode ? "text-gray-200" : "text-gray-700"}`}>Dark Mode</p>
                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                          Switch between light and dark themes
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-500 peer-checked:bg-[#2541B2]"></div>
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Font Size</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      Adjust Text Size
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="3"
                      step="1"
                      defaultValue="2"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
                    />
                    <div className="flex justify-between mt-2 text-sm text-gray-500">
                      <span>Small</span>
                      <span>Medium</span>
                      <span>Large</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Accent Color</h3>
                  <div className={`p-4 rounded-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                    <div className="grid grid-cols-5 gap-4">
                      <div className="h-10 w-10 bg-[#2541B2] rounded-full cursor-pointer ring-2 ring-offset-2 ring-[#2541B2]"></div>
                      <div className="h-10 w-10 bg-purple-600 rounded-full cursor-pointer"></div>
                      <div className="h-10 w-10 bg-green-600 rounded-full cursor-pointer"></div>
                      <div className="h-10 w-10 bg-red-600 rounded-full cursor-pointer"></div>
                      <div className="h-10 w-10 bg-amber-500 rounded-full cursor-pointer"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Report */}
          {activeTab === "report" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Report an Issue</h2>

              <div className="space-y-6">
                <div
                  className={`p-4 rounded-md ${darkMode ? "bg-yellow-900/30" : "bg-yellow-50"} border ${darkMode ? "border-yellow-700" : "border-yellow-200"} flex items-start gap-3`}
                >
                  <AlertTriangle className={`h-5 w-5 ${darkMode ? "text-yellow-500" : "text-yellow-600"} mt-0.5`} />
                  <div>
                    <p className={`font-medium ${darkMode ? "text-yellow-500" : "text-yellow-700"}`}>
                      Need help with a technical issue?
                    </p>
                    <p className={`text-sm ${darkMode ? "text-yellow-400" : "text-yellow-600"}`}>
                      Our support team is here to help. Please provide as much detail as possible.
                    </p>
                  </div>
                </div>

                <div>
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Issue Type
                  </label>
                  <select
                    className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                  >
                    <option>Technical Problem</option>
                    <option>Account Issue</option>
                    <option>Course Content</option>
                    <option>Grading Issue</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Brief description of the issue"
                    className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                  />
                </div>

                <div>
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Description
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Please provide details about the issue you're experiencing..."
                    className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                  ></textarea>
                </div>

                <div>
                  <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    Attachments (Optional)
                  </label>
                  <div
                    className={`border-2 border-dashed ${darkMode ? "border-gray-600" : "border-gray-300"} rounded-md p-6 text-center`}
                  >
                    <div className="flex flex-col items-center">
                      <svg
                        className={`w-8 h-8 ${darkMode ? "text-gray-400" : "text-gray-500"} mb-2`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        ></path>
                      </svg>
                      <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                        Drag and drop files here, or click to select files
                      </p>
                      <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-400"} mt-1`}>
                        PNG, JPG, PDF up to 10MB
                      </p>
                      <button className="mt-4 px-4 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90">
                        Select Files
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-[#2541B2] text-white rounded-md hover:bg-[#2541B2]/90">
                    Submit Report
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentSettings;

