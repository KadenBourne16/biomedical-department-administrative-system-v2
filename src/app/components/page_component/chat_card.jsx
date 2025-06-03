import React from "react";

const ChatCard = ({ users = [] }) => {
  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user._id}
            className="flex items-center p-4 border border-gray-200 rounded-lg mb-3 bg-white shadow-sm"
          >
            <div className="flex-1">
              <div className="font-semibold text-base">
                <h1>
                  {user.firstName
                    ? `${user.firstName} ${user.lastName}`
                    : "unknown"}
                </h1>
              </div>
              <div className="text-gray-500 text-sm">
                Account: {user.accountType}
              </div>
              <div className="mt-1 text-gray-300">
                {user.lastmessage
                  ? user.lastmessage
                  : "missing lastmessage"}
              </div>
            </div>
            <div className="text-right ml-4">
              <div className="text-xs text-gray-400">{user.time}</div>
              <span
                className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                  user.isReceived
                    ? "bg-cyan-100 text-cyan-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {user.isReceived ? "Received" : "Sent"}
              </span>
            </div>
          </div>
        ))
      ) : (
        <div>No Users Available</div>
      )}
    </div>
  );
};

export default ChatCard;