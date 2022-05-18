import { Button } from "../../../components/button";
import image32 from "../../../images/image32.png";
import image33 from "../../../images/image33.png";

const BannerItem = () => {
  return (
    <div className="w-full h-[580px] bg-cbg">
      <div className="h-full flex items-center justify-between">
        <div className="w-[387px] h-[387px] mb-auto">
          <img
            srcSet={`${image32} 2x`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center flex-col gap-y-[27px]">
          <div className="flex flex-col gap-y-3 max-w-[500px]">
            <p className="leading-7 text-cpink font-medium">
              Best Furniture For Your Castle....
            </p>
            <h1 className="text-4xl leading-[60px] text-black font-bold">
              New Furniture Collection Trends in 2022
            </h1>
            <p className="leading-7 text-copurple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
          </div>
          <div className="">
            <Button title="Shop Now" className="w-[163px] rounded-sm" />
          </div>
        </div>
        <div className="w-[450px] h-[450px]">
          <img
            srcSet={`${image33} 2x`}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
