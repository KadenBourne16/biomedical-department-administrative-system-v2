"use server"
import redisClient from "@/app/utils/redis/client";
import { client } from "@/sanity/lib/client";

export const FetchStudentInfoAdmin = async () => {
    try {
        const fetch_student_data_info = await client.fetch(`*[_type == "student"]`);
            return {
                type: "success",
                success: true,
                message: "Fetched all students successfully",
                data: fetch_student_data_info
            };   
    } catch (err) {
        console.error(err);
        return {
            type: "error",
            success: false,
            message: "Failed to fetch students",
            error: err.message || err
        };
    }
}


// export const FetchStudentInfoAdmin = async () => {
//     try {
//         const studentData = await redisClient.get("students");
//         if (studentData !== null) {
//             console.log("cache hit")
//             return {
//                 type: "success",
//                 success: true,
//                 message: "cache hit",
//                 data: JSON.parse(studentData)
//             };
//         } else {
//             const fetch_student_data_info = await client.fetch(`*[_type == "student"]`);
//             await redisClient.set("students", JSON.stringify(fetch_student_data_info));
//             console.log("cache miss")
//             return {
//                 type: "success",
//                 success: true,
//                 message: "Fetched all students successfully",
//                 data: fetch_student_data_info
//             };
//         }
//     } catch (err) {
//         console.error(err);
//         return {
//             type: "error",
//             success: false,
//             message: "Failed to fetch students",
//             error: err.message || err
//         };
//     }
// }