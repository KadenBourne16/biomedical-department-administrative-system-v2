"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Newspaper,
  BookOpen,
  Bell,
  Search,
  Menu,
  X,
  ChevronDown,
  LogOut,
  Settings,
  User,
  ChevronUp,
} from "lucide-react";

const AdminNavbar = () => {
  const [adminId, setAdminId] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const param = useParams();

  useEffect(() => {
    const admin_id = localStorage.getItem("admin_id");
    setAdminId(admin_id || "");
  }, []);

  const navItems = [
    {
      name: "Dashboard",
      href: `admin-secret/dashboard/dashboard/${adminId}`,
      icon: LayoutDashboard,
    },
    {
      name: "Students",
      href: `/admin-secret/dashboard/student/${adminId}`,
      icon: Users,
    },
    {
      name: "Lecturers",
      href: `/admin-secret/dashboard/lecturer/${adminId}`,
      icon: GraduationCap,
    },
    {
      name: "News",
      href: `/admin-secret/dashboard/news/${adminId}`,
      icon: Newspaper,
    },
    {
      name: "Courses",
      href: `/admin-secret/dashboard/courses/${adminId}`,
      icon: BookOpen,
    },
  ];

  const isActive = (path) => {
    return pathname === path || pathname?.startsWith(`${path}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center">
            <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-md flex items-center justify-center mr-2">
              <BookOpen className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              BioMed Admin
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
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
                className={`group flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <Icon className={`h-4 w-4 ${active ? "text-blue-700" : "text-slate-500 group-hover:text-slate-700"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Search and Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="search"
              placeholder="Search..."
              className="w-40 lg:w-60 h-9 rounded-md border border-slate-200 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <button className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white rounded-full">3</span>
          </button>

          <div className="relative">
            <button
              className="flex items-center gap-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <img src="/placeholder.svg?height=32&width=32" alt="Admin" className="rounded-full" />
              </div>
              <span className="hidden lg:inline-flex font-medium">Admin User</span>
              {mobileMenuOpen ? (<ChevronUp className="h-4 w-4 text-slate-500" />):(<ChevronDown className="h-4 w-4 text-slate-500" />)}
            </button>
            {mobileMenuOpen && (
              <div className="absolute right-0 w-56 bg-white border border-slate-200 rounded-md shadow-lg">
                <div className="flex items-center gap-2 p-2">
                  <div className="flex flex-col space-y-0.5">
                    <p className="text-sm font-medium">Admin User</p>
                    <p className="text-xs text-slate-500">admin@biomedical.edu</p>
                  </div>
                </div>
                <hr className="text-gray-200"/>
                <Link href="/profile" className="flex items-center p-2 text-sm hover:bg-gray-100">
                  <User  className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
                <Link href="/settings" className="flex items-center p-2 text-sm hover:bg-gray-100">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
                <hr className="text-gray-200"/>
                <button className="flex items-center p-2 text-sm text-red-600 hover:bg-gray-100">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container py-2 px-4">
            <div className="relative my-2">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="search"
                placeholder="Search..."
                className="w-full h-9 rounded-md border border-slate-200 pl-9 pr-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <nav className="flex flex-col space-y-1 mt-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors ${
                      active ? "bg-blue-50 text-blue-700" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
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
    </header>
  );
};

export default AdminNavbar;
