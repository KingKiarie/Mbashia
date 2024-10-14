import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./Theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Mbashia Portfolio",
  description:
    "|certified fullstack developer with a strong vision and mission",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body
          className={`font-bebas antialiased min-h-screen bg-cover bg-fixed`}
          style={{
            // backgroundImage: `url("/background/bg.png")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: "10",
          }}
        >
          {/* <CustomCursor /> */}
          <Navbar />
          <main className="w-full min-h-screen flex flex-col items-center justify-center">
            {children}
          </main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
