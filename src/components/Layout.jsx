import { useLocation } from "react-router-dom";
// import Menu from "./Menu";

function Layout({ children }) {
  const location = useLocation();

  const isAboutUsPage = location.pathname === "/about-us";
  const isLoginPage = location.pathname === "/auth/login";
  const renderLayout = !isAboutUsPage && !isLoginPage;

  return renderLayout ? (
    <div className="flex flex-row items-center justify-center">
      {/* {renderMenu && <Menu />} */}
      {children}
    </div>
  ) : (
    children
  );
}

export default Layout;
