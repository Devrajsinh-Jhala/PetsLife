import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animal Haven",
  description:
    "Animal haven is a platform built to provide pet services, raise awareness about stray anmals, and help animal lovers to connect, communicate and learn on various topics and events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system">
            <div className="max-w-[1120px] selection:bg-[#eea727] scrollbar-hide w-screen h-screen overflow-x-hidden mx-auto">
              <Navbar />
              {children}
              {/* <Footer /> */}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
