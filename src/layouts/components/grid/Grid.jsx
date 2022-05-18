const Grid = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full grid grid-cols-4 gap-6 ${className}`}>
      {children && children}
    </div>
  );
};

export default Grid;
