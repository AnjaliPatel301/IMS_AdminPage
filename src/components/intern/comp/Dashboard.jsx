import { useState } from "react";
import {
  BellIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import {
  CheckSquare, Bell, Eye, Users, Edit, UserPlus, UserCheck, ClipboardList, Award, GraduationCap, ChevronDown
} from 'lucide-react';

export default function Dashboard() {
  const [attendance, setAttendance] = useState("Not Marked");
  const [page, setPage] = useState(1);

  const [activities, setActivities] = useState([
    {
      activity: "Attendance marked",
      time: "Today 9:30 AM",
      status: "Present",
      color: "green",
    },
    {
      activity: 'Task "UI Wireframe"',
      time: "Yesterday 6:10",
      status: "Submitted",
      color: "blue",
    },
    {
      activity: "Feedback received",
      time: "2 days ago",
      status: "Viewed",
      color: "gray",
    },
  ]);

  /* -------- Functions -------- */

  const markAttendance = () => {
    setAttendance("Present");

    setActivities([
      {
        activity: "Attendance marked",
        time: "Just now",
        status: "Present",
        color: "green",
      },
      ...activities,
    ]);
  };

  const nextPage = () => {
    if (page < 10) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const [filter, setFilter] = useState("all");

  <div className="flex justify-between items-center">
    <h2 className="font-semibold mb-4">Recent Activity</h2>

    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border rounded px-3 py-1 text-sm"
    >
      <option value="all">View All</option>
      <option value="Rahul">Rahul</option>
      <option value="Ankit">Ankit</option>
    </select>
  </div>
  {
    activities
      .filter(item => filter === "all" || item.user === filter)
    .map((item, index) => (
      <ActivityRow key={index} {...item} />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 ">

      <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-[14px] px-4  gap-4">
        <div>
          <h1 className="text-lg sm:text-md font-semibold text-gray-800">
            Dashboard
          </h1>
          <p className="text-md  text-gray-500">
            Good Morning, Rahul | Internship: Jan–Mar 2026
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


      <div className="p-5">

        <div className="grid  md:grid-cols-4 gap-4 mb-6 mt-5">
          <StatCard
            icon={<ClockIcon className="h-6 w-6 text-blue-500" />}
            title="Attendance"
            value={attendance === "Present" ? "92%" : "Not Marked"}
          />
          <StatCard
            icon={<ClipboardDocumentCheckIcon className="h-6 w-6 text-orange-500" />}
            title="Task Pending"
            value="92"
          />
          <StatCard
            icon={<CheckCircleIcon className="h-6 w-6 text-purple-500" />}
            title="Completed Task"
            value="7"
          />
          <StatCard
            icon={<AcademicCapIcon className="h-6 w-6 text-green-500" />}
            title="Certificates"
            value="Eligible"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="md:col-span-2  rounded-lg shadow-sm ">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold mb-4">Recent Activity</h2>

              <select className="border rounded px-3 py-1 text-sm cursor-pointer">
                <option value="all">View All</option>
                <option value="Rahul">Rahul</option>
                <option value="Ankit">Ankit</option>
              </select>
            </div>


            <table className="w-full text-sm bg-white mt-2 border rounded-lg overflow-hidden">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="text-left py-2 ps-4">Activity</th>
                  <th className="text-left py-2">Time</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {activities.slice(0, 3).map((item, index) => (
                  <ActivityRow key={index} {...item} />
                ))}
              </tbody>
            </table>

            <div className="flex justify-between items-center mt-4">
              <button
                onClick={prevPage}
                className="px-3 py-1 border border-orange-400 rounded text-sm"
              >
                Previous
              </button>

              <span className="text-sm  text-gray-500">
                Page {page} of 10
              </span>

              <button
                onClick={nextPage}
                className="px-3 py-1 border border-orange-400 rounded text-sm"
              >
                Next
              </button>
            </div>
          </div>


          <div>
            <h2 className="font-semibold mb-4">Primary Action</h2>
            <div className="bg-white rounded-lg shadow-sm p-5 ">


              <button
                onClick={markAttendance}
                className="w-full bg-blue-600 text-white py-2 rounded mb-3 hover:bg-blue-700"
              >
                Mark Attendance
              </button>

              <button
                onClick={() => alert("Redirect to Task Page")}
                className="w-full bg-blue-600 text-white py-2 mt-20 rounded hover:bg-blue-700"
              >
                View Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 items-center">
      <div className=" block rounded">{icon}</div>
      <div className="pt-2">
        <p className="text-sm  text-gray-500">{title}</p>
        <p className="font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
}

function ActivityRow({ activity, time, status, color }) {
  const colors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-gray-100 text-gray-700",
  };

  return (
    <tr className="border-b last:border-none">
      <td className="py-3 ps-4">{activity}</td>
      <td className="py-3 text-gray-500">{time}</td>
      <td className="py-3">
        <span className={`px-3 py-1 rounded-full text-xs ${colors[color]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}
