"use client"
import React, { useState, useEffect } from "react"
import { X, User, BookOpen, Users, TrendingUp, UserPlus, Trash2 } from "lucide-react"

export const LecturerManagementModal = ({ modalType, setModalType }) => {
  const [formData, setFormData] = useState({
    firstname: "John",
    middlename: "Doe",
    lastname: "Smith",
    course: "Mathematics",
    department: "Science",
    programme: "BSc",
    officeRoom: "Room 304, Math Building",
    assignedStudents: [
        {
        studentIndexNo: "S12345",
        studentFirstname: "Emily",
        studentLastname: "Chen",
        studentInstitutionalEmail: "emily.chen@university.edu",
        studentProgramme: "BSc Mathematics"
        },
        {
        studentIndexNo: "S67890",
        studentFirstname: "David",
        studentLastname: "Lee",
        studentInstitutionalEmail: "david.lee@university.edu",
        studentProgramme: "BSc Mathematics"
        }
    ],
    score: 85,
    attendance: 90,
    rate: 0.85
  })

  const [unassignedStudents, setUnassignedStudents] = useState([
    {
      studentIndexNo: "S11111",
      studentFirstname: "Alice",
      studentLastname: "Johnson",
      studentInstitutionalEmail: "alice.johnson@university.edu",
      studentProgramme: "BSc Computer Science",
    },
    {
      studentIndexNo: "S22222",
      studentFirstname: "Bob",
      studentLastname: "Wilson",
      studentInstitutionalEmail: "bob.wilson@university.edu",
      studentProgramme: "BSc Mathematics",
    },
    {
      studentIndexNo: "S33333",
      studentFirstname: "Carol",
      studentLastname: "Brown",
      studentInstitutionalEmail: "carol.brown@university.edu",
      studentProgramme: "BSc Physics",
    },
  ])
  const [selectedStudent, setSelectedStudent] = useState("")

  const lecturerData = {
    "firstname": "John",
    "middlename": "Doe",
    "lastname": "Smith",
    "course": "Mathematics",
    "department": "Science",
    "programme": "BSc",
    "officeRoom": "Room 304, Math Building",
    "assignedStudents": [
        {
        "studentIndexNo": "S12345",
        "studentFirstname": "Emily",
        "studentLastname": "Chen",
        "studentInstitutionalEmail": "emily.chen@university.edu",
        "studentProgramme": "BSc Mathematics"
        },
        {
        "studentIndexNo": "S67890",
        "studentFirstname": "David",
        "studentLastname": "Lee",
        "studentInstitutionalEmail": "david.lee@university.edu",
        "studentProgramme": "BSc Mathematics"
        }
    ],
    "score": 85,
    "attendance": 90,
    "rate": 0.85
  }

  useEffect(() => {
  }, [modalType])

  if (!modalType) return null

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleAssignStudent = () => {
    if (!selectedStudent) return

    const studentToAssign = unassignedStudents.find((s) => s.studentIndexNo === selectedStudent)
    if (!studentToAssign) return

    setFormData((prev) => ({
      ...prev,
      assignedStudents: [...(prev.assignedStudents || []), studentToAssign],
    }))

    setUnassignedStudents((prev) => prev.filter((s) => s.studentIndexNo !== selectedStudent))
    setSelectedStudent("")
  }

  const handleUnassignStudent = (studentIndexNo) => {
    const studentToUnassign = formData.assignedStudents.find((s) => s.studentIndexNo === studentIndexNo)
    if (!studentToUnassign) return

    setFormData((prev) => ({
      ...prev,
      assignedStudents: prev.assignedStudents.filter((s) => s.studentIndexNo !== studentIndexNo),
    }))

    setUnassignedStudents((prev) => [...prev, studentToUnassign])
  }

  const handleSave = () => {
    if (typeof onSave === "function") {
      onSave(formData)
    }
    setModalType("") // Close the modal after saving
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full h-full max-w-7xl max-h-[95vh] rounded-lg shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white bg-opacity-20 p-2 rounded-lg">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Manage Lecturer</h2>
              <p className="text-red-100">
                {formData.firstname} {formData.middlename} {formData.lastname}
              </p>
            </div>
          </div>
          <button
            onClick={() => setModalType("")}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-full">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Basic Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <User className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Basic Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name (N)</label>
                  <input
                    type="text"
                    value={formData.firstname}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name (N)</label>
                  <input
                    type="text"
                    value={formData.middlename}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name (N)</label>
                  <input
                    type="text"
                    value={formData.lastname}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Academic Information</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                  <input
                    type="text"
                    value={formData.course}
                    onChange={(e) => handleInputChange("course", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => handleInputChange("department", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select Department</option>
                    <option value="Science">Science</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Programme</label>
                  <select
                    value={formData.programme}
                    onChange={(e) => handleInputChange("programme", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                    <option value="">Select Programme</option>
                    <option value="BSc">BSc</option>
                    <option value="MSc">MSc</option>
                    <option value="PhD">PhD</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Office Room</label>
                  <input
                    type="text"
                    value={formData.officeRoom}
                    onChange={(e) => handleInputChange("officeRoom", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    placeholder="e.g., Room 304, Math Building"
                  />
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-600 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Performance Metrics</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Score (N)</label>
                  <input
                    type="number"
                    value={formData.score}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Attendance (N)</label>
                  <input
                    type="number"
                    value={formData.attendance}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rate </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.rate}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Student Assignment Section */}
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Student Assignment</h3>
              </div>

              <div className="flex items-center space-x-3">
                <select
                  value={selectedStudent}
                  onChange={(e) => setSelectedStudent(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                >
                  <option value="">Select unassigned student</option>
                  {unassignedStudents.map((student) => (
                    <option key={student.studentIndexNo} value={student.studentIndexNo}>
                      {student.studentIndexNo} - {student.studentFirstname} {student.studentLastname}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleAssignStudent}
                  disabled={!selectedStudent}
                  className="bg-red-600 hover:bg-red-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Assign</span>
                </button>
              </div>
            </div>

            {/* Assigned Students */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {formData.assignedStudents.map((student) => (
                <div key={student.studentIndexNo} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {student.studentFirstname} {student.studentLastname}
                      </h4>
                      <p className="text-sm text-gray-600">{student.studentIndexNo}</p>
                      <p className="text-sm text-gray-600">{student.studentInstitutionalEmail}</p>
                      <p className="text-sm text-gray-600">{student.studentProgramme}</p>
                    </div>
                    <button
                      onClick={() => handleUnassignStudent(student.studentIndexNo)}
                      className="text-red-600 hover:text-red-800 p-1 rounded transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {formData.assignedStudents.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Users className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                <p>No students assigned yet</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex justify-end space-x-4">
            <button
              onClick={() => setModalType("")}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

