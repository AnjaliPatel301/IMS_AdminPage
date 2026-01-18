import React, { createContext, useState } from 'react';

export const AppStateContext = createContext(null);

const initialInterns = [
  { id: 1, name: 'Michael Roberts', email: 'michael.r@company.com', mentorId: 1, status: 'Active' },
  { id: 2, name: 'James Miller', email: 'james.m@company.com', mentorId: 1, status: 'Active' },
];

const initialMentors = [
  { id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', team: 'Frontend' },
];

const initialTasks = [
  { id: 1, title: 'Onboarding', description: 'Complete onboarding', assigneeType: 'intern', assigneeId: 1, status: 'Open' },
];

export const AppStateProvider = ({ children }) => {
  const [interns, setInterns] = useState(initialInterns);
  const [mentors, setMentors] = useState(initialMentors);
  const [tasks, setTasks] = useState(initialTasks);

  const addIntern = (intern) => {
    const id = Date.now();
    setInterns((s) => [...s, { ...intern, id }]);
  };

  const updateIntern = (id, changes) => {
    setInterns((s) => s.map((it) => (it.id === id ? { ...it, ...changes } : it)));
  };

  const deleteIntern = (id) => setInterns((s) => s.filter((it) => it.id !== id));

  const addMentor = (mentor) => {
    const id = Date.now();
    setMentors((s) => [...s, { ...mentor, id }]);
  };

  const updateMentor = (id, changes) => {
    setMentors((s) => s.map((m) => (m.id === id ? { ...m, ...changes } : m)));
  };

  const deleteMentor = (id) => setMentors((s) => s.filter((m) => m.id !== id));

  const addTask = (task) => {
    const id = Date.now();
    setTasks((s) => [...s, { ...task, id }]);
  };

  const updateTask = (id, changes) => setTasks((s) => s.map((t) => (t.id === id ? { ...t, ...changes } : t)));
  const deleteTask = (id) => setTasks((s) => s.filter((t) => t.id !== id));

  return (
    <AppStateContext.Provider value={{ interns, mentors, tasks, addIntern, updateIntern, deleteIntern, addMentor, updateMentor, deleteMentor, addTask, updateTask, deleteTask }}>
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
