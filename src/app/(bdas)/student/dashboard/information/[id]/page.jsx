"use client"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { FetchUserServerSideAction } from "@/serverSide/fetch_user_serverside_action"
import LoadingScreen from "@/app/components/global/loading_animation"
import Image from "next/image"
import { Mail, Phone, MapPin, User, Book } from "lucide-react"

const Information = () => {
  const param = useParams()
  const Id = param.id
  const [globalLoading, setGlobalLoading] = useState(true)
  const [studentData, setStudentData] = useState({})
  const [error, setError] = useState({})

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        const studentInfoFetched = await FetchUserServerSideAction(Id)
        if (studentInfoFetched && studentInfoFetched.success) {
          setStudentData(studentInfoFetched.data[0])
          setGlobalLoading(false)
          console.log(studentData)
        } else {
          setTimeout(() => {
            setError({
              ["Failed"]:
                "Failed to retrieve student information, refresh page to try again. If problem persist, contact developer",
            })
          }, 2000)
        }
      } catch (err) {
        console.error("Fetching Student Information Error: ", err)
      }
    }

    fetchStudentInfo()
  }, [Id])

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "N/A"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Safe access to student data properties
  const safeGet = (obj, path, defaultValue = "N/A") => {
    try {
      const result = path.split(".").reduce((o, p) => o[p], obj)
      if (result === null || result === undefined || result === "") return defaultValue
      return result
    } catch (e) {
      return defaultValue
    }
  }

  if (globalLoading) {
    return (
      <div className="absolute top-0 h-screen w-screen">
        <LoadingScreen />
      </div>
    )
  }

  // Check if there's an error
  if (Object.keys(error).length > 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative max-w-md">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{Object.values(error)[0]}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      {/* Header with profile picture and name */}
      <div className="bg-white shadow-lg p-4 mb-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f5f5f5] shadow-lg flex flex-col md:flex-row rounded-lg p-4 md:space-x-5 space-y-4 md:space-y-0">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/ProfilePic.jpg"
                alt="Profile Picture of Student"
                height={100}
                width={100}
                className="rounded-full border-[#2541B2] border-4 h-[120px] w-[120px] md:h-[150px] md:w-[150px] object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-center md:text-left">
                <h1 className="text-[#2541B2] font-bold text-xl md:text-xl">
                  Name:{" "}
                  <span className="text-lg md:text-2xl font-bold text-black">
                    {safeGet(studentData, "firstName", "")}{" "}
                    {safeGet(studentData, "middleName", "")}{" "}
                    {safeGet(studentData, "lastName", "")}
                  </span>
                </h1>
                <h1 className="font-bold text-[#2541B2] text-lg md:text-xl mt-2">
                  Index Number: <span className="text-black font-bold text-2xl">{safeGet(studentData, "indexNo")}</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Academic Information */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="bg-[#2541B2] px-6 py-4">
            <h2 className="text-white text-xl font-semibold flex items-center">
              <Book className="mr-2" size={20} />
              Academic Information
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Program</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "program")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Current Level</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "currentLevel")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Entry Level</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "entryLevel")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Entry Mode</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "entryMode")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Date of Admission</h3>
                <p className="text-gray-900 font-medium mt-1">{formatDate(safeGet(studentData, "dateOfAdmission"))}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Expected Completion</h3>
                <p className="text-gray-900 font-medium mt-1">{formatDate(safeGet(studentData, "dateOfCompletion"))}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Hall of Residence</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "hall")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <div className="bg-[#2541B2] px-6 py-4">
            <h2 className="text-white text-xl font-semibold flex items-center">
              <User className="mr-2" size={20} />
              Personal Information
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Gender</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "gender")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Date of Birth</h3>
                <p className="text-gray-900 font-medium mt-1">{formatDate(safeGet(studentData, "dateOfBirth"))}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Place of Birth</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "placeOfBirth")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">City of Birth</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "cityOfBirth")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Nationality</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "nationality")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Hometown</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "hometown")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Marital Status</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "maritalStatus")}</p>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">Religion</h3>
                <p className="text-gray-900 font-medium mt-1">{safeGet(studentData, "religion")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-[#2541B2] px-6 py-4">
            <h2 className="text-white text-xl font-semibold flex items-center">
              <Phone className="mr-2" size={20} />
              Contact Information
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-gray-500 text-sm font-medium flex items-center">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  Address
                </h3>
                <p className="text-gray-900 font-medium mt-1">
                  {safeGet(studentData, "addressLine")}
                  {safeGet(studentData, "addressLine2") !== "N/A" && <>, {safeGet(studentData, "addressLine2")}</>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information

