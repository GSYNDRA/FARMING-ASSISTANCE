import { useLocation } from "react-router-dom";
// import Menu from "./Menu";

function Layout({ children }) {
  const location = useLocation();

  const isAboutUsPage = location.pathname === "/about-us";
  const renderMenu = !isAboutUsPage;

  const renderFlexDiv = !isAboutUsPage ? (
    <div className="flex flex-row items-center justify-center">
      {/* {renderMenu && <Menu />} */}
      {children}
    </div>
  ) : (
    children
  );

  return renderFlexDiv;
}

export default Layout;
