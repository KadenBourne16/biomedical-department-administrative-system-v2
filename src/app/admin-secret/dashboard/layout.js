import AdminNavbar from "@/app/components/admin_navbar"

export const metadata = {
    title: "admin-dashboard",
    description: "biomed department admin previledges"
}

export default function RootLayout({children}){
    return(
        <div lang="en">
            <div className="flex flex-col">
                <AdminNavbar/>
                {children}
            </div>
        </div>
    )
}