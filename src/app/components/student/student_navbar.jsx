"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import {
  Home,
  MessageSquare,
  BookOpen,
  Briefcase,
  Newspaper,
  Menu,
  X,
  User,
  ChevronDown,
  FileText,
  Settings,
  LogOut,
  GraduationCap,
} from "lucide-react";

export default function StudentNavbar() {
  const [accountId, setAccountId] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [studentProfile, setStudentProfile] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  const pathname = usePathname();
  const params = useParams();

  useEffect(() => {
    // Get account ID from localStorage or params
    const storedAccountId = localStorage.getItem("accountId");
    if (storedAccountId) {
      setAccountId(storedAccountId);
    } else if (params?.id) {
      setAccountId(params.id);
    }
  }, [params]);

  useEffect(() => {
    const fetchData = async () => {
      if (!accountId) return;

      try {
        // const profileResponse = await fetchUserProfile(accountId);
        // if (profileResponse.success) {
        //   setStudentProfile({
        //     name: profileResponse.data.name || "Student",
        //     email: profileResponse.data.email || "",
        //     avatar: profileResponse.data.avatar || "",
        //   });
        // }
      } catch (err) {
        console.error("Error fetching profile:", err);
        // Set default values on error
        setStudentProfile({
          name: "Student",
          email: "student@university.edu",
          avatar: "",
        });
      }
    };

    if (accountId) {
      fetchData();
    }
  }, [accountId]);

  const navItems = [
    {
      name: "Dashboard",
      href: `/student/dashboard/${accountId}`,
      icon: Home,
    },
    {
      name: "Profile",
      href: `/student/dashboard/information/${accountId}`,
      icon: User,
    },
    {
      name: "Messages",
      href: `/student/dashboard/message`,
      icon: MessageSquare,
    },
    {
      name: "Syllabus",
      href: `/student/syllabus`,
      icon: BookOpen,
    },
    {
      name: "Career",
      href: `/student/career`,
      icon: Briefcase,
    },
    {
      name: "News",
      href: `/student/news`,
      icon: Newspaper,
    },
  ];

  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("accountId");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Student Portal
              </h1>
              <p className="text-xs text-slate-500">Biomedical Department</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-blue-50 text-blue-700 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 transition-colors ${
                      active ? "text-blue-700" : "text-slate-500 group-hover:text-slate-700"
                    }`}
                  />
                  <span className="hidden lg:inline">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Profile and Mobile Menu */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button className="flex items-center gap-2 px-2" onClick={toggleMenu}>
                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <img src={studentProfile.avatar || "/placeholder.svg?height=32&width=32"} alt="Profile" className="rounded-full" />
                </div>
                <div className="hidden sm:flex flex-col items-start">
                  <span className="text-sm font-medium text-slate-900">{studentProfile.name || "Student"}</span>
                  <span className="text-xs text-slate-500">Student</span>
                </div>
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 w-56 bg-white border border-slate-200 rounded-md shadow-lg">
                  <div className="flex items-center gap-2 p-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <img src={studentProfile.avatar || "/placeholder.svg?height=32&width=32"} alt="Profile" className="rounded-full" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium">{studentProfile.name || "Student"}</p>
                      <p className="text-xs text-slate-500">{studentProfile.email}</p>
                    </div>
                  </div>
                  <hr />
                  <Link href={`/student/dashboard/information/${accountId}`} className="flex items-center p-2 hover:bg-gray-100">
                    <User  className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <div className="flex items-center p-2 hover:bg-gray-100">
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Academic Report</span>
                  </div>
                  <Link href={`/student/account/settings/${accountId}`} className="flex items-center p-2 hover:bg-gray-100">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <hr />
                  <button onClick={handleLogout} className="flex items-center p-2 text-red-600 hover:bg-gray-100">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="py-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className={`h-5 w-5 ${active ? "text-blue-700" : "text-slate-500"}`} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
