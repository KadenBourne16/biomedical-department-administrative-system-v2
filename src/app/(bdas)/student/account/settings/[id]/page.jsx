"use client"
import { useEffect, useState } from "react"
import { FetchUserServerSideAction } from "@/serverSide/fetch_user_serverside_action"
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
import { PasswordUpdate } from "@/serverSide/password_update_serverside_action"
import SendWhatsappCode from "@/serverSide/sendwhatsapp_serverside_action"
import {useParams} from 'next/navigation'

const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState("account")
  const [showPassword, setShowPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [accountPassword, setAccountPassword] = useState("BiomedStudent")
  const [studentInfo, setStudentInfo] = useState({});
  const [changePassword, setChangePassword] = useState(false);
  const [values, setValues] = useState({
    OldPassword: "",
    NewPassword: ""
});
const [showConfirmationModal, setShowConfirmationModal] = useState(false);
const Parameter = useParams();
const studentAccountID = Parameter.id;

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSavePassword = () => {
    if (values.OldPassword === accountPassword) { // Replace with actual password check
      setShowConfirmationModal(true);
    } else {
      alert("Old password is incorrect.");
    }
  }

  useEffect(() => {
    const fetchStudentData = async() => {
      try {
        const response = await FetchUserServerSideAction(Parameter.id)
        if(response.success === true) {
          setStudentInfo(response.data[0])
        }else{
          alert("Failed to load data")
        }
      } catch (err) {
        console.error("Error fetching student data:", err)
        alert("Failed to load student data, settings page")
      }
    }
    fetchStudentData()
  }, [studentAccountID]);

  const handleLogout = () => {
    console.log("Logging out...")
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const Send = () => {
    const GenerateCode = async() => {
      try{
        const passwordPosting = await SendWhatsappCode(studentInfo.mobileNumber); // Pass the new password
        if (passwordPosting.success) {
          setShowConfirmationModal(false);
          setValues({ OldPassword: "", NewPassword: "" }); // Reset password fields
        } else {
          alert("Failed to update password.");
        }
      }catch(err){
        console.error( "Browser Submission Error",err)
      }
    }

    GenerateCode();
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      <header className={`${darkMode ? "bg-gray-800" : "bg-[#2541B2]"} text-white p-4 flex items-center justify-between`}>
        <Link href={`/student/dashboard/${Parameter.id}`} className="flex items-center space-x-2 text-white hover:text-gray-200">
          <ChevronLeft size={20} />
          <span>Back to Dashboard</span>
        </Link>
        <h1 className="text-xl font-bold">Settings</h1>
        <div className="w-24"></div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        <div className={`md:w-1/4 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-4 h-fit`}>
          <div className="flex flex-col items-center mb-6 p-4">
            <div className="relative">
              <Image
                src={"/ProfilePic.jpg"}
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full border-4 border-[#2541B2]"
              />
            </div>
            <h2 className="mt-2 font-bold text-lg">{studentInfo.firstName}</h2>
            <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-500"}`}>{studentInfo.program}</p>
            <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{studentInfo.indexNo}</p>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActiveTab("account")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === "account" ? "bg-[#2541B2] text-white" : darkMode ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <Shield size={18} />
                  <span>Account & Security</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${activeTab === "profile" ? "bg-[#2541B2] text-white" : darkMode ? "text-gray-200 hover:bg-gray-700" : "text-gray-700 hover:bg-gray-100"}`}
                >
                  <User  size={18} />
                  <span>Profile</span>
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 text-red-500 hover:bg-red-50 hover:text-red-600 ${darkMode ? "hover:bg-red-900/30" : ""}`}
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className={`md:w-3/4 ${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg shadow-md p-6`}>
          {activeTab === "account" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Account & Security</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Login Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Email Address
                      </label>
                      <div className="flex">
                        <div className={`flex-grow px-3 py-2 border rounded-l-md ${darkMode ? "bg-gray-700 border-gray-600" : "bg-gray-50 border-gray-300"}`}>
                          {studentInfo.institutionalEmail}
                        </div>
                        <button className={`px-3 py-2 bg-[#2541B2] text-white rounded-r-md hover:bg-[#2541B2]/90`}>
                          <Mail size={18} />
                        </button>
                      </div>
                    </div>

                    <div>
                      {changePassword === false ? (
                        <div>
                          <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Password
                          </label>
                          <div className="flex">
                            <input
                              type={showPassword ? "text" : "password"}
                              value="" // Read-only, so no value needed
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
                        </div>
                      ) : (
                        <div className="flex flex-col space-y-2">
                          <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            Old Password
                          </label>
                          <div className="flex">
                            <input
                              name="OldPassword"
                              type={showPassword ? "text" : "password"}
                              value={values.OldPassword} // Controlled input
                              onChange={handleChange}
                              placeholder="Enter your old password"
                              className={`flex-grow px-3 py-2 border rounded-l-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                            />
                            <button
                              onClick={() => setShowPassword(!showPassword)}
                              className={`px-3 py-2 border-y border-r ${darkMode ? "bg-gray-600 border-gray-600" : "bg-gray-200 border-gray-300"} rounded-r-md`}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>

                          <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                            New Password
                          </label>
                          <div className="flex">
                            <input
                              name="NewPassword"
                              type={showPassword ? "text" : "password"}
                              value={values.NewPassword} // Controlled input
                              onChange={handleChange}
                              placeholder="Enter New Password"
                              className={`flex-grow px-3 py-2 border rounded-l-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                            />
                            <button
                              onClick={() => setShowPassword(!showPassword)}
                              className={`px-3 py-2 border-y border-r ${darkMode ? "bg-gray-600 border-gray-600" : "bg-gray-200 border-gray-300"} rounded-r-md`}
                            >
                              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                          </div>
                        </div>
                      )}
                      <div className="mt-2">
                        {changePassword === false ? (
                          <button className="text-[#2541B2] text-sm hover:underline" onClick={() => { setChangePassword(true) }}>Change Password</button>
                        ) : (
                          <button className="bg-[#2541B2] text-white p-3 font-semibold rounded-md" onClick={handleSavePassword}>
                            Save Password
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "profile" && (
            <div>
              <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="sm:w-1/3 flex flex-col items-center">
                    <Image
                      src={"/ProfilePic.jpg"}
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
                        <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue={studentInfo.firstName}
                          readOnly
                          className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                        />
                      </div>
                      <div>
                        <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue={studentInfo.lastName}
                          readOnly
                          className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"}`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Student ID
                      </label>
                      <input
                        type="text"
                        defaultValue={studentInfo.indexNo}
                        readOnly
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"} opacity-75`}
                      />
                      <p className="text-xs mt-1 text-gray-500">Student ID cannot be changed</p>
                    </div>

                    <div>
                      <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                        Program
                      </label>
                      <input
                        type="text"
                        defaultValue={studentInfo.program}
                        readOnly
                        className={`w-full px-3 py-2 border rounded-md ${darkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300"} opacity-75`}
                      />
                    </div>

                    <div>
                      <label className={`block mb-2 text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
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
                        Submit Picture/Bio Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {showConfirmationModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-[#00000096] z-50"
          onClick={() => { setShowConfirmationModal(false) }}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
          >
            <h2 className="text-xl font-semibold mb-4">Confirm Password Change</h2>
            <p className="mb-4">Code Sent to Whatsapp {studentInfo.mobileNumber}</p>
            <button
              onClick={Send}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentSettings;