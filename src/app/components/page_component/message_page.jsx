"use client"
import React, { useState, useEffect } from 'react'
import ChatSidebar from '../global/sidebar'
import {Search} from 'lucide-react'
import ChatCard from './chat_card'
import { fetchAllAccounts } from "@/app/utils/functions/fetch_all_accounts";

const MessagePage = () => {
    const [activeMenu, setActiveMenu] = useState("chats")
    const [searchQuery, setSearchQuery] = useState("")
    const [users, setUsers] = useState([])


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

    useEffect(() => {
    const theActiveMenu = activeMenu;
      const getStudents = async () => {
        try {
          
        } catch (err) {
          console.error("An error occurred trying to fetch students", err);
        }
      };
    getStudents();
    }, [])

    const filterItems = () => {
          console.log("Filter")
          //Filter logic can be implemented here   
    }

    const handleMenuChange = (menu) => {
        setActiveMenu(menu);
    }

  return (
    <div className='flex md:flex-row flex-col'>
        <div className='text-center lg:ml-20 p-4 h-screen rounded-2xl '>
             <div className='flex flex-col'>
                <div className='text-start'>
                    <h2 className="text-2xl font-semibold text-gray-800">{getTitle()}</h2>
                </div>
            </div>
            <div className="w-full ">
            <input
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-100 border-0 px-9 py-2 w-full"
            />
            </div>
        <div className='flex flex-col mt-6'>
            <ChatCard users={users}/>
        </div>
        </div>
        <div className='border-l-2 border-gray-200'>
           {/*
            1. Display the list of chats, students, or lecturers based on the active menu
            2. Implement the search functionality to filter the displayed items based on the search query
           */}
        </div>
        <div className=''>
            <ChatSidebar activeMenu={activeMenu} onMenuChange={handleMenuChange}/>
        </div>
    </div>
  )
}

export default MessagePage
