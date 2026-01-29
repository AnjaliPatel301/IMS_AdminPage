import React, { useState } from "react";
import { Bell, Eye, Upload, X } from "lucide-react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    {
      title: "UI Wireframe Design",
      deadline: "18 Jan 2026",
      status: "Pending",
    },
    {
      title: "Dashboard Layout",
      deadline: "18 Jan 2026",
      status: "Approve",
    },
    {
      title: "UI Wireframe Design",
      deadline: "18 Jan 2026",
      status: "Submitted",
    },
  ]);

  const [submissionText, setSubmissionText] = useState("");
  const [files, setFiles] = useState([]);

 
  const handleFileUpload = (e) => {
    const uploaded = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...uploaded]);
  };

 
  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Submit Task
  const submitTask = () => {
    if (!submissionText && files.length === 0) {
      alert("Please add submission details or upload a file!");
      return;
    }

    alert("Task Submitted Successfully ✅");
    setSubmissionText("");
    setFiles([]);
  };

  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-600",
    Approve: "bg-green-100 text-green-600",
    Submitted: "bg-blue-100 text-blue-600",
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
     
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-blue-700">Dashboard</h1>
          <p className="text-sm text-gray-500">
            Good Morning, Rahul | Complete your assigned work
          </p>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <Bell className="w-5 h-5 text-gray-500" />
          </button>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
            SI
          </div>
        </div>
      </header>

  
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-5">
          <h2 className="text-md font-semibold mb-4">Task List</h2>

          <div className="overflow-hidden rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="text-left px-4 py-3">Task Title</th>
                  <th className="text-left px-4 py-3">Deadline</th>
                  <th className="text-left px-4 py-3">Status</th>
                  <th className="text-center px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, idx) => (
                  <tr
                    key={idx}
                    className="border-t hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 font-medium">
                      {task.title}
                    </td>
                    <td className="px-4 py-3 text-gray-500">
                      {task.deadline}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          statusColors[task.status]
                        }`}
                      >
                        {task.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <button className="p-2 rounded-lg hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm">
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <p className="text-gray-500">Page 1 of 10</p>
            <button className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>

         
        </div>

        <div className="bg-white rounded-2xl shadow-sm border p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-md font-semibold">Tasks Progress</h2>
            <select className="border rounded-lg px-3 py-1 text-sm">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          </div>

          <div className="flex items-end justify-between h-52 gap-3 px-2">
            {[2, 5, 4, 2, 3, 4, 2].map((val, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div
                  className="w-6 rounded-lg bg-blue-600"
                  style={{ height: `${val * 35}px` }}
                ></div>
                <p className="text-xs text-gray-500">
                  {"MTWTFSS"[idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="mt-8">
            <h2 className="text-md font-semibold mb-3">Task Submission</h2>

            <textarea
              value={submissionText}
              onChange={(e) => setSubmissionText(e.target.value)}
              placeholder="Explain your work, approach, or paste links here...."
              className="w-full border rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
            />

            <div className="mt-4 border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-gray-500">
              <Upload className="w-8 h-8 mb-2" />
              <p className="text-sm">Drag & Drop files here</p>
              <p className="text-xs">or</p>
              <label className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700">
                Browse Files
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>
            </div>

         
            {files.length > 0 && (
              <div className="mt-4 space-y-2">
                {files.map((file, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border rounded-lg px-3 py-2 text-sm"
                  >
                    <p>
                      {file.name} ({Math.round(file.size / 1024)} KB)
                    </p>
                    <button
                      onClick={() => removeFile(idx)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

       
            <button
              onClick={submitTask}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Submit Task
            </button>
          </div>
    </div>
  );
}
