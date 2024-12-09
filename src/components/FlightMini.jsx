export const FlightMini = ({ data, price }) => {
  const durationHours = Math.floor(data?.durationInMinutes / 60);
  const durationMinutes = data?.durationInMinutes % 60;
  return (
    <div className="w-full flex  py-[10px] items-center">
      <div className="w-[24px] h-[24px] flex items-center mr-[10px]">
        <img src={"https://logos.skyscnr.com/images/airlines/favicon/CA.png"} />
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex items-center justify-between">
          <p className="text-[14px]">{data?.operatingCarrier?.name}</p>
          <p className="text-[#4f4f] text-[14px]">US{price?.formatted}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-[12px]">
            Non-stop * {durationHours}hrs {durationMinutes}min *{" "}
            {data?.origin?.displayCode}-{data?.destination?.displayCode}
          </p>
          <p className="text-white text-[12px]">Round trip</p>
        </div>
      </div>
    </div>
  );
};
