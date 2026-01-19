import { useMemo, useState } from "react";
import { flightData } from "../../data/flightData";
import { useNavigate } from "react-router";

const Seat = ({ seat, isSelected, onClick }) => {
    const isBooked = seat.booked;
    const isExit = seat.exitRow;
    const isXL = seat.legroom;
    let bgColor = 'bg-white border-2 border-gray-300';
    if (isBooked) {
        bgColor = 'bg-gray-300 border-gray-400 cursor-not-allowed';
    } else if (isSelected) {
        bgColor = 'bg-emerald-400 border-emerald-500';
    } else if (isExit) {
        bgColor = 'bg-emerald-50 border-emerald-300';
    } else if (isXL) {
        bgColor = 'bg-blue-50 border-blue-400';
    }

    return (
        <button
            onClick={() => !isBooked && onClick(seat)}
            disabled={isBooked}
            className={`w-12 h-12 rounded-lg ${bgColor} flex items-center justify-center text-xs font-medium transition-all hover:scale-105 disabled:hover:scale-100 disabled:opacity-60`}
        >
            <span className="text-gray-700">
                {seat.code.split('@')[0]}
            </span>

        </button>
    );
};
const FlightBooking = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [price, setPrice] = useState(0);
    const mapData = flightData.seatMap.map[0];
    const seatsByRow = useMemo(() => {
        const rows = {};
        mapData.seats.forEach((seat) => {
            if (!rows[seat.row]) rows[seat.row] = [];
            rows[seat.row].push(seat);
        });
        return rows;
    }, [mapData.seats]);
    const toggleSeat = (seat) => {
        const seatId = `${seat.row}-${seat.column}`;
        setSelectedSeats(seatId)
        setPrice(seat.amount)

    };
    const navigate = useNavigate();
    const closeModal = () => {
        navigate("/");
    };
    const totalCharge = price;
  

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] flex flex-col overflow-hidden">
                <div className="px-6 py-4 border-b flex justify-between items-center bg-white">
                    <h2 className="text-xl font-bold text-gray-800">Select Seat</h2>
                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 text-xl font-light flex items-center gap-1">
                        <span className="text-2xl">×</span>
                        <span className="text-sm">Close</span>
                    </button>
                </div>
                <div className="px-6 py-3 border-b bg-gray-50 flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-300 border border-gray-400 rounded"></div>
                        <span className="text-gray-600">Unavailable</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
                        <span className="text-gray-600">Free Seat</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <span className="text-gray-600">Out of policy</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-emerald-400 rounded"></div>
                        <span className="text-gray-600">Exit Row</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 font-medium">XL</span>
                        <span className="text-gray-600">Extra Legroom</span>
                    </div>
                </div>
                <div className="flex-1 overflow-auto bg-linear-to-b from-pink-50 to-pink-100 p-8">
                    <div className="max-w-md mx-auto">
                        <img src="src\assets\plane.svg" alt="" className="w-full h-full" />
                        <div className="space-y-3 bg-gray-50">
                            {Object.keys(seatsByRow).sort((a, b) => Number(a) - Number(b)).map((rowNum) => {
                                const isExitRow = seatsByRow[rowNum].some(s => s.
                                    exitRow === true);
                                return (
                                    <div key={rowNum} className="relative bg-gray-50 ">
                                        {isExitRow && (
                                            <>
                                                <div className="absolute -left-3 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                                    EXIT
                                                </div>
                                                <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold rotate-180" style={{ writingMode: 'vertical-rl' }}>
                                                    EXIT
                                                </div>
                                            </>
                                        )}
                                        <div className="flex items-center justify-center gap-3">
                                            <div className="flex gap-1">
                                                {seatsByRow[rowNum].filter(s => s.column <= 3).map(seat => (
                                                    <Seat
                                                        key={seat.code}
                                                        seat={seat}
                                                        isSelected={selectedSeats.includes(`${seat.row}-${seat.column}`)}
                                                        onClick={toggleSeat}
                                                    />
                                                ))}
                                            </div>
                                            <div className="w-8"></div>
                                            <div className="flex gap-1">
                                                {seatsByRow[rowNum].filter(s => s.column > 3).map(seat => (
                                                    <Seat
                                                        key={seat.code}
                                                        seat={seat}
                                                        isSelected={selectedSeats.includes(`${seat.row}-${seat.column}`)}
                                                        onClick={toggleSeat}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <img src="src\assets\planetail.svg" alt="tail" />
                    </div>
                </div>
                <div className="px-6 py-4 border-t bg-white flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-800">Seat Charges₹ {totalCharge}</span>
                        <button className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                            ?
                        </button>
                    </div>
                    <button
                        // onClick={() => console.log('Selected seats:', selectedSeats)}
                        className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 font-medium transition-colors"
                    >
                        Select
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlightBooking;