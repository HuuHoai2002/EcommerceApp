const OfferCard = ({ data }) => {
  return (
    <div className="p-7 use-shadow min-h-[250px]">
      <div className="h-full flex flex-col items-center justify-between gap-y-5">
        <div>{data.icon}</div>
        <div className="flex flex-col gap-y-5">
          <h1 className="text-center text-cheading text-[22px] leading-7 font-bold">
            {data.title}
          </h1>
          <p className="text-center leading-7 text-ccontent">{data.content}</p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
