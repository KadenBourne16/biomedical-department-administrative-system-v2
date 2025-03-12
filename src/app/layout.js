
import "./globals.css";

export const metadata = {
  title: "B-D-A-S",
  description: "Koforidua Technical University Biomedical Engineering Department Management App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
