const Layout = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-[1177px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
