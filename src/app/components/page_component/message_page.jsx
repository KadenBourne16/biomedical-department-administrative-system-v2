"use client"
import React, { useState } from 'react'
import ChatSidebar from '../global/sidebar'
import ChatList from '../global/chat-list'

const MessagePage = () => {
    const [activeMenu, setActiveMenu] = useState("chats")

    const handleMenuChange = (menu) => {
        setActiveMenu(menu);
    }
  return (
    <div className='flex md:flex-row flex-col'>
        <div className='border-2 border-gray-400 text-center'>
            <ChatList activeMenu={activeMenu}/>
        </div>
        <div className='border-2'>
            <h1>Itmes</h1>
        </div>
        <div className='mr-20'>
            <ChatSidebar activeMenu={activeMenu} onMenuChange={handleMenuChange}/>
        </div>
    </div>
  )
}

export default MessagePage
