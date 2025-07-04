import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Menu from "../common/Menu";
import Footer from "../common/Footer";

const Layout = () => (
  <div className="min-h-screen flex flex-col overflow-hidden">
    <Header />
    <Menu />
    <main className="bg-gray-200 overflow-auto">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
