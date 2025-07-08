import "./globals.css";
import BottomNav from "@/components/layout/BottomNav";
import { AllMenuDrawer } from "../components/layout/AllMenuDrawer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-full max-w-2xl min-h-[80vh] bg-neutral-50 rounded-2xl shadow-lg flex flex-col relative overflow-hidden">
            <div className="flex-1 p-6 pb-20 overflow-y-auto">{children}</div>
            <BottomNav />
          </div>
        </div>
      </body>
    </html>
  );
}
