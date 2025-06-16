import { StudentProvider } from "./components/context/admin_student_context";
import "./globals.css";

export const metadata = {
  title: "B-D-A-S",
  description: "Koforidua Technical University Biomedical Engineering Department Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StudentProvider>
          {children}
        </StudentProvider>
      </body>
    </html>
  );
}
