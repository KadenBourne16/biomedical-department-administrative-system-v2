"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import AddButton from "../../../../public/icons/icons8-plus-256.png"

const Courses = ({ index, handleChange }) => {
  return (
    <div className="space-x-2 px-5 py-2">
      <label htmlFor={`course${index}`} className="font-semibold">
        Course {index + 1}
      </label>
      <input
        type="text"
        id={`course${index}`}
        name={`course${index}`}
        placeholder="Enter course taught before/is teaching currently"
        className="outline-blue-400 outline-2 rounded-md p-3 w-full"
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
  switch (section) {
    case 1:
      return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="">
            <div className="flex flex-col space-y-5">
              <div className="">
                <label htmlFor="Firstname" className="font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="Firstname"
                  value={lecturerData.Firstname}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div>
                <label htmlFor="MiddleName" className="font-semibold">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="MiddleName"
                  value={lecturerData.MiddleName}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div>
                <label htmlFor="Lastname" className="font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="Lastname"
                  value={lecturerData.Lastname}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div>
                <label htmlFor="Email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  value={lecturerData.Email}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div className="">
                <label htmlFor="Gender" className="font-semibold">
                  Gender
                </label>
                <select
                  id="Gender"
                  value={lecturerData.Gender}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="">
              <label htmlFor="QualificationType" className="font-semibold">
                Qualification
              </label>
              <select
                id="QualificationType"
                value={lecturerData.QualificationType}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              >
                <option value="">Select Qualification</option>
                <option value="masters">Masters</option>
                <option value="phd">PHD</option>
              </select>
            </div>

            <div>
              <label htmlFor="YearOfStudy" className="font-semibold">
                Year Of Study
              </label>
              <input
                type="text"
                id="YearOfStudy"
                value={lecturerData.YearOfStudy}
                onChange={handleChange}
                placeholder="Enter Year e.g 1998"
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>

            <div>
              <label htmlFor="YearOfCompletion" className="font-semibold">
                Year of Completion
              </label>
              <select
                id="YearOfCompletion"
                value={lecturerData.YearOfCompletion}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
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
              <label htmlFor="ProfessionalQualification" className="font-semibold">
                Professional Qualification
              </label>
              <input
                type="text"
                id="ProfessionalQualification"
                value={lecturerData.ProfessionalQualification}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>

            <div>
              <label htmlFor="ProfessionalAffiliation" className="font-semibold">
                Professional Affiliation
              </label>
              <input
                type="text"
                id="ProfessionalAffiliation"
                value={lecturerData.ProfessionalAffiliation}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
          </div>
        </div>
      )
    case 2:
      return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="">
            <div className="flex flex-col space-y-5">
              <div className="">
                <label htmlFor="EducationLevel" className="font-semibold">
                  Educational Level
                </label>
                <input
                  type="text"
                  id="EducationLevel"
                  value={lecturerData.EducationLevel}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div>
                <label htmlFor="Institution" className="font-semibold">
                  Institution
                </label>
                <input
                  type="text"
                  id="Institution"
                  value={lecturerData.Institution}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div>
                <label htmlFor="Roles" className="font-semibold">
                  Role
                </label>
                <input
                  type="text"
                  placeholder="e.g Assistant Researcher"
                  id="Roles"
                  value={lecturerData.Roles}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div>
                <label htmlFor="Duties" className="font-semibold">
                  Duty
                </label>
                <input
                  type="text"
                  id="Duties"
                  value={lecturerData.Duties}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>

              <div className="">
                <label htmlFor="ResearchAreas" className="font-semibold">
                  Research Areas
                </label>
                <input
                  type="text"
                  placeholder="e.g BioMachinery"
                  id="ResearchAreas"
                  value={lecturerData.ResearchAreas}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-full"
                />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="">
              <label htmlFor="CurrentResearchArea" className="font-semibold">
                Current Research Area
              </label>
              <input
                type="text"
                placeholder=""
                id="CurrentResearchArea"
                value={lecturerData.CurrentResearchArea}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>

            <div>
              <label htmlFor="ResearchCollaborations" className="font-semibold">
                Research Collaborations
              </label>
              <input
                type="text"
                id="ResearchCollaborations"
                value={lecturerData.ResearchCollaborations}
                onChange={handleChange}
                placeholder=""
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
          </div>
        </div>
      )
    case 3:
      return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
          <div className="space-y-5">
            <div className="flex lg:flex-row flex-col space-x-2">
              <div className="space-x-2 ml-0">
                <label htmlFor="CoursesTaught" className="font-semibold">
                  Course
                </label>
                <input
                  type="text"
                  id="CoursesTaught"
                  placeholder="Enter course taught before/is teaching currently"
                  value={lecturerData.CoursesTaught.split(",")[0] || ""}
                  onChange={handleChange}
                  className="outline-blue-400 outline-2 rounded-md p-3 w-[20em]"
                />
              </div>
              <div>
                <button className="text-white text-2xl self-center" onClick={addCourseComponent}>
                  <Image src={AddButton || "/placeholder.svg"} alt="add button" height={45} width={45} />
                </button>
                <span className="pt-[5px]">
                  {courseArray.length > 0 ? (
                    <button onClick={deleteCourseComponent}>
                      <Image src="/icons/icons8-minus-100.png" alt="minus button" height={50} width={40} />
                    </button>
                  ) : null}
                </span>
              </div>
            </div>
            <div className="overflow-auto space-y-4" style={{ height: courseArray.length > 0 ? "100px" : "0px" }}>
              {courseArray.map((courseId) => (
                <Courses key={courseId} index={courseId} handleChange={handleChange} />
              ))}
            </div>
            <div>
              <label htmlFor="CourseYear" className="font-semibold">
                Course Year
              </label>
              <input
                type="text"
                id="CourseYear"
                placeholder=""
                value={lecturerData.CourseYear}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>

            <div>
              <label htmlFor="Programs" className="font-semibold">
                Programs
              </label>
              <input
                type="text"
                id="Programs"
                placeholder=""
                value={lecturerData.Programs}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>

            <div>
              <label htmlFor="DepartmentRole" className="font-semibold">
                Department Role
              </label>
              <input
                type="text"
                id="DepartmentRole"
                placeholder=""
                value={lecturerData.DepartmentRole}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
            <div>
              <label htmlFor="DepartmentRoleYear" className="font-semibold">
                Department Role Year
              </label>
              <input
                type="text"
                id="DepartmentRoleYear"
                placeholder=""
                value={lecturerData.DepartmentRoleYear}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <label htmlFor="ExternalInstitutions" className="font-semibold">
                External Institution
              </label>
              <input
                type="text"
                id="ExternalInstitutions"
                placeholder=""
                value={lecturerData.ExternalInstitutions}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
            <div>
              <label htmlFor="ExternalInstitutionsNature" className="font-semibold">
                External Institution Nature (Description)
              </label>
              <textarea
                id="ExternalInstitutionsNature"
                placeholder=""
                value={lecturerData.ExternalInstitutionsNature}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
            <div>
              <label htmlFor="ExternalIndustry" className="font-semibold">
                External Industry
              </label>
              <input
                type="text"
                id="ExternalIndustry"
                placeholder=""
                value={lecturerData.ExternalIndustry}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              />
            </div>
            <div>
              <label htmlFor="ExternalIndustryNature" className="font-semibold">
                External Industry Nature (Description)
              </label>
              <textarea
                id="ExternalIndustryNature"
                placeholder=""
                value={lecturerData.ExternalIndustryNature}
                onChange={handleChange}
                className="outline-blue-400 outline-2 rounded-md p-3 w-full"
              ></textarea>
            </div>
          </div>
        </div>
      )
    default:
      return (
        <div className="flex flex-col justify-center space-y-6 w-full max-w-4xl">
            <h1 className="text-blue-500 text-2xl font-bold">Lecturer Side is still under development</h1>
          <h1 className="font-bold text-xl">
            Review Your Information:{" "}
            <span className="text-red-400 font-semibold">Kindly review to make sure your information is correct</span>
          </h1>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 bg-gray-50 p-6 rounded-lg">
            <div className="space-y-3">
              <h2 className="font-bold text-lg border-b border-blue-500 pb-1">Personal Information</h2>
              <p>
                <span className="font-semibold">Name:</span> {lecturerData.Firstname} {lecturerData.MiddleName}{" "}
                {lecturerData.Lastname}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {lecturerData.Email}
              </p>
              <p>
                <span className="font-semibold">Gender:</span> {lecturerData.Gender}
              </p>

              <h2 className="font-bold text-lg border-b border-blue-500 pb-1 mt-4">Qualification</h2>
              <p>
                <span className="font-semibold">Qualification Type:</span> {lecturerData.QualificationType}
              </p>
              <p>
                <span className="font-semibold">Year of Study:</span> {lecturerData.YearOfStudy}
              </p>
              <p>
                <span className="font-semibold">Year of Completion:</span> {lecturerData.YearOfCompletion}
              </p>
              <p>
                <span className="font-semibold">Professional Qualification:</span>{" "}
                {lecturerData.ProfessionalQualification}
              </p>
              <p>
                <span className="font-semibold">Professional Affiliation:</span> {lecturerData.ProfessionalAffiliation}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-bold text-lg border-b border-blue-500 pb-1">Education & Research</h2>
              <p>
                <span className="font-semibold">Education Level:</span> {lecturerData.EducationLevel}
              </p>
              <p>
                <span className="font-semibold">Institution:</span> {lecturerData.Institution}
              </p>
              <p>
                <span className="font-semibold">Role:</span> {lecturerData.Roles}
              </p>
              <p>
                <span className="font-semibold">Duties:</span> {lecturerData.Duties}
              </p>
              <p>
                <span className="font-semibold">Research Areas:</span> {lecturerData.ResearchAreas}
              </p>
              <p>
                <span className="font-semibold">Current Research Area:</span> {lecturerData.CurrentResearchArea}
              </p>
              <p>
                <span className="font-semibold">Research Collaborations:</span> {lecturerData.ResearchCollaborations}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-bold text-lg border-b border-blue-500 pb-1">Courses & Department</h2>
              <p>
                <span className="font-semibold">Courses Taught:</span> {lecturerData.CoursesTaught}
              </p>
              <p>
                <span className="font-semibold">Course Year:</span> {lecturerData.CourseYear}
              </p>
              <p>
                <span className="font-semibold">Programs:</span> {lecturerData.Programs}
              </p>
              <p>
                <span className="font-semibold">Department Role:</span> {lecturerData.DepartmentRole}
              </p>
              <p>
                <span className="font-semibold">Department Role Year:</span> {lecturerData.DepartmentRoleYear}
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="font-bold text-lg border-b border-blue-500 pb-1">External Affiliations</h2>
              <p>
                <span className="font-semibold">External Institutions:</span> {lecturerData.ExternalInstitutions}
              </p>
              <p>
                <span className="font-semibold">External Institutions Nature:</span>{" "}
                {lecturerData.ExternalInstitutionsNature}
              </p>
              <p>
                <span className="font-semibold">External Industry:</span> {lecturerData.ExternalIndustry}
              </p>
              <p>
                <span className="font-semibold">External Industry Nature:</span> {lecturerData.ExternalIndustryNature}
              </p>
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

  const handleSubmit = () => {
    console.log("Form Data Submitted:", lecturerData)
    alert("Form submitted successfully! Check console for data.")
    // Here you would typically send the data to your backend
  }

  return (
    <div className="flex flex-col justify-center items-center lg:px-0 px-5">
      <div className="bg-blue-500 w-screen py-10 flex justify-center">
        <div className="flex flex-row justify-center items-center space-x-10">
          <div className="flex flex-col items-center">
            <div className="font-bold text-white rounded-full border-2 border-white px-3 py-1">{section}</div>
            <span className="block font-bold text-white">{sectionName}</span>
          </div>
        </div>
      </div>
      <div className="h-1/2 pb-10 mt-5">
        <LecturerSignUpForm
          section={section}
          addCourseComponent={addCourseComponent}
          courseArray={courseArray}
          deleteCourseComponent={deleteCourseComponent}
          lecturerData={lecturerData}
          handleChange={handleChange}
        />
      </div>
      <div className="space-x-5 flex flex-row">
        <button
          onClick={handlePrevious}
          className="bg-blue-500 px-5 py-2 text-white font-bold rounded-md w-50 hover:bg-white hover:text-blue-500 hover:border-2 hover:border-blue-500"
        >
          Previous
        </button>

        {section < 4 ? (
          <button
            onClick={handleNext}
            className="border-2 border-blue-500 text-blue-500 px-5 py-2 font-bold rounded-md w-50 hover:bg-blue-500 hover:text-white"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-5 py-2 font-bold rounded-md w-50 hover:bg-green-700"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default LecturerSignup

