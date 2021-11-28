import Header from "../header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div>विश्वका निख्लाम कविताहरू</div>
    </>
  );
};

export default Layout;
