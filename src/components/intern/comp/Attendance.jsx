import { useState } from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const attendanceData = {
  1: "present",
  2: "present",
  3: "present",
  4: "present",
  7: "present",
  8: "present",
  9: "present",
  10: "present",
  11: "absent",
  15: "absent",
  17: "absent",
  19: "absent",
};

export default function AttendanceDashboard() {
  const [selectedDate, setSelectedDate] = useState(19);
  const [status, setStatus] = useState("not-marked");
  const [punchIn, setPunchIn] = useState(null);
  const [punchOut, setPunchOut] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setStatus(attendanceData[date] || "not-marked");
  };

  const handlePunchIn = () => {
    setStatus("present");
    setPunchIn("10:20 AM");
  };

  const handlePunchOut = () => {
    setPunchOut("6:20 PM");
  };

  const getColor = (date) => {
    if (attendanceData[date] === "present") return "bg-green-400 text-white";
    if (attendanceData[date] === "absent") return "bg-red-400 text-white";
    return "bg-white border";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="font-semibold text-lg mb-4">Attendance</h1>

      <div className="grid grid-cols-3 gap-6">
       
        <div className="col-span-2 bg-white p-5 rounded-lg border">
          <div className="flex justify-between mb-4">
            <button className="px-3 py-1 bg-blue-500 text-white rounded">‹</button>
            <h2 className="font-medium">January, 2026</h2>
            <button className="px-3 py-1 bg-gray-200 rounded">›</button>
          </div>

  
          <div className="grid grid-cols-7 gap-2 mb-3">
            {days.map((day) => (
              <div key={day} className="text-center text-sm border p-2 rounded-lg font-medium">
                {day}
              </div>
            ))}
          </div>

     
          <div className="grid grid-cols-7 gap-2">
            {[...Array(31)].map((_, i) => {
              const date = i + 1;
              return (
                <button
                  key={date}
                  onClick={() => handleDateClick(date)}
                  className={`h-10 w-10 rounded-full text-sm flex items-center justify-center ${getColor(
                    date
                  )}`}
                >
                  {date}
                </button>
              );
            })}
          </div>

          <div className="flex gap-4 mt-4 text-sm">
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 bg-green-400 rounded-full"></span> Present
            </span>
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 bg-red-400 rounded-full"></span> Absent
            </span>
          </div>
        </div>

       \
        <div className=" p-5 rounded-lg border">
          <h3 className="font-medium mb-2">January, 2026</h3>
          <p className="text-sm mb-2">
            Status :{" "}
            <span
              className={`font-medium ${
                status === "present"
                  ? "text-green-500"
                  : status === "absent"
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {status}
            </span>
          </p>

           {status === "present" && (
            <>
              <p className="text-sm">Punch In: {punchIn || "-"}</p>
              <br/>
              <p className="text-sm">Punch Out: {punchOut || "-"}</p>
            </>
          )}
        </div>

       
      </div>
 
 
      <div className="bg-white border mt-6 p-5 rounded-lg">
        <p className="text-sm mb-2">Today: Jan {selectedDate}, 2026</p>
        <p className="text-sm mb-4">Status: {status}</p>

        {!punchIn ? (
          <button
            onClick={handlePunchIn}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Punch In
          </button>
        ) : (
          <button
            onClick={handlePunchOut}
            className="w-full bg-green-600 text-white py-2 rounded"
          >
            Punch Out
          </button>
        )}
      </div>
    </div>
  );
}
