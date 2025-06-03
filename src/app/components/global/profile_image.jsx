"use client"
import { GetProfileImage } from '@/server/get_profile_image';
import React, { useState } from 'react'
import { useEffect } from 'react';


const ProfileImage = ({account_type}) => {
    const [image, setImage] = useState("");
    const [id , setId] = useState("")
    

    useEffect(() => {
        setId(localStorage.getItem("student_indexNo"));
        const getProfileImage = async() => {
            const getProfileImage_response = await GetProfileImage(account_type, id);
            console.log(getProfileImage_response)
            setImage(getProfileImage_response.image);
        }

        getProfileImage(account_type, id);
    }, [])
    
  return (
    <div>
        <img src="/ProfilePic.jpg" alt="Profile Picture of Student" className="h-full w-full" />
    </div>
  )
}

export default ProfileImage