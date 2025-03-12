"use client"
import React, { useState } from 'react'

const Form = ({component, generate, TextComponent}) => {
    return(
        <div>
            <input type="text" placeholder='text here'/>
            <button className='bg-amber-500' onClick={generate}>Generate Component</button>
            {component.map((index) => {
                return(
                    <TextComponent index={index}/>
                )
            })}
        </div>
    )
}

const TextComponent = ({index}) => {
    return(
        <div key={index}>
            <input type="text" placeholder='generated input'/>
        </div>
    )
}
 
const Test = () => {
  const [component, setComponent] = useState([]);

  const generate = () => {
    const newComponent = TextComponent;
    setComponent((previousComponent) => [...previousComponent, newComponent])
  }
    return (
    <div>
        <Form component={component} generate={generate} TextComponent={TextComponent}/>
    </div>
  )
}

export default Test
