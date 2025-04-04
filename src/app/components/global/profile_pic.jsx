"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { FetchUserServerSideAction } from "@/serverSide/fetch_user_serverside_action"
import { ChevronDown, FileText, Settings, LogOut } from "lucide-react"
import { useParams } from "next/navigation"

const ProfileIcon = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [studentProfile, setStudentProfile] = useState("")
  const [accountId, setAccountId] = useState("")
  const Parameter = useParams;

  // Fix localStorage issue (not available during server-side rendering)
    useEffect(() => {
      // Only access localStorage after component mounts (client-side)
      if(localStorage.getItem("accountId")){
        setAccountId(localStorage.getItem("accountId"))
      }else{
        setAccountId(Parameter.id)
      }
    }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (!accountId) return // Don't fetch if accountId is not available yet

      try {
        const profileResponse = await FetchUserServerSideAction(accountId)
        if (profileResponse.success) {
          const name = profileResponse.data[0]
          setStudentProfile(name.firstName)
        }
      } catch (err) {
        console.error("fetching profile error: ", err)
      }
    }

    if (accountId) {
      fetchData()
    }
  }, [accountId])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const handleLogout = () => {
    // Handle logout logic here
    localStorage.removeItem("accountId")
    // Redirect to login page or perform other logout actions
    console.log("Logging out...")
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest(".profile-dropdown-container")) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  return (
    <div className="flex w-full bg-[#2541B2] py-2 px-4 justify-end">
      <div
        className="profile-dropdown-container flex items-center text-white font-semibold space-x-2 cursor-pointer relative"
        onClick={toggleDropdown}
      >
        <h1 className="lg:text-lg text-sm sm:block">{studentProfile}</h1>
        <Image
          src="/ProfilePic.jpg"
          height={50}
          width={50}
          alt="Profile"
          className="rounded-[6em] border-2 border-white h-10 w-10 sm:h-12 sm:w-12"
        />
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <a
                href="#"
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <FileText className="mr-3 h-4 w-4 text-gray-500" />
                Report
              </a>
              <a
                href={`/student/account/settings/${accountId}`}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                <Settings className="mr-3 h-4 w-4 text-gray-500" />
                Settings
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-500"
                role="menuitem"
              >
                <LogOut className="mr-3 h-4 w-4 text-gray-500 group-hover:text-red-500" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfileIcon

