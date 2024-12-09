export const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const formatDate = (dateString) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dateOfMonth = date.getDate();

  return `${day} ${dateOfMonth} ${month}`;
};

export const getCheckoutDate = (flightParams) => {
  if (!flightParams.returnDate || flightParams.returnDate.trim() === "") {
    const date = new Date(flightParams.date);
    date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  }
  return flightParams.returnDate;
};

export const formatNumber = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1).replace(/\.0$/, "") + "m";
  } else if (value >= 1000) {
    return (value / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  } else {
    return value.toString();
  }
};
