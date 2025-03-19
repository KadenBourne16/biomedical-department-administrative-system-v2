import React from 'react';

function MessagingPage() {
  return (
    <div className="flex h-screen">
      <div className="left-sidebar bg-[#2541b2] w-60 text-white p-4">
        <div className="logo mb-4">
          <img src="logo.png" alt="Logo" className="w-10 h-10" />
        </div>
        <ul className="menu-items list-none p-0 m-0">
          <li className="mb-4 flex items-center">
            <i className="fas fa-comment text-[#2541b2] mr-4"></i>
            <span>Chat</span>
          </li>
          <li className="mb-4 flex items-center">
            <i className="fas fa-star text-[#2541b2] mr-4"></i>
            <span>Starred Messages</span>
          </li>
          <li className="mb-4 flex items-center">
            <i className="fas fa-archive text-[#2541b2] mr-4"></i>
            <span>Archived Chats</span>
          </li>
          <li className="mb-4 flex items-center">
            <i className="fas fa-cog text-[#2541b2] mr-4"></i>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="right-sidebar w-80 bg-gray-100 p-4">
        {/* Right sidebar content goes here */}
      </div>
      <div className="main-content flex-1 p-4">
        {/* Main content goes here */}
      </div>
    </div>
  );
}

export default MessagingPage;
