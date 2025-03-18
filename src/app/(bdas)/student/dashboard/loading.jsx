'use client'
import React, { useState, useEffect } from 'react';
import "@/app/styles/global/loading_animation.css"
import { FaUserGraduate, FaChalkboardTeacher, FaChartLine } from 'react-icons/fa';

const LoadingScreen = () => {
  const [icon, setIcon] = useState('student');
  const [showDot, setShowDot] = useState(true);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowDot(false);
      setShowIcon(true);
      setTimeout(() => {
        setShowDot(true);
        setShowIcon(false);
        setIcon((prevIcon) => {
          switch (prevIcon) {
            case 'student':
              return 'lecturer';
            case 'lecturer':
              return 'statistics';
            case 'statistics':
              return 'student';
            default:
              return 'student';
          }
        });
      }, 1000);
    }, 3610);

    return () => clearInterval(interval);
  }, [icon]);

  return (
    <div className="loading-screen">
      {showDot && (
        <div className="dot-container">
          <div className="dot" />
        </div>
      )}
      {showIcon && (
        <div className="icon-container">
          {icon === 'student' && <FaUserGraduate size={48} />}
          {icon === 'lecturer' && <FaChalkboardTeacher size={48} />}
          {icon === 'statistics' && <FaChartLine size={48} />}
        </div>
      )}
      <p className='font-bold text-blue-500'>Loading...</p>
    </div>
  );
};

export default LoadingScreen;