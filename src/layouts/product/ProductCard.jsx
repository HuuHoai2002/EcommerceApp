import { Button } from "../../components/button";

const ProductCard = () => {
  return (
    <div className="flex flex-col use-shadow cursor-pointer group ">
      <div className="bg-cbgcard h-[200px] relative">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/18247514/media/a567a2e47559db2d934d78f898ce78af.png?compress=1&resize=1200x900&vertical=top"
          className="w-full h-full object-cover"
          alt=""
        />
        <div className="absolute bottom-3 left-2/4 -translate-x-2/4 opacity-0 group-hover:opacity-100 transition-all">
          <Button
            title="View Details"
            className="text-xs min-h-0 px-3 py-2 rounded-sm bg-cgreen "
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-y-3 py-4 bg-white transition-all group-hover:bg-cbgcard">
        <h1 className="text-cpink text-lg leading-7 font-bold">
          Cantilever chair
        </h1>
        <div className="flex items-center gap-x-2">
          <div className="w-[14px] h-[4px] rounded-[10px] bg-[#05E6B7]"></div>
          <div className="w-[14px] h-[4px] rounded-[10px] bg-[#F701A8]"></div>
          <div className="w-[14px] h-[4px] rounded-[10px] bg-[#00009D]"></div>
        </div>
        <span className="text-sm text-cnaviblue font-medium">
          Code - Y523201
        </span>
        <span className="text-sm text-cnaviblue font-medium">$42.00</span>
      </div>
    </div>
  );
};

export default ProductCard;
