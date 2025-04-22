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
  CircleCheck
} from "lucide-react"
import { PasswordUpdate } from "@/serverSide/password_update_serverside_action"
import SendWhatsappCode from "@/serverSide/sendwhatsapp_serverside_action"
import {useParams} from 'next/navigation'
import LoadingScreen from "@/app/components/global/loading_animation"
import {fetchStudentAccountInfo} from '@/serverSide/fetch_account_info_serverside_action'
import { runCheckFunctions } from "@/serverSide/run_check_serverside_action"
import IncorrectMessage from "@/app/components/global/incorrect_message"


const StudentSettings = () => {
  const [activeTab, setActiveTab] = useState("account")
  const [showPassword, setShowPassword] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [accountInfo, setAccountInfo] = useState("")
  const [studentInfo, setStudentInfo] = useState({});
  const [changePassword, setChangePassword] = useState(false);
  const [values, setValues] = useState({
    OldPassword: "",
    NewPassword: ""
});
const [showConfirmationModal, setShowConfirmationModal] = useState(false);
const[maskedValue, setMaskedValue] = useState({});
const Parameter = useParams();
const studentAccountID = Parameter.id;
const [confirmInformation, setConfirmInformation] = useState("");
const [modalLoading, setModalLoadinig] = useState(false);
const [loadingAnimation, setLoadingAnimation] = useState(true);
const [successMessage, setSuccessMessage] = useState(false)


//Functions
  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  /*
  1. Find where password is coming from the backend(Automatically hashed)
  2. Find where password entered by user is coming from
  3. Compare hashed password with that of the entered password
  4. If equal, give user modal to fill out the  password change
  5. change password in the database
  */
  
  const handleSavePassword = () => {
    const compareEnteredPassword = async() => {
      console.log(values.OldPassword, accountInfo.password, "Password Info")
      const passwordResult = await runCheckFunctions(values.OldPassword, accountInfo.password);
      console.log(passwordResult)
      if(passwordResult.success === true){
        return true;
      }
      return false
    }

    if (compareEnteredPassword() === true) {
      setShowConfirmationModal(true);
    } else {
      <IncorrectMessage error_name="Password"/>
    }
  }

  useEffect(() => {
    if (showConfirmationModal) {
      // Function to mask phone number
      function maskPhoneNumber(phoneNumber) {
        if (phoneNumber.length !== 10) {
          throw new Error("Phone number must be 10 digits long");
        }
        return "XXXXXXXX" + phoneNumber.slice(-2);
      }

      // Function to mask email
      function maskEmail(email) {
        if (!email || typeof email !== 'string') {
          throw new Error("Invalid email format");
        }
      
        const atIndex = email.indexOf('@');
        if (atIndex === -1) {
          throw new Error("Invalid email format");
        }
      
        const localPart = email.slice(0, atIndex); // Local part before the '@'
        const domain = email.slice(atIndex); // Domain part (e.g., @gmail.com or @yahoo.com)
      
        // Check if the domain is either @gmail.com or @yahoo.com
        if (domain !== '@gmail.com' && domain !== '@yahoo.com') {
          throw new Error("Unsupported email domain");
        }
      
        // Mask the local part, preserving the first 2 characters
        const maskedLocalPart = localPart.length > 2 
          ? localPart.slice(0, 2) + 'X'.repeat(localPart.length - 2) 
          : localPart; // If local part is 2 characters or less, don't mask
      
        return maskedLocalPart + domain; // Combine masked local part with domain
      }

      const questions = {
        mobileNumber: studentInfo.mobileNumber,
        personalEmail: studentInfo.personalEmail
      };

      const randomAccountQuestion = () => {
        // Get the values of the questions object
        const values = Object.values(questions);
        
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * values.length);
        
        // Pick a random value
        const randomValue = values[randomIndex];

        if (randomIndex === 0) {
          return {
            name: "Phone Number",
            value: maskPhoneNumber(randomValue)
          }
        } else {
          return {
            name: "Email",
            value: maskEmail(randomValue)
          }
        }
      };

      // Compute the masked value
      const newMaskedValue = randomAccountQuestion();
      setMaskedValue(newMaskedValue); // Set the masked value in state
      console.log(newMaskedValue); // Log the masked value immediately after computing it
    }
  }, [showConfirmationModal, studentInfo]);


  
  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const result = await fetchStudentAccountInfo(studentAccountID);
        if (result.success) {
          setAccountInfo(result.data[0]);
          return true; // Indicate success
        }
      } catch (err) {
        console.error("Fetching account info error", err);
      }
      return false; // Indicate failure
    };
  
    const fetchStudentData = async () => {
      try {
        const response = await FetchUserServerSideAction(Parameter.id);
        if (response.success === true) {
          setStudentInfo(response.data[0]);
          return true; // Indicate success
        } else {
          alert("Failed to load data");
        }
      } catch (err) {
        console.error("Error fetching student data:", err);
        alert("Failed to load student data, settings page");
      }
      return false; // Indicate failure
    };
  
    const fetchData = async () => {
      const accountInfoSuccess = await fetchAccountInfo();
      const studentDataSuccess = await fetchStudentData();
  
      // Set loading animation to false only if both fetches were successful
      if (accountInfoSuccess && studentDataSuccess) {
        setLoadingAnimation(false);
      }
    };
  
    fetchData(); // Call the fetchData function
  }, [studentAccountID]);
  
  if(loadingAnimation){
    return(
      <div className="absolute top-0 h-screen w-screen">
        <LoadingScreen/>
      </div>
    )
  }
  

  const handleLogout = () => {
    console.log("Logging out...")
  }


  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const Send = () => {
    const isPhoneNumber = maskedValue.name === "Phone Number";
    const confirmationValue = isPhoneNumber ? studentInfo.mobileNumber : studentInfo.personalEmail;
  
    if (confirmInformation !== confirmationValue) {
      console.log("Does not match");
      return; // Early return if the confirmation does not match
    }
  
    setModalLoadinig(true);
    setShowConfirmationModal(false);
  
    const updatePassword = async () => {
      try {
        const password_update_response = await PasswordUpdate(values.NewPassword, studentAccountID);
        if (password_update_response.success) {
          setModalLoadinig(false);
          setSuccessMessage(true)
          const timer = setTimeout(() => {
            setSuccessMessage(false);
          }, 2000);
      
          // Cleanup function to clear the timeout
          return () => clearTimeout(timer);
        } else {
          console.error("Password update failed");
          setModalLoadinig(false); // Ensure loading state is reset
        }
      } catch (err) {
        console.error("Error updating password", err); // Log the actual error
        setModalLoadinig(false); // Ensure loading state is reset
      }
    };
  
    updatePassword();
  };

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

    {successMessage && (
      <div
      className="fixed inset-0 flex items-center justify-center bg-[#00000096] z-50">
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
      >
        <h2 className="text-xl font-semibold mb-4">Password Changed Successfully</h2>
        <CircleCheck className="text-[blue] w-12 h-12 font-bold animate-bounce"/>
      </div>
      </div>
    )}

      {modalLoading && (
            <div
            className="fixed inset-0 flex items-center justify-center bg-[#00000096] z-50">
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
            >
              <h2 className="text-xl font-semibold mb-4">Processing Request</h2>
              <div className="animate-spin h-12 w-12 rounded-full border-t-4 border-blue-900"></div>
            </div>
            </div>
      )}

      {showConfirmationModal && (
            <div
            className="fixed inset-0 flex items-center justify-center bg-[#00000096] z-50"
            onClick={() => { setShowConfirmationModal(false) }}
            >
            <div
              className="bg-white p-6 rounded-lg shadow-lg w-96"
              onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
            >
              <h2 className="text-xl font-semibold mb-4">Confirm the {maskedValue.name}</h2>
              <p className="mb-4">Retype: <span className="text-[#2541B2] font-bold">{maskedValue.value}</span></p>
              <input type="text"
              name = "confirm_info"
              onChange={(e) => {setConfirmInformation(e.target.value)}}
              className="block outline-1 rounded-sm mb-2 py-2 pl-2 font-semibold outline-[#2541B2]" />
              <button
                onClick={Send}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-semibold"
              >
                Submit
              </button>
            </div>
          </div>
          )
          }
    </div>
  )
}

export default StudentSettings;