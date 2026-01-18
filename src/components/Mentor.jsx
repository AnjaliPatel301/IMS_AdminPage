import { Eye, Edit, Trash2 } from "lucide-react";
import { 
  Bell, Plus, Search,  Filter, 
} from "lucide-react";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

const initialMentors = [
  { id: 1, name: "Michael Roberts", email: "michael.r@company.com", interns: 52, status: "Active" },
  { id: 2, name: "James Miller", email: "emma.t@company.com", interns: 68, status: "Active" },
  { id: 3, name: "Lisa Wang", email: "lisa.w@company.com", interns: 45, status: "Active" },
  { id: 4, name: "David Kim", email: "david.k@company.com", interns: 34, status: "Active" },
  { id: 5, name: "David Kim", email: "david.k2@company.com", interns: 77, status: "Active" },
];

export default function MentorsTable() {
   const [selectedIntern, setSelectedIntern] = useState(null);

  const [mentors, setMentors] = useState(initialMentors);
  const [page, setPage] = useState(1);
  const [editMentor, setEditMentor] = useState(null);
const [currentView, setCurrentView] = useState("mentors");

  const totalPages = Math.ceil(mentors.length / ITEMS_PER_PAGE);

  const paginatedMentors = mentors.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // DELETE
  const handleDelete = (id) => {
    setMentors(mentors.filter((m) => m.id !== id));
  };

  // UPDATE
  const handleUpdate = () => {
    setMentors(
      mentors.map((m) => (m.id === editMentor.id ? editMentor : m))
    );
    setEditMentor(null);
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* TABLE */}
      <div className="flex flex-col lg:flex-row border-b justify-between items-start lg:items-center py-[14px] px-4  gap-4">
          <div>
            <h1 className="text-lg sm:text-md font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="text-md  text-gray-500">
              Welcome back, Sarah. Here's what's happening today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4  w-full lg:w-auto">
            <div className="flex items-center gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-blue-700 shadow-sm transition-all">
              <Plus size={16} /> {"Add Mentor"}
            </button>
            <Bell className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
            <div className="h-9 w-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
              SI
            </div>
            </div>
          </div>
        </div>
       <div className="p-4">
         <div className="flex items-center gap-3 mt-2 mb-6">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 flex-1 shadow-sm">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder={currentView === 'interns' ? "Search by name or department" : "Search by Mentor, Interns name..."}
                className="outline-none text-sm w-full bg-transparent"
              />
            </div>
            <button className="bg-white border border-gray-200 px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium hover:bg-gray-50 shadow-sm transition-colors text-gray-600">
              <Filter size={18} /> Filter
            </button>
          </div>
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-gray-400">
          <tr>
            <th className="p-4 text-left">Mentor Name</th>
            <th className="p-4 text-center">Assigned Interns</th>
            <th className="p-4 text-center">Status</th>
            <th className="p-4 text-center">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y">
          {paginatedMentors.map((m) => (
            <tr key={m.id} className="hover:bg-gray-50">
              <td className="p-4 flex gap-3 items-center">
                <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center font-bold">
                  {m.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-xs text-gray-400">{m.email}</p>
                </div>
              </td>

              <td className="p-4 text-center">{m.interns}</td>

              <td className="p-4 text-center">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                  Active
                </span>
              </td>

              <td className="p-4 text-center">
                <div className="flex justify-center gap-3">
                  <Eye
                      size={16}
                      className="cursor-pointer hover:text-slate-600"
                      onClick={() => handleView(m)}
                    />
                  <Edit
                    size={16}
                    className="text-blue-500 cursor-pointer"
                    onClick={() => setEditMentor(m)}
                  />
                  <Trash2
                    size={16}
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(m.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* PAGINATION */}
      <div className="flex justify-between items-center p-4 text-sm">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-4 py-1.5 rounded-lg border
            ${page === 1
              ? "text-gray-300 border-gray-300"
              : "text-orange-500 border-orange-500 hover:bg-orange-50"}`}
        >
          Previous
        </button>

        <span className="text-gray-600 font-medium">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
          className={`px-4 py-1.5 rounded-lg border
            ${page === totalPages
              ? "text-gray-300 border-gray-300"
              : "text-orange-500 border-orange-500 hover:bg-orange-50"}`}
        >
          Next
        </button>
      </div>

      {/* EDIT MODAL */}
      {editMentor && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-96 space-y-4">
            <h2 className="font-bold text-lg">Edit Mentor</h2>

            <input
              value={editMentor.name}
              onChange={(e) =>
                setEditMentor({ ...editMentor, name: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Name"
            />

            <input
              value={editMentor.email}
              onChange={(e) =>
                setEditMentor({ ...editMentor, email: e.target.value })
              }
              className="w-full border p-2 rounded"
              placeholder="Email"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditMentor(null)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
       </div>
  );
}
