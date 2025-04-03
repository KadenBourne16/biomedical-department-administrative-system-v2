import React, { useState } from 'react'
import { MessageSquare, Users, BookOpen, Search, Archive, Settings, User } from "lucide-react"

const ChatSidebar = ({ activeMenu, onMenuChange }) => {
  const menuItems = [
    { id: "chats", icon: MessageSquare, label: "Chats" },
    { id: "students", icon: Users, label: "Students" },
    { id: "lecturers", icon: BookOpen, label: "Lecturers" },
    { id: "search", icon: Search, label: "Search" },
    { id: "archived", icon: Archive, label: "Archived" },
    { id: "settings", icon: Settings, label: "Settings" },
    { id: "profile", icon: User, label: "Profile" },
  ]
  
  return (
    <div className="fixed lg:left-0 lg:top-10 bottom-0 left-0 lg:h-full h-12 w-full lg:w-16 bg-[#2541B2] flex md:flex-col items-center lg:pt-30">
      <div className="flex lg:flex-col flex-row lg:items-center lg:space-y-12 space-x-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              className={`rounded-lg p-3 ${activeMenu === item.id ? "p-3 rounded-lg bg-white text-[#2541B2]" : "text-white hover:bg-white/20 hover:text-white"}`}
              onClick={() => {onMenuChange(item.id)}}
              aria-label={item.label}
            >
              <Icon size={20} />
              <span className="absolute left-full ml-2 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ChatSidebar;
