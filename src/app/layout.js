import React from "react";
import { Martian_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AuthProvider from "@/context/auth";

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${martianMono.variable}   antialiased gap-10 md:p-14 flex flex-col w-full md:w-[80%] lg:w-[70%] xl:w-[60%]  mx-auto h-dvh p-3 md:justify-center `}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
