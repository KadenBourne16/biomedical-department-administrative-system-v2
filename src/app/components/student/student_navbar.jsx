"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Home, MessageSquare, BookOpen, Briefcase, Newspaper, Menu, X, User } from "lucide-react"
 

export default function StudentNavbar() {
  const [accountId, setAccountId] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  useEffect(() =>{
    setAccountId(localStorage.getItem("accountId"));
  }, [])
  return (
    <div className="flex justify-center w-full pt-0 p-4">
      <nav className="bg-[#2541B2] bg-opacity-80 backdrop-blur-sm rounded-br-lg rounded-bl-lg shadow-lg max-w-6xl w-full">
        <div className="px-4 py-3">
          {/* Mobile menu button */}
          <div className="flex md:hidden justify-end">
            <button onClick={toggleMenu} className="text-[#FFFFFF] hover:text-[#FFFFFF]/80 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center space-x-8">
            <NavItem href={`/student/dashboard/${accountId}`} icon={<Home />} text="Home" />
            <NavItem href={`/student/dashboard/information/${accountId}`} icon={<User />} text="Information" />
            <NavItem href="/student/dashboard/message" icon={<MessageSquare />} text="Message" />
            <NavItem href="/syllabus" icon={<BookOpen />} text="View Syllabus" />
            <NavItem href="/career" icon={<Briefcase />} text="View Career/Industry" />
            <NavItem href="/news" icon={<Newspaper />} text="Read News" />
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 space-y-2">
              <MobileNavItem href={`/student/dashboard/${accountId}`} icon={<Home />} text="Home" />
              <MobileNavItem href={`/student/dashboard/information/${accountId}`} icon={<User />} text="Information" />
              <MobileNavItem href="/student/dashboard/message" icon={<MessageSquare />} text="Message" />
              <MobileNavItem href="/syllabus" icon={<BookOpen />} text="View Syllabus" />
              <MobileNavItem href="/career" icon={<Briefcase />} text="View Career/Industry" />
              <MobileNavItem href="/news" icon={<Newspaper />} text="Read News" />
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

function NavItem({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-1 text-[#FFFFFF] px-3 py-2 rounded-md hover:bg-[#2541B2]/50 transition-colors"
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{text}</span>
    </Link>
  )
}

function MobileNavItem({ href, icon, text }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 text-[#FFFFFF] px-3 py-2 rounded-md hover:bg-[#2541B2]/50 transition-colors"
    >
      <span className="w-5 h-5">{icon}</span>
      <span>{text}</span>
    </Link>
  )
}

