import React from 'react'
import Image from 'next/image'

const ProfileIcon = () => {
  return (
    <div className='flex lg:flex-row flex-col mt-5 pr-2'>
         <h1>Student</h1>
        <Image src="/public/ProfilePic.jpg" height={100} width={100} alt="Profile"/>
    </div>
  )
}

export default ProfileIcon;
