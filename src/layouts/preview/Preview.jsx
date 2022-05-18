const Preview = ({ className = "", children }) => {
  return <div className={`w-full h-full mx-auto ${className}`}>{children}</div>;
};

export default Preview;
