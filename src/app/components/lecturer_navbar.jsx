"use client"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Home, Users, User, Newspaper, Bell, Menu, X, Settings, LogOut, ChevronDown } from "lucide-react"

const LecturerNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [lecturerData, setLecturerData] = useState({
    name: "Dr. John Smith",
    email: "john.smith@university.edu",
    avatar: "/placeholder.svg?height=40&width=40",
  })

  const pathname = usePathname()
  const router = useRouter()

  const navigationItems = [
    { name: "Dashboard", href: "/lecturer/dashboard", icon: Home },
    { name: "Lecturer's Information", href: "/lecturer/information", icon: User },
    { name: "Students", href: "/lecturer/students", icon: Users },
    { name: "News & Events", href: "/lecturer/news", icon: Newspaper },
  ]

  const isActive = (href) => pathname === href

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem("lecturer_email")
    router.push("/login")
  }

  useEffect(() => {
    // Load lecturer data from localStorage or API
    const lecturerEmail = localStorage.getItem("lecturer_email")
    if (lecturerEmail) {
      setLecturerData((prev) => ({
        ...prev,
        email: lecturerEmail,
      }))
    }
  }, [])

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-lg font-bold text-lg">BMS</div>
                <span className="ml-2 text-xl font-semibold text-gray-900 hidden sm:block">Lecturer Portal</span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:ml-8 md:flex md:space-x-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.name}
                      onClick={() => router.push(item.href)}
                      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href)
                          ? "bg-blue-100 text-blue-700 border border-blue-200"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      {item.name}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Right side - Notifications and Profile */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                {notifications > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={lecturerData.avatar || "/placeholder.svg"}
                    alt="Profile"
                    className="w-8 h-8 rounded-full bg-gray-300"
                  />
                  <div className="hidden sm:block text-left">
                    <p className="text-sm font-medium text-gray-900">{lecturerData.name}</p>
                    <p className="text-xs text-gray-500">Lecturer</p>
                  </div>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>

                {/* Profile Dropdown Menu */}
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-medium text-gray-900">{lecturerData.name}</p>
                      <p className="text-sm text-gray-500">{lecturerData.email}</p>
                    </div>
                    <button
                      onClick={() => router.push("/lecturer/profile")}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4 mr-3" />
                      View Profile
                    </button>
                    <button
                      onClick={() => router.push("/lecturer/settings")}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4 mr-3" />
                      Settings
                    </button>
                    <hr className="my-2" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-3 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.name}
                    onClick={() => {
                      router.push(item.href)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`flex items-center w-full px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Click outside to close dropdowns */}
      {(isMobileMenuOpen || isProfileDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setIsMobileMenuOpen(false)
            setIsProfileDropdownOpen(false)
          }}
        />
      )}
    </>
  )
}

export default LecturerNavbar
