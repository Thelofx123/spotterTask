export const Slider = ({ header, label, min, max, value, onChange }) => {
  return (
    <div className="w-full border-b-[1px] border-[#5F6368]">
      <div className="py-[20px]">
        <label className="block mb-2">{header}</label>
        <p className="text-[12px] text-[#9aa0a6] py-[10px]">{label}</p>
        <input
          type="range"
          className="w-full"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
};
