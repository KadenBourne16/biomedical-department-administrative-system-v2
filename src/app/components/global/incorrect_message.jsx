import React from 'react'

const IncorrectMessage = ({props}) => {
  return (
    <div className='flex flex-row bg-black'>
       <div className='h-auto w-auto bg-white text-red-400'>
            <h1>Incorrect {props.error_name} </h1>
       </div>
    </div>
  )
}

export default IncorrectMessage;
