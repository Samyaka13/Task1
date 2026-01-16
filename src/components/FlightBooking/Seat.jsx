const Seat = ({ seat, isSelected, onClick }) => {
  let baseClasses =
    "relative w-8 h-8 rounded-t-md border flex items-center justify-center text-[10px] font-bold transition-colors m-1";
  if (seat.booked) {
    baseClasses += " bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed";
  } else if (!seat.inPolicy) {
    baseClasses += " bg-red-500 border-red-600 text-white cursor-not-allowed";
  } else if (isSelected) {
    baseClasses += " bg-indigo-600 border-indigo-700 text-white";
  } else if (seat.legroom) {
    baseClasses += " bg-blue-50 border-blue-400 text-blue-700";
  } else if (seat.exitRow) {
    baseClasses += " bg-emerald-50 border-emerald-400 text-emerald-700";
  } else {
    baseClasses += " bg-white border-gray-300 hover:bg-indigo-50 text-gray-700";
  }

  const handleClick = () => {
    if (!seat.booked && seat.inPolicy && onClick) {
      onClick(seat);
    }
  };
  const seatLabel = seat.code.split("@")[0];
  return (
    <div
      className={baseClasses}
      onClick={handleClick}
      title={
        seat.booked
          ? "Booked"
          : `${seatLabel} • ₹${seat.amount}`
      }
    >
      {seatLabel}

      {seat.legroom && !seat.booked && (
        <span className="absolute bottom-0 right-0 text-[8px] font-bold text-blue-700">
          XL
        </span>
      )}
    </div>
  );
};

export default Seat;
