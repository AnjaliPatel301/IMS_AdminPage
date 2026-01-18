// import React, { useContext, useMemo, useState } from 'react';
// import { AppStateContext } from '../context/AppState';
// import Modal from './Modal';
// import ReusableTable from './ReusableTable';
// import { Eye, Edit, Trash2 } from 'lucide-react';

// const Tasks = () => {
//   const { tasks, interns, mentors, addTask, updateTask, deleteTask } = useContext(AppStateContext);
//   const [search, setSearch] = useState('');
//   const [filter, setFilter] = useState('All');
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);
//   const [form, setForm] = useState({ title: '', description: '', assigneeType: 'intern', assigneeId: '', status: 'Open' });

//   const assigneeName = (t) => {
//     if (t.assigneeType === 'intern') return interns.find((i) => i.id === t.assigneeId)?.name || '-';
//     return mentors.find((m) => m.id === t.assigneeId)?.name || '-';
//   };

//   const data = tasks.filter((t) => {
//     if (filter !== 'All' && t.status !== filter) return false;
//     if (!search) return true;
//     const s = search.toLowerCase();
//     return t.title.toLowerCase().includes(s) || (t.description || '').toLowerCase().includes(s) || assigneeName(t).toLowerCase().includes(s);
//   });

//   const handleOpenAdd = () => { setForm({ title: '', description: '', assigneeType: 'intern', assigneeId: '', status: 'Open' }); setEditing(null); setOpen(true); };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const payload = { ...form, assigneeId: form.assigneeId ? Number(form.assigneeId) : null };
//     if (editing) updateTask(editing.id, payload);
//     else addTask(payload);
//     setOpen(false);
//   };

//   return (
//     <div className="p-6 bg-white rounded-2xl">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="font-semibold">Tasks</h3>
//         <div className="flex items-center gap-3">
//           <input placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="border px-3 py-2 rounded-md" />
//           <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border px-3 py-2 rounded-md">
//             <option>All</option>
//             <option>Open</option>
//             <option>In Progress</option>
//             <option>Done</option>
//           </select>
//           <button onClick={handleOpenAdd} className="bg-blue-600 text-white px-3 py-2 rounded-md">Add Task</button>
//         </div>
//       </div>

//       <ReusableTable
//         columns={[{ key: 'title', title: 'TITLE' }, { key: 'assignee', title: 'ASSIGNEE', render: (r) => assigneeName(r) }, { key: 'status', title: 'STATUS' }]}
//         data={data}
//         renderActions={(row) => (
//           <div className="flex justify-center gap-4 text-slate-400">
//             <Eye size={16} className="cursor-pointer" />
//             <Edit size={16} className="cursor-pointer" onClick={() => { setEditing(row); setForm({ title: row.title, description: row.description, assigneeType: row.assigneeType, assigneeId: row.assigneeId, status: row.status }); setOpen(true); }} />
//             <Trash2 size={16} className="cursor-pointer" onClick={() => deleteTask(row.id)} />
//           </div>
//         )}
//       />

//       <Modal open={open} onClose={() => setOpen(false)} title={editing ? 'Edit Task' : 'Add Task'}>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input required value={form.title} onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))} placeholder="Title" className="w-full border px-3 py-2 rounded-md" />
//           <textarea value={form.description} onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))} placeholder="Description" className="w-full border px-3 py-2 rounded-md" />
//           <div className="flex gap-2">
//             <select value={form.assigneeType} onChange={(e) => setForm((s) => ({ ...s, assigneeType: e.target.value }))} className="border px-3 py-2 rounded-md">
//               <option value="intern">Intern</option>
//               <option value="mentor">Mentor</option>
//             </select>
//             <select value={form.assigneeId} onChange={(e) => setForm((s) => ({ ...s, assigneeId: e.target.value }))} className="border px-3 py-2 rounded-md flex-1">
//               <option value="">Select</option>
//               {form.assigneeType === 'intern' ? interns.map((i) => <option key={i.id} value={i.id}>{i.name}</option>) : mentors.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
//             </select>
//           </div>
//           <select value={form.status} onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))} className="w-full border px-3 py-2 rounded-md">
//             <option>Open</option>
//             <option>In Progress</option>
//             <option>Done</option>
//           </select>
//           <div className="flex justify-end">
//             <button onClick={() => setOpen(false)} type="button" className="mr-2 px-4 py-2 border rounded-md">Cancel</button>
//             <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">Save</button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// };

// export default Tasks;


import React, { useMemo, useState } from "react";
import {
  Bell,
  Plus,
  Search,
  Eye,
  Filter,
  Edit,
  Trash2,
} from "lucide-react";

