"use client"
import { useEffect, useState } from "react"
import "./students.css"
import LoadingScreen from "@/app/components/global/loading_animation"
import SuccessMessage from "@/app/components/global/success_message"
import { SignUpStudentServerAction } from "@/serverSide/student"
import { useRouter } from "next/navigation" // Fixed import from next/navigation

function RenderForm({ section, formData, handleChange, errors }) {
  return (
    <div>
      {section === 1 && (
        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:px-32 lg:py-10 px-5 grid-cols-1 mt-10">
          <div>
            <label htmlFor="indexNo" className="block text-sm text-gray-600 mb-1">
              Index No
            </label>
            <input
              type="text"
              id="indexNo"
              name="indexNo"
              value={formData.indexNo}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.indexNo && <h1 className="generalError">{errors.indexNo}</h1>}
          </div>
          <div>
            <label htmlFor="entryMode" className="block text-sm text-gray-600 mb-1">
              Entry Mode
            </label>
            <select
              id="entryMode"
              name="entryMode"
              value={formData.entryMode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Entry Mode</option>
              <option value="direct">Direct Entry</option>
              <option value="matured">Matured Entry</option>
            </select>
            {errors.entryMode && <h1 className="generalError">{errors.entryMode}</h1>}
          </div>
          <div>
            <label htmlFor="entryLevel" className="block text-sm text-gray-600 mb-1">
              Entry Level
            </label>
            <select
              id="entryLevel"
              name="entryLevel"
              value={formData.entryLevel}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Entry Level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
            {errors.entryLevel && <h1 className="generalError">{errors.entryLevel}</h1>}
          </div>
          <div>
            <label htmlFor="currentLevel" className="block text-sm text-gray-600 mb-1">
              Current Level
            </label>
            <select
              id="currentLevel"
              name="currentLevel"
              value={formData.currentLevel}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Current Level</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
            {errors.currentLevel && <h1 className="generalError">{errors.currentLevel}</h1>}
          </div>
          <div>
            <label htmlFor="program" className="block text-sm text-gray-600 mb-1">
              Program
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Program</option>
              <option value="B-TECH Biomedical Engineering">B-TECH Biomedical Engineering</option>
              <option value="HND Biomedical Engineering">HND Biomedical Engineering</option>
            </select>
            {errors.program && <h1 className="generalError">{errors.program}</h1>}
          </div>
          <div>
            <label htmlFor="dateOfAdmission" className="block text-sm text-gray-600 mb-1">
              Date of Admission
            </label>
            <input
              type="date"
              id="dateOfAdmission"
              name="dateOfAdmission"
              value={formData.dateOfAdmission}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.dateOfAdmission && <h1 className="generalError">{errors.dateOfAdmission}</h1>}
          </div>
          <div>
            <label htmlFor="dateOfCompletion" className="block text-sm text-gray-600 mb-1">
              Date of Completion
            </label>
            <input
              type="date"
              id="dateOfCompletion"
              name="dateOfCompletion"
              value={formData.dateOfCompletion}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.dateOfCompletion && <h1 className="generalError">{errors.dateOfCompletion}</h1>}
          </div>
          <div>
            <label htmlFor="hall" className="block text-sm text-gray-600 mb-1">
              Residence-Type
            </label>
            <select
              id="hall"
              name="hall"
              value={formData.hall}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Resident-Type</option>
              <option value="hostel">Hostel</option>
              <option value="apartment">Apartment</option>
            </select>
            {errors.hall && <h1 className="generalError">{errors.hall}</h1>}
          </div>
        </div>
      )}
      {section === 2 && (
        <div className="lg:grid lg:grid-cols-2 gap-4 lg:px-32 lg:py-10 px-5 grid grid-col-1 mt-10">
          <div>
            <label htmlFor="prefix" className="block text-sm text-gray-600 mb-1">
              Prefix
            </label>
            <select
              id="prefix"
              name="prefix"
              value={formData.prefix}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Prefix</option>
              <option value="mr">Mr</option>
              <option value="ms">Ms</option>
              <option value="mrs">Mrs</option>
            </select>
            {errors.prefix && <h1 className="generalError">{errors.prefix}</h1>}
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.firstName && <h1 className="generalError">{errors.firstName}</h1>}
          </div>
          <div>
            <label htmlFor="middleName" className="block text-sm text-gray-600 mb-1">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.lastName && <h1 className="generalError">{errors.lastName}</h1>}
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm text-gray-600 mb-1">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <h1 className="generalError">{errors.gender}</h1>}
          </div>
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm text-gray-600 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.dateOfBirth && <h1 className="generalError">{errors.dateOfBirth}</h1>}
          </div>
          <div>
            <label htmlFor="placeOfBirth" className="block text-sm text-gray-600 mb-1">
              Place of Birth
            </label>
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.placeOfBirth && <h1 className="generalError">{errors.placeOfBirth}</h1>}
          </div>
          <div>
            <label htmlFor="nationality" className="block text-sm text-gray-600 mb-1">
              Nationality
            </label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.nationality && <h1 className="generalError">{errors.nationality}</h1>}
          </div>
          <div>
            <label htmlFor="hometown" className="block text-sm text-gray-600 mb-1">
              Hometown
            </label>
            <input
              type="text"
              id="hometown"
              name="hometown"
              value={formData.hometown}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.hometown && <h1 className="generalError">{errors.hometown}</h1>}
          </div>
          <div>
            <label htmlFor="cityOfBirth" className="block text-sm text-gray-600 mb-1">
              City of Birth
            </label>
            <input
              type="text"
              id="cityOfBirth"
              name="cityOfBirth"
              value={formData.cityOfBirth}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.cityOfBirth && <h1 className="generalError">{errors.cityOfBirth}</h1>}
          </div>
          <div>
            <label htmlFor="personalEmail" className="block text-sm text-gray-600 mb-1">
              Perosnal Email
            </label>
            <input
              type="email"
              id="personalEmail"
              name="personalEmail"
              value={formData.personalEmail}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.personalEmail && <h1 className="generalError">{errors.personalEmail}</h1>}
          </div>
          <div>
            <label htmlFor="mobileNumber" className="block text-sm text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.mobileNumber && <h1 className="generalError">{errors.mobileNumber}</h1>}
          </div>
          <div>
            <label htmlFor="institutionalEmail" className="block text-sm text-gray-600 mb-1">
              Institutional Email
            </label>
            <input
              type="email"
              id="institutionalEmail"
              name="institutionalEmail"
              value={formData.institutionalEmail}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.institutionalEmail && <h1 className="generalError">{errors.institutionalEmail}</h1>}
          </div>
          <div>
            <label htmlFor="addressLine" className="block text-sm text-gray-600 mb-1">
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine"
              name="addressLine"
              value={formData.addressLine}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            {errors.addressLine && <h1 className="generalError">{errors.addressLine}</h1>}
          </div>
          <div>
            <label htmlFor="addressLine2" className="block text-sm text-gray-600 mb-1">
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              value={formData.addressLine2}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.addressLine2 && <h1 className="generalError">{errors.addressLine2}</h1>}
          </div>
          <div>
            <label htmlFor="maritalStatus" className="block text-sm text-gray-600 mb-1">
              Marital Status
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Marital Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
            {errors.maritalStatus && <h1 className="generalError">{errors.maritalStatus}</h1>}
          </div>
          <div>
            <label htmlFor="religion" className="block text-sm text-gray-600 mb-1">
              Religion
            </label>
            <select
              id="religion"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Religion</option>
              <option value="christianity">Christianity</option>
              <option value="islamic">Islamic</option>
              <option value="traditional">Traditional</option>
            </select>
            {errors.religion && <h1 className="generalError">{errors.religion}</h1>}
          </div>
        </div>
      )}
    </div>
  )
}

