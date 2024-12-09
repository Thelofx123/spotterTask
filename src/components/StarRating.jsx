import React from "react";

export const StarRating = ({ value }) => {
  const maxStars = 5;

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < value ? "#FFD700" : "#5F6368"}
          stroke="transparent"
          strokeWidth="1"
          className="w-[12px] h-[12px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2.25l2.917 7.164 7.584.554c.686.05.972.89.45 1.337l-5.778 4.891 1.975 7.387c.19.711-.601 1.277-1.2.84L12 19.537l-6.048 4.896c-.599.437-1.39-.129-1.2-.84l1.975-7.387-5.778-4.891c-.522-.447-.236-1.287.45-1.337l7.584-.554L12 2.25z"
          />
        </svg>
      ))}
    </div>
  );
};