/* ------------------ MODAL ------------------ */
const Modal = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">{title}</h3>
          <button onClick={onClose} className="text-gray-400">✕</button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default function App() {
  /* ------------------ STATE ------------------ */
  const [tasks, setTasks] = useState([
    { id: 1, title: "UI Dashboard", assigned: "Aditi Shah", deadline: "Dec 12, 2025", createdBy: "Mentor", status: "Approved" },
    { id: 2, title: "API Integration", assigned: "3 Interns", deadline: "Dec 12, 2024", createdBy: "Mentor", status: "Pending" },
    { id: 3, title: "Testing Module", assigned: "Aman Verma", deadline: "Dec 12, 2024", createdBy: "Admin", status: "Rejected" },
    { id: 4, title: "Documentation", assigned: "Anjali Verma", deadline: "Dec 12, 2024", createdBy: "Mentor", status: "Approved" },
  ]);
 // const [statusOpen, setStatusOpen] = useState(false);
const [filterOpen, setFilterOpen] = useState(false);


  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  const [form, setForm] = useState({
    title: "",
    assigned: "",
    deadline: "",
    createdBy: "",
    status: "Pending",
  });

  /* ------------------ FILTER + SEARCH ------------------ */
  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const s = search.toLowerCase();
      const matchSearch =
        t.title.toLowerCase().includes(s) ||
        t.assigned.toLowerCase().includes(s) ||
        t.createdBy.toLowerCase().includes(s);

      const matchFilter = filter === "All" || t.status === filter;
      return matchSearch && matchFilter;
    });
  }, [tasks, search, filter]);

  /* ------------------ PAGINATION ------------------ */
  const ITEMS_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(filteredTasks.length / ITEMS_PER_PAGE);

  const paginatedTasks = filteredTasks.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  /* ------------------ HANDLERS ------------------ */
  const openAdd = () => {
    setEditing(null);
    setForm({ title: "", assigned: "", deadline: "", createdBy: "", status: "Pending" });
    setOpen(true);
  };

  const openEdit = (task) => {
    setEditing(task);
    setForm(task);
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editing) {
      setTasks((prev) =>
        prev.map((t) => (t.id === editing.id ? { ...editing, ...form } : t))
      );
    } else {
      setTasks((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }

    setOpen(false);
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  /* ------------------ UI ------------------ */
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      {/* NAVBAR */}
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
            <button  onClick={openAdd} className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-blue-700 shadow-sm transition-all">
              <Plus size={16} /> {'Create Task' }
            </button>
            <Bell className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
            <div className="h-9 w-9 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold cursor-pointer">
              SI
            </div>
            </div>
          </div>
        </div>


      {/* CONTENT */}
      <main className="p-6">
        {/* SEARCH + FILTER */}
        <div className="flex gap-3 mb-4">
          <div className="flex items-center gap-2 bg-white border rounded-lg  px-4 py-2 flex-1">
            <Search size={18} className="text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, assigned, mentor..."
              className="outline-none w-full text-sm"
            />
          </div>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border px-4 py-2 rounded-lg text-sm"
          >
            <option value="All">Filter</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-xl border overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Assigned</th>
                <th className="p-4 text-left">Deadline</th>
                <th className="p-4 text-left">Created By</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTasks.map((t) => (
                <tr key={t.id} className="border-t hover:bg-gray-50">
                  <td className="p-4">{t.title}</td>
                  <td className="p-4">{t.assigned}</td>
                  <td className="p-4">{t.deadline}</td>
                  <td className="p-4">{t.createdBy}</td>
                  <td className="p-4 text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${t.status === "Approved" && "bg-green-50 text-green-600"}
                      ${t.status === "Pending" && "bg-yellow-50 text-yellow-600"}
                      ${t.status === "Rejected" && "bg-red-50 text-red-600"}
                    `}>
                      {t.status}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <div className="flex justify-center gap-3 text-gray-400">
                      <Eye size={16} />
                      <Edit size={16} onClick={() => openEdit(t)} className="cursor-pointer hover:text-blue-500" />
                      <Trash2 size={16} onClick={() => handleDelete(t.id)} className="cursor-pointer hover:text-red-500" />
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
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-1 border rounded disabled:opacity-40"
            >
              Previous
            </button>
            <span>Page {page} of {totalPages}</span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-1 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)} title={editing ? "Edit Task" : "Add Task"}>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input required value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" className="w-full border px-3 py-2 rounded" />
          <input value={form.assigned} onChange={(e) => setForm({ ...form, assigned: e.target.value })} placeholder="Assigned To" className="w-full border px-3 py-2 rounded" />
          <input value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} placeholder="Deadline" className="w-full border px-3 py-2 rounded" />
          <input value={form.createdBy} onChange={(e) => setForm({ ...form, createdBy: e.target.value })} placeholder="Created By" className="w-full border px-3 py-2 rounded" />
          {/* <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full border px-3 py-2 rounded">
            <option>Approved</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select> */}
          {/* STATUS DROPDOWN */}

       <select
            value={filter}
            // onChange={(e) => setFilter(e.target.value)}
            className="bg-white w-full border px-4 py-2 rounded-lg text-sm"
          >
            <option value="All">Filter</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setOpen(false)} className="px-4 py-2 border rounded">Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
