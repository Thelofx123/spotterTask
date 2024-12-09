export const FlightSideBarButton = ({ label, link }) => {
  return (
    <div className="w-full py-[10px] mt-[10px] rounded-2xl flex items-center justify-center bg-transparent border-[1px] border-[#5F6368] text-[#8ab4f8] cursor-pointer">
      <a href={link || null}>{label}</a>
    </div>
  );
};
