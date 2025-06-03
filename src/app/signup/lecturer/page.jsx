"use client"
import { useEffect, useState } from "react"
import { Plus, Minus, User, GraduationCap, BookOpen, CheckCircle } from 'lucide-react'
import { SignUpLecturer } from "@/server/sign_up_lecturer"
import { useRouter } from "next/navigation"

const Courses = ({ index, handleChange }) => {
  return (
    <div className="space-y-2 p-4 bg-gray-50 rounded-lg border">
      <label htmlFor={`course${index}`} className="block text-sm font-semibold text-gray-700">
        Course {index + 1}
      </label>
      <input
        type="text"
        id={`course${index}`}
        name={`course${index}`}
        placeholder="Enter course taught before/is teaching currently"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
        onChange={(e) => handleChange(e, index)}
      />
    </div>
  )
}

const LecturerSignUpForm = ({
  section,
  addCourseComponent,
  courseArray,
  deleteCourseComponent,
  lecturerData,
  handleChange,
}) => {
  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2"

  switch (section) {
    case 1:
      return (
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Personal Details</h3>
              </div>
              
              <div>
                <label htmlFor="Firstname" className={labelClasses}>
                  First Name *
                </label>
                <input
                  type="text"
                  id="Firstname"
                  value={lecturerData.Firstname}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your first name"
                />
              </div>

              <div>
                <label htmlFor="MiddleName" className={labelClasses}>
                  Middle Name
                </label>
                <input
                  type="text"
                  id="MiddleName"
                  value={lecturerData.MiddleName}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your middle name"
                />
              </div>

              <div>
                <label htmlFor="Lastname" className={labelClasses}>
                  Last Name *
                </label>
                <input
                  type="text"
                  id="Lastname"
                  value={lecturerData.Lastname}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your last name"
                />
              </div>

              <div>
                <label htmlFor="Email" className={labelClasses}>
                  Email *
                </label>
                <input
                  type="email"
                  id="Email"
                  value={lecturerData.Email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="InstitutionalEmail" className={labelClasses}>
                  Institutional Email *
                </label>
                <input
                  type="email"
                  id="InstitutionalEmail"
                  value={lecturerData.InstitutionalEmail}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your institutional email"
                />
              </div>

              <div>
                <label htmlFor="DateOfBirth" className={labelClasses}>
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="DateOfBirth"
                  value={lecturerData.DateOfBirth}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="Gender" className={labelClasses}>
                  Gender *
                </label>
                <select
                  id="Gender"
                  value={lecturerData.Gender}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Qualifications</h3>
              </div>

              <div>
                <label htmlFor="QualificationType" className={labelClasses}>
                  Qualification
                </label>
                <select
                  id="QualificationType"
                  value={lecturerData.QualificationType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Qualification</option>
                  <option value="masters">Masters</option>
                  <option value="phd">PHD</option>
                </select>
              </div>

              <div>
                <label htmlFor="YearOfStudy" className={labelClasses}>
                  Year Of Study
                </label>
                <input
                  type="text"
                  id="YearOfStudy"
                  value={lecturerData.YearOfStudy}
                  onChange={handleChange}
                  placeholder="Enter Year e.g 1998"
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="YearOfCompletion" className={labelClasses}>
                  Year of Completion
                </label>
                <select
                  id="YearOfCompletion"
                  value={lecturerData.YearOfCompletion}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select Year Of Completion</option>
                  {Array.from({ length: 30 }, (_, i) => {
                    const year = new Date().getFullYear() - i
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    )
                  })}
                </select>
              </div>

              <div>
                <label htmlFor="ProfessionalQualification" className={labelClasses}>
                  Professional Qualification
                </label>
                <input
                  type="text"
                  id="ProfessionalQualification"
                  value={lecturerData.ProfessionalQualification}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter professional qualification"
                />
              </div>

              <div>
                <label htmlFor="ProfessionalAffiliation" className={labelClasses}>
                  Professional Affiliation
                </label>
                <input
                  type="text"
                  id="ProfessionalAffiliation"
                  value={lecturerData.ProfessionalAffiliation}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter professional affiliation"
                />
              </div>
            </div>
          </div>
        </div>
      )

    case 2:
      return (
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Education & Role</h3>
              </div>

              <div>
                <label htmlFor="EducationLevel" className={labelClasses}>
                  Educational Level
                </label>
                <input
                  type="text"
                  id="EducationLevel"
                  value={lecturerData.EducationLevel}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter education level"
                />
              </div>

              <div>
                <label htmlFor="Institution" className={labelClasses}>
                  Institution
                </label>
                <input
                  type="text"
                  id="Institution"
                  value={lecturerData.Institution}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter institution name"
                />
              </div>

              <div>
                <label htmlFor="Roles" className={labelClasses}>
                  Role
                </label>
                <input
                  type="text"
                  placeholder="e.g Assistant Researcher"
                  id="Roles"
                  value={lecturerData.Roles}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>

              <div>
                <label htmlFor="Duties" className={labelClasses}>
                  Duty
                </label>
                <input
                  type="text"
                  id="Duties"
                  value={lecturerData.Duties}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter your duties"
                />
              </div>

              <div>
                <label htmlFor="ResearchAreas" className={labelClasses}>
                  Research Areas
                </label>
                <input
                  type="text"
                  placeholder="e.g BioMachinery"
                  id="ResearchAreas"
                  value={lecturerData.ResearchAreas}
                  onChange={handleChange}
                  className={inputClasses}
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Research Information</h3>
              </div>

              <div>
                <label htmlFor="CurrentResearchArea" className={labelClasses}>
                  Current Research Area
                </label>
                <input
                  type="text"
                  id="CurrentResearchArea"
                  value={lecturerData.CurrentResearchArea}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter current research area"
                />
              </div>

              <div>
                <label htmlFor="ResearchCollaborations" className={labelClasses}>
                  Research Collaborations
                </label>
                <input
                  type="text"
                  id="ResearchCollaborations"
                  value={lecturerData.ResearchCollaborations}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter research collaborations"
                />
              </div>
            </div>
          </div>
        </div>
      )

    case 3:
      return (
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">Courses & Department</h3>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 items-end">
                  <div className="flex-1">
                    <label htmlFor="CoursesTaught" className={labelClasses}>
                      Course
                    </label>
                    <input
                      type="text"
                      id="CoursesTaught"
                      placeholder="Enter course taught before/is teaching currently"
                      value={lecturerData.CoursesTaught.split(",")[0] || ""}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                      onClick={addCourseComponent}
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                    {courseArray.length > 0 && (
                      <button
                        type="button"
                        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg transition-colors"
                        onClick={deleteCourseComponent}
                      >
                        <Minus className="h-5 w-5" />
                      </button>
                    )}
                  </div>
                </div>

                <div className="space-y-4 max-h-64 overflow-y-auto">
                  {courseArray.map((courseId) => (
                    <Courses key={courseId} index={courseId} handleChange={handleChange} />
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="CourseYear" className={labelClasses}>
                  Course Year
                </label>
                <input
                  type="text"
                  id="CourseYear"
                  value={lecturerData.CourseYear}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter course year"
                />
              </div>

              <div>
                <label htmlFor="Programs" className={labelClasses}>
                  Programs
                </label>
                <input
                  type="text"
                  id="Programs"
                  value={lecturerData.Programs}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter programs"
                />
              </div>

              <div>
                <label htmlFor="DepartmentRole" className={labelClasses}>
                  Department Role
                </label>
                <input
                  type="text"
                  id="DepartmentRole"
                  value={lecturerData.DepartmentRole}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter department role"
                />
              </div>

              <div>
                <label htmlFor="DepartmentRoleYear" className={labelClasses}>
                  Department Role Year
                </label>
                <input
                  type="text"
                  id="DepartmentRoleYear"
                  value={lecturerData.DepartmentRoleYear}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter department role year"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-800">External Affiliations</h3>
              </div>

              <div>
                <label htmlFor="ExternalInstitutions" className={labelClasses}>
                  External Institution
                </label>
                <input
                  type="text"
                  id="ExternalInstitutions"
                  value={lecturerData.ExternalInstitutions}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter external institution"
                />
              </div>

              <div>
                <label htmlFor="ExternalInstitutionsNature" className={labelClasses}>
                  External Institution Nature (Description)
                </label>
                <textarea
                  id="ExternalInstitutionsNature"
                  value={lecturerData.ExternalInstitutionsNature}
                  onChange={handleChange}
                  className={`${inputClasses} min-h-[100px] resize-vertical`}
                  placeholder="Describe the nature of external institution"
                />
              </div>

              <div>
                <label htmlFor="ExternalIndustry" className={labelClasses}>
                  External Industry
                </label>
                <input
                  type="text"
                  id="ExternalIndustry"
                  value={lecturerData.ExternalIndustry}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="Enter external industry"
                />
              </div>

              <div>
                <label htmlFor="ExternalIndustryNature" className={labelClasses}>
                  External Industry Nature (Description)
                </label>
                <textarea
                  id="ExternalIndustryNature"
                  value={lecturerData.ExternalIndustryNature}
                  onChange={handleChange}
                  className={`${inputClasses} min-h-[100px] resize-vertical`}
                  placeholder="Describe the nature of external industry"
                />
              </div>
            </div>
          </div>
        </div>
      )

    default:
      return (
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-800">Review Your Information</h2>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-medium">
                <span className="font-bold">Note:</span> Please review all information carefully. Any field left blank will be recorded as "none" in the system. Once approved, submit the form.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Personal Information */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 border-b border-blue-200 pb-2 mb-4">
                  Personal Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">Name (required):</span>
                    <p className="text-gray-800">{lecturerData.Firstname} {lecturerData.MiddleName} {lecturerData.Lastname}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Email (required):</span>
                    <p className="text-gray-800">{lecturerData.Email}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Institutional Email (required):</span>
                    <p className="text-gray-800">{lecturerData.InstitutionalEmail}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Date of Birth (required):</span>
                    <p className="text-gray-800">{lecturerData.DateOfBirth}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Gender (required):</span>
                    <p className="text-gray-800">{lecturerData.Gender}</p>
                  </div>
                </div>
              </div>

              {/* Qualification */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 border-b border-blue-200 pb-2 mb-4">
                  Qualification
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">Qualification Type:</span>
                    <p className="text-gray-800">{lecturerData.QualificationType || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Year of Study:</span>
                    <p className="text-gray-800">{lecturerData.YearOfStudy || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Year of Completion:</span>
                    <p className="text-gray-800">{lecturerData.YearOfCompletion || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Professional Qualification:</span>
                    <p className="text-gray-800">{lecturerData.ProfessionalQualification || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Professional Affiliation:</span>
                    <p className="text-gray-800">{lecturerData.ProfessionalAffiliation || "Not specified"}</p>
                  </div>
                </div>
              </div>

              {/* Education & Research */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 border-b border-blue-200 pb-2 mb-4">
                  Education & Research
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">Education Level:</span>
                    <p className="text-gray-800">{lecturerData.EducationLevel || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Institution:</span>
                    <p className="text-gray-800">{lecturerData.Institution || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Role:</span>
                    <p className="text-gray-800">{lecturerData.Roles || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Duties:</span>
                    <p className="text-gray-800">{lecturerData.Duties || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Research Areas:</span>
                    <p className="text-gray-800">{lecturerData.ResearchAreas || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Current Research Area:</span>
                    <p className="text-gray-800">{lecturerData.CurrentResearchArea || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Research Collaborations:</span>
                    <p className="text-gray-800">{lecturerData.ResearchCollaborations || "Not specified"}</p>
                  </div>
                </div>
              </div>

              {/* Courses & Department */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 border-b border-blue-200 pb-2 mb-4">
                  Courses & Department
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">Courses Taught:</span>
                    <p className="text-gray-800">{lecturerData.CoursesTaught || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Course Year:</span>
                    <p className="text-gray-800">{lecturerData.CourseYear || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Programs:</span>
                    <p className="text-gray-800">{lecturerData.Programs || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Department Role:</span>
                    <p className="text-gray-800">{lecturerData.DepartmentRole || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Department Role Year:</span>
                    <p className="text-gray-800">{lecturerData.DepartmentRoleYear || "Not specified"}</p>
                  </div>
                </div>
              </div>

              {/* External Affiliations */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 md:col-span-2">
                <h3 className="text-lg font-bold text-gray-800 border-b border-blue-200 pb-2 mb-4">
                  External Affiliations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <span className="font-semibold text-gray-600">External Institutions:</span>
                    <p className="text-gray-800">{lecturerData.ExternalInstitutions || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">External Industry:</span>
                    <p className="text-gray-800">{lecturerData.ExternalIndustry || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">External Institutions Nature:</span>
                    <p className="text-gray-800">{lecturerData.ExternalInstitutionsNature || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">External Industry Nature:</span>
                    <p className="text-gray-800">{lecturerData.ExternalIndustryNature || "Not specified"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

const LecturerSignup = () => {
  const [section, setSection] = useState(1)
  const [sectionName, setSectionName] = useState("")
  const [lecturerData, setLecturerData] = useState({
    Firstname: "",
    MiddleName: "",
    Lastname: "",
    Gender: "",
    Email: "",
    InstitutionalEmail: "",
    DateOfBirth: "",
    password: "biomedical_lecturer",
    QualificationType: "",
    YearOfStudy: "",
    YearOfCompletion: "",
    ProfessionalQualification: "",
    ProfessionalAffiliation: "",
    EducationLevel: "",
    Institution: "",
    Roles: "",
    Duties: "",
    ResearchAreas: "",
    CurrentResearchArea: "",
    ResearchCollaborations: "",
    CoursesTaught: "",
    CourseYear: "",
    Programs: "",
    DepartmentRole: "",
    DepartmentRoleYear: "",
    ExternalInstitutions: "",
    ExternalInstitutionsNature: "",
    ExternalIndustry: "",
    ExternalIndustryNature: "",
  })

  const [courseArray, setCourseArray] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseType, setResponseType] = useState("")
  const [responseMessage, setResponseMessage] = useState("")
  const router = useRouter()

  useEffect(() => {
    switch (section) {
      case 1:
        setSectionName("Personal Information & Qualification")
        break
      case 2:
        setSectionName("Education & Research Information")
        break
      case 3:
        setSectionName("Courses & Institution")
        break
      default:
        setSectionName("Information Review")
    }
  }, [section])

  const handleChange = (e, index) => {
    const { id, value } = e.target
    if (id.startsWith("course")) {
      // Handle course input changes
      const updatedCourses = [...(lecturerData.CoursesTaught ? lecturerData.CoursesTaught.split(",") : [])]
      updatedCourses[index] = value

      setLecturerData((prevData) => ({
        ...prevData,
        CoursesTaught: updatedCourses.filter(Boolean).join(","),
      }))
    } else {
      // Update lecturer data
      setLecturerData((prevData) => ({
        ...prevData,
        [id]: value,
      }))
    }
  }

  const handleNext = () => {
    setSection((prev) => prev + 1)
  }

  const handlePrevious = () => {
    setSection((prev) => Math.max(prev - 1, 1)) // Prevent going below section 1
  }

  const deleteCourseComponent = () => {
    setCourseArray((previousCourse) => previousCourse.slice(0, -1))
  }

  const addCourseComponent = () => {
    setCourseArray((previousCourse) => [...previousCourse, previousCourse.length])
  }

  const handleSubmit = async () => {
    // Validate required fields
    const requiredFields = [
      lecturerData.Firstname,
      lecturerData.Lastname,
      lecturerData.Email,
      lecturerData.InstitutionalEmail,
      lecturerData.DateOfBirth,
      lecturerData.Gender,
    ]

    const allFieldsFilled = requiredFields.every((field) => field.trim() !== "")

    if (!allFieldsFilled) {
      alert("Please fill in all required fields.")
      return
    }

    setIsSubmitting(true)
    try {
      const sign_up_lecturer_response = await SignUpLecturer(lecturerData)
      console.log("Lecturer Data: ", sign_up_lecturer_response)
      if (sign_up_lecturer_response.type === "fail") {
        setIsSubmitting(false)
        setResponseType("fail")
        setResponseMessage(sign_up_lecturer_response.message)
      }

      if (sign_up_lecturer_response.type === "success") {
        setIsSubmitting(false)
        setResponseType("success")
        setResponseMessage(sign_up_lecturer_response.message)

        // Set the response message to "Redirecting" after 2 seconds
        setTimeout(() => {
          setResponseMessage("Redirecting")
          router.push("/") // Redirect to the login page
        }, 2000)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
              <span className="text-2xl font-bold text-blue-600">{section}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Lecturer Registration</h1>
            <p className="text-blue-100 text-lg">{sectionName}</p>
            
            {/* Progress Bar */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="bg-blue-500 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(section / 4) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-blue-100">
                <span>Step {section}</span>
                <span>of 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {responseType === "success" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-4 text-green-600">Submission Successful!</h2>
              <p className="mb-6 text-gray-700">✅ {responseMessage}</p>
            </div>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {responseType === "fail" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-500 text-2xl">❌</span>
              </div>
              <h2 className="text-xl font-bold mb-4 text-red-600">Submission Error</h2>
              <p className="mb-6 text-gray-700">{responseMessage}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                onClick={() => (setResponseType(""), setResponseMessage(""))}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <LecturerSignUpForm
            section={section}
            addCourseComponent={addCourseComponent}
            courseArray={courseArray}
            deleteCourseComponent={deleteCourseComponent}
            lecturerData={lecturerData}
            handleChange={handleChange}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={handlePrevious}
            disabled={section === 1}
            className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-8 py-3 font-semibold rounded-lg transition-colors"
          >
            Previous
          </button>

          {section < 4 ? (
            <button
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 font-semibold rounded-lg transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed text-white px-8 py-3 font-semibold rounded-lg transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default LecturerSignup
