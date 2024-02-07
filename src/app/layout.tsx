import type { Metadata } from "next";
import "../styles/global.scss";
import Sidebar from "@/components/common/sidebar";
import Navigation from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Robin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/favicon.svg" />
      </head>
      <body>
        <main>
          <Sidebar />
          <div className="Page_container">
            <Navigation />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
