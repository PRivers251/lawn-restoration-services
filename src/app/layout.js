
import "./globals.css";
import Header from "./components/header/Header";

export const metadata = {
  title: "Lawn Restoration Services",
  description: "Local full-service lawn care company, providing for your needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
