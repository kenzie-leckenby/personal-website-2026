import type { Metadata } from "next";
import { Domine  } from "next/font/google";
import "./globals.css";
import ResponsiveAppBar from "@/components/responseAppBar";
import MuiThemeProvider from "@/components/themeProvider";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

const domine = Domine({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kenzie Leckenby",
  description: "An updated personal website for the year of 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${domine.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <ResponsiveAppBar />
            {children}
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
