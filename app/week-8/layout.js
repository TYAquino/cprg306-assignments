import { AuthContextProvider } from "./shopping-list/_utils/auth-context";

const Layout = ({ children }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
