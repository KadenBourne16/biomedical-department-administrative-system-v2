"use client"
import React, { useState } from 'react'
import {Search} from 'lucide-react'

const ChatList = ({activeMenu}) => {
  const [searchQuery, setSearchQuery] = useState("")

  const filterItmes = () => {
    console.log("Filter")
  }

  const getTitle = () => {
    switch(activeMenu){
      case "chats":
        return "Chats"
      case "students":
        return "Students"
      case "lecturers":
        return "Lecturers"
      default: 
       return "Chats"
    }
}

const searchChatAccount = () => {
  console.log("Searching Account")
}


  return (
    <div className='flex flex-col h-full'>
      <div className='border-b border-b-gray-600 text-start'>
        <h2 className="text-2xl font-semibold text-gray-800">{getTitle()}</h2>
        <div className="mt-3 relative">
          <input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100 border-0 px-9 py-2"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default ChatList;
