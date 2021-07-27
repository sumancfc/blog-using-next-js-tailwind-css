import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      ---footer here---
    </>
  );
};

export default Layout;
