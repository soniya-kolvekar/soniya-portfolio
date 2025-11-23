import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Soniya Kolvekar | Portfolio",
  description: "Portfolio website of Soniya Nitin Kolvekar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        {/* REMOVE max-w wrapper from here */}
        <main className="pt-24 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
