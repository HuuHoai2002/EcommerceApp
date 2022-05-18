const Input = ({ className }) => {
  return (
    <div>
      <input
        type="text"
        className={`w-full ${className} outline-none border border-cborder h-[40px] px-3 py-2`}
      />
    </div>
  );
};

export default Input;
