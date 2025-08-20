import CloseSidebar from "./Compontens/Header/CloseSidebar";
import Header from "./Compontens/Header/Header";
import Sidebar from "./Compontens/Header/Sidebar";
import "./globals.css";
import ReduxProvider from "./redux/providser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <div className="relative">
            <Sidebar />
            <CloseSidebar />
            <Header />
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
