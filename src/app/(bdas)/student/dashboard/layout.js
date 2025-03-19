import ProfileIcon from "@/app/components/global/profile_pic";
import StudentNavbar from "@/app/components/student/student_navbar";

export const metadata = {
    title: "student",
    description: "Student" // Corrected spelling here
};

export default function RootLayout({ children }) {
    return (
        <div lang="en">
                <ProfileIcon/>
                <StudentNavbar />
            {children}
        </div>
    );
}