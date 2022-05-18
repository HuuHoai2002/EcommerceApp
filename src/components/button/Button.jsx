const Button = ({
  children,
  className,
  onClick,
  title = "",
  useIcon = false,
}) => {
  return (
    <button
      className={`min-h-[40px] inline-flex items-center justify-center bg-cpink text-white hover:opacity-80 transition-all ${className} ${
        useIcon ? "min-h-0 flex items-center justify-center p-2 rounded-full bg-transparent" : ""
      }`}
      onClick={onClick}>
      {children && children}
      {title && title}
    </button>
  );
};

export default Button;
