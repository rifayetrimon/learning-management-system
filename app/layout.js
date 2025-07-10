"use client";

import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-2xl min-h-[90vh] bg-neutral-50 rounded-2xl shadow-lg flex flex-col relative overflow-hidden">
            <div
              className={`flex-1 p-6 pb-20 overflow-y-auto ${
                isLoginPage ? "flex items-center justify-center" : ""
              }`}
            >
              {children}
            </div>
            {!isLoginPage && <BottomNav />}
          </div>
        </div>
      </body>
    </html>
  );
}
