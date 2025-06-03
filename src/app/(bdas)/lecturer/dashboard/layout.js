import React from "react"
import LecturerNavbar from "@/app/components/lecturer_navbar"

const LecturerLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LecturerNavbar />
      {children}
    </div>
  )
}

export default LecturerLayout
