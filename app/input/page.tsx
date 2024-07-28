"use client";

import React, { useState } from 'react';
import { format, addDays } from 'date-fns';

const InputPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState<{ name: string; hours: number; minutes: number }[]>([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskHours, setNewTaskHours] = useState(0);
  const [newTaskMinutes, setNewTaskMinutes] = useState(0);

  const handlePrevDay = () => {
    setCurrentDate(addDays(currentDate, -1));
  };

  const handleNextDay = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  const handleAddTask = () => {
    if (newTaskName && (newTaskHours > 0 || newTaskMinutes > 0)) {
      setTasks([...tasks, { name: newTaskName, hours: newTaskHours, minutes: newTaskMinutes }]);
      setNewTaskName("");
      setNewTaskHours(0);
      setNewTaskMinutes(0);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-lightblack text-white">
      {/* Date Section */}
      <div className="date_section flex items-center justify-between p-4 bg-almost_black border-b border-dark_gray">
        <button onClick={handlePrevDay} className="text-xl">&lt;</button>
        <span className="text-lg">{format(currentDate, 'EEE, MMMM do')}</span>
        <button onClick={handleNextDay} className="text-xl">&gt;</button>
      </div>

      {/* Input Section */}
      <div className="input_section flex-grow p-4 overflow-y-auto">
        {tasks.map((task, index) => (
          <div key={index} className="mb-4 py-8 px-4 border text-lg border-light_gray rounded-lg">
            <div className="flex justify-between">
              <span>{task.name}</span>
              <span>{`${task.hours}h ${task.minutes}m`}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <div className="fixed bottom-20 right-4">
        <button
          className="bg-appGreen text-black rounded-full h-12 w-12 flex items-center justify-center text-2xl shadow-lg"
          onClick={() => document.getElementById("addTaskForm")?.classList.toggle("hidden")}
        >
          +
        </button>
      </div>

      {/* Add Task Form */}
      <div id="addTaskForm" className="fixed bottom-20 right-20 bg-white text-black p-4 rounded shadow-lg hidden">
        <div>
          <input
            type="text"
            placeholder="Task Name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            className="p-2 mb-2 border border-gray-300 rounded w-full"
          />
          <div className="flex space-x-2 mb-2">
            <select
              value={newTaskHours}
              onChange={(e) => setNewTaskHours(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded w-full"
            >
              <option value={0}>0 hr</option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1} hr</option>
              ))}
            </select>
            <select
              value={newTaskMinutes}
              onChange={(e) => setNewTaskMinutes(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded w-full"
            >
              <option value={0}>0 min</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i * 5} value={i * 5}>{i * 5} min</option>
              ))}
            </select>
          </div>
          <button
            onClick={handleAddTask}
            className="bg-prim_accent text-almost_black p-2 rounded w-full"
          >
            Add Task
          </button>
        </div>
      </div>

      {/* Navbar Section */}
      <div className="navbar_section bg-almost_black border-t border-dark_gray shadow-md p-8 fixed bottom-0 w-full md:relative md:w-auto md:p-0">
        {/* Navbar component will go here */}
      </div>
    </div>
  );
};

export default InputPage;