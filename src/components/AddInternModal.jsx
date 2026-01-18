import React, { useState } from "react";

export default function AddInternModal({ onAdd, onClose, initialData = null }) {
  const [name, setName] = useState(initialData?.name ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [mentor, setMentor] = useState(initialData?.mentor ?? "");
  const [attendance, setAttendance] = useState(initialData?.attendance ?? "");
  const [performance, setPerformance] = useState(initialData?.performance ?? "");
  const [status, setStatus] = useState(initialData?.status ?? "Active");
  const [avatar, setAvatar] = useState(initialData?.avatar ?? "");

  const submit = () => {
    if (!name) return alert("Please provide name");
    const newIntern = {
      name,
      email,
      mentor,
      attendance,
      performance,
      status,
      avatar,
    };
    onAdd(newIntern);
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-40">
      <div className="bg-white p-6 rounded-xl w-96 space-y-3">
        <h2 className="font-bold text-lg">{initialData ? "Edit Intern" : "Add Intern"}</h2>

        <input
          className="border w-full p-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border w-full p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border w-full p-2"
          placeholder="Mentor"
          value={mentor}
          onChange={(e) => setMentor(e.target.value)}
        />

        <input
          className="border w-full p-2"
          placeholder="Attendance (e.g. 92%)"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />

        <input
          className="border w-full p-2"
          placeholder="Performance"
          value={performance}
          onChange={(e) => setPerformance(e.target.value)}
        />

        <input
          className="border w-full p-2"
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <select
          className="border w-full p-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onClose}>Cancel</button>
          <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">
            {initialData ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}
