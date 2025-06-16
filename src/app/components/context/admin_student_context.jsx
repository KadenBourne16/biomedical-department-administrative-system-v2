"use client"
import React from 'react'
import { useContext, createContext, useState } from 'react'

const StudentContext = createContext(undefined);

export function StudentProvider({ children }) {
    const [data, setData] = useState("");
    return <StudentContext.Provider value={{ data, setData }}>{children}</StudentContext.Provider>;
}

export const useStudent = () => {
    const context = useContext(StudentContext);

    if(context === undefined){
        throw new Error("useName must be within a name provider")
    }

    return context;
}