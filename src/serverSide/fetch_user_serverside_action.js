"use server"
import { client } from "@/sanity/lib/client"

export async function FetchUserServerSideAction(studentId) {
  try {
    // Using the studentId from URL params
    const accountData = await client.fetch(`*[_type == "account" && _id == "${studentId}"]`)
    if (accountData && accountData.length > 0) {
      const email = accountData[0].email // Get the email from the account data
      const studentData = await client.fetch(`*[_type == "student" && email == "${email}"]`)
      if (studentData && studentData.length > 0) {
        return studentData[0] // Return the student info
      }
    }
    return null // Return null if no data found
  } catch (err) {
    console.error("Error fetching info:", err)
    throw err // Re-throw the error to be caught in the component
  }
}