function SignUpStudent() {
  // Fixed: Import from next/navigation instead of next/router
  const router = useRouter()
  const [currSection, setCurrSection] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState({
    indexNo: "",
    entryMode: "",
    entryLevel: "",
    currentLevel: "",
    program: "",
    dateOfAdmission: "",
    dateOfCompletion: "",
    hall: "",
    prefix: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    placeOfBirth: "",
    nationality: "",
    hometown: "",
    cityOfBirth: "",
    mobileNumber: "",
    institutionalEmail: "",
    personalEmail: "",
    addressLine: "",
    addressLine2: "",
    maritalStatus: "",
    religion: "",
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Fixed: Improved validation function
  const validateForm = () => {
    const newErrors = {}
    let isValid = true

    // Check required fields (except middleName and addressLine2)
    Object.keys(formData).forEach((key) => {
      if (key !== "middleName" && key !== "addressLine2" && formData[key] === "") {
        newErrors[key] = "Field cannot be empty"
        isValid = false
      }
    })

    // Compare entry level and current level
    if (formData.entryLevel && formData.currentLevel) {
      const entryLevelNum = Number.parseInt(formData.entryLevel)
      const currentLevelNum = Number.parseInt(formData.currentLevel)

      if (entryLevelNum > currentLevelNum) {
        newErrors.entryLevel = "Entry Level cannot be more than current level"
        isValid = false
      }
    }

    // Validate mobile number (10 digits)
    if (formData.mobileNumber && !/^\d{10}$/.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must be 10 digits"
      isValid = false
    }

    // Validate institutional email
    if (formData.institutionalEmail && !formData.institutionalEmail.endsWith("@ktu.edu.gh")) {
      newErrors.institutionalEmail = "Email must end with @ktu.edu.gh"
      isValid = false
    }

    const endingFormat = {
      google: "@gmail.com",
      yahoo: "@yahoo.com"
    }
    if(formData.personalEmail && !formData.personalEmail.endsWith(Object.keys(endingFormat))){
      newErrors.personalEmail = "Must follow Email format";
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // Clear errors after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrors({})
    }, 3000)

    return () => clearTimeout(timer)
  }, [errors])

  // Fixed: Added validation before submission
  const handleSubmit = async () => {
    // Validate form before submission
    if (!validateForm()) {
      return // Stop if validation fails
    }

    setIsLoading(true)

    try {
      const response = await SignUpStudentServerAction(formData)

      if (response.success === true) {
        setShowSuccess(true)
        // Reset form after successful submission
        setFormData({
          indexNo: "",
          entryMode: "",
          entryLevel: "",
          currentLevel: "",
          program: "",
          dateOfAdmission: "",
          dateOfCompletion: "",
          hall: "",
          prefix: "",
          firstName: "",
          middleName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          placeOfBirth: "",
          nationality: "",
          hometown: "",
          cityOfBirth: "",
          mobileNumber: "",
          institutionalEmail: "",
          personalEmail: "",
          addressLine: "",
          addressLine2: "",
          maritalStatus: "",
          religion: "",
        })

        // Navigate to home page after success
        setTimeout(() => {
          router.push("/")
        }, 3000)
      } else {
        alert(response.data || "An error occurred during submission")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred during submission. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Handle loading state
  useEffect(() => {
    if (isLoading) {
      const loadTimer = setTimeout(() => {
        setIsLoading(false)
      }, 3000)

      return () => clearTimeout(loadTimer)
    }
  }, [isLoading])

  // Handle success message
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [showSuccess])

  // Fixed: Added validation when moving to next section
  const handleNext = () => {
    if (currSection === 1) {
      // Validate only the fields in the first section
      const firstSectionFields = [
        "indexNo",
        "entryMode",
        "entryLevel",
        "currentLevel",
        "program",
        "dateOfAdmission",
        "dateOfCompletion",
        "hall",
      ]

      const newErrors = {}
      let isValid = true

      firstSectionFields.forEach((field) => {
        if (formData[field] === "") {
          newErrors[field] = "Field cannot be empty"
          isValid = false
        }
      })

      // Compare entry level and current level
      if (formData.entryLevel && formData.currentLevel) {
        const entryLevelNum = Number.parseInt(formData.entryLevel)
        const currentLevelNum = Number.parseInt(formData.currentLevel)

        if (entryLevelNum > currentLevelNum) {
          newErrors.entryLevel = "Entry Level cannot be more than current level"
          isValid = false
        }
      }

      setErrors(newErrors)

      if (isValid) {
        setCurrSection(2)
      }
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  if (showSuccess) {
    return <SuccessMessage />
  }

  return (
    <div className="main-signup-student-container">
      <div className="flex justify-center pt-6 pb-6 border-b border-gray-200 bg-gradient-to-r from-blue-900 to-blue-600">
        <div className="flex items-center justify-center gap-16 max-w-xl w-full">
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-medium mb-1 border"
              style={{
                backgroundColor: currSection === 1 ? "#3b5bfd" : "white",
                color: currSection === 1 ? "white" : "gray",
              }}
            >
              1
            </div>
            <span className="text-sm flex flex-col font-semibold text-white">Academic Information</span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-medium mb-1 border"
              style={{
                backgroundColor: currSection === 2 ? "#3b5bfd" : "white",
                color: currSection === 2 ? "white" : "gray",
              }}
            >
              2
            </div>
            <span className="text-sm flex flex-col font-semibold text-white">Personal Information</span>
          </div>
        </div>
      </div>
      <div className="h-full">
        <RenderForm section={currSection} formData={formData} handleChange={handleChange} errors={errors} />
      </div>
      <div className="flex flex-row space-x-7 mt-10 lg:px-60 lg:py-5 px-20 justify-center">
        <button
          onClick={() => {
            setCurrSection((prevSection) => (prevSection !== 1 ? prevSection - 1 : 1))
          }}
          className={`w-[20em] ${currSection === 1 ? "bg-gray-400" : "bg-[#3b5bfd]"} text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
          disabled={currSection === 1}
        >
          Previous
        </button>
        {currSection === 2 ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 w-80 py-2 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-[20em] bg-[#3b5bfd] text-white py-3 px-4 rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}

export default SignUpStudent

