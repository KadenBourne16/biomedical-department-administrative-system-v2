import ProfileIcon from "@/app/components/global/profile_pic";
import StudentNavbar from "@/app/components/student/student_navbar";
import AuthorisationProvider from "@/app/components/global/authorised_context";

export const metadata = {
    title: "student",
    description: "Student" // Corrected spelling here
};

export default function RootLayout({ children }) {
    return (
        <div lang="en">
                <AuthorisationProvider>
                    <ProfileIcon/>
                    <StudentNavbar />
                    {children}
                </AuthorisationProvider>
        </div>
    );
}