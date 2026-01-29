import { useState } from "react";
import { Bell, Eye, Upload, X } from "lucide-react";

export default function Dashboard() {
  const [attendance, setAttendance] = useState(92);
  const [taskScore, setTaskScore] = useState(8.5);
  const [rating, setRating] = useState(4.5);
  const [punchedIn, setPunchedIn] = useState(false);

  const mentorFeedback = [
    "Great Progress so far!",
    "Your UI designs are clean and improving consistently.",
    "Focus more on spacing and accessibility in next tasks.",
  ];

  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* HEADER */}
        <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-[14px] px-4  gap-4">
          <div>
            <h1 className="text-lg sm:text-md font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="text-md  text-gray-500">
              Good Morning, Rahul
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4  w-full lg:w-auto">
            <div className="flex items-center gap-4">
           
            <Bell className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
            <div className="h-9 w-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
              SI
            </div>
            </div>
          </div>
        </div>

   <div className="p-6">
       {/* ATTENDANCE */}
      <h2 className="text-sm font-medium mb-2">Attendance</h2>
      <div className="border-2 border-blue-500 rounded-lg p-5 bg-white mb-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 bg-green-500 rounded-full"></span>
          <span className="font-semibold text-lg">{attendance}%</span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {attendance > 90 ? "Excellent Attendance" : "Needs Improvement"}
        </p>
      </div>

      {/* TASK PERFORMANCE */}
      <h2 className="text-sm font-medium mb-2">Task Performance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-1">
            ⭐ <span className="font-medium">Task Score</span>
          </div>
          <p className="text-lg font-semibold">{taskScore} / 10</p>
        </div>

        <div className="bg-white border rounded-lg p-5">
          <div className="flex items-center gap-2 mb-1">
            ⭐ <span className="font-medium">Overall Rating</span>
          </div>
          <p className="text-lg font-semibold">{rating} / 5</p>
        </div>
      </div>

      {/* MENTOR FEEDBACK */}
      <h2 className="text-sm font-medium mb-2">Mentor Feedback</h2>
      <div className="bg-white border rounded-lg p-5 mb-10">
        <ul className="space-y-2 text-sm text-gray-700">
          {mentorFeedback.map((item, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-blue-500">✔</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* PUNCH IN */}
      <div className="flex justify-center">
        <button
          disabled={punchedIn}
          onClick={() => setPunchedIn(true)}
          className={`px-10 py-2 rounded-lg text-white transition
            ${
              punchedIn
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {punchedIn ? "Punched In" : "Punch In"}
        </button>
      </div>

   </div>
    </div>
  );
}
