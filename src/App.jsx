import React, { useState } from "react";
import {X} from "lucide-react";

const App = () => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) return; // prevent empty notes
const copyTasks = [...tasks]; // create a copy of the current tasks array
copyTasks.push({ title, content });
    setTasks(copyTasks);

    setTitle("");
    setContent("");
  };


  const deleteNote = (index) => {
    const copyTasks = [...tasks]; 
    copyTasks.splice(index, 1); // remove the note at the specified index
    setTasks(copyTasks); // update the state with the modified array

  };

  return (
    <div className="h-screen bg-gray-900 flex items-center justify-center px-4 sm:px-6">
      
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl h-[90vh]">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Welcome to the Notes App!
          </h1>

          <form
            onSubmit={submitHandler}
            className="bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg space-y-4"
          >
            <input
              type="text"
              placeholder="Title"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-4 py-3 
              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Content"
              className="w-full bg-gray-700 text-white border border-gray-600 rounded px-4 py-3 h-28 sm:h-32 
              focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white rounded px-4 py-2 
              hover:bg-blue-600 transition duration-300"
            >
              Add Note
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 bg-gray-800 p-5 rounded-2xl shadow-lg overflow-y-auto">
          
          <h2 className="text-xl font-semibold text-white mb-4">
            Your Notes
          </h2>

          {/* EMPTY STATE */}
          {tasks.length === 0 && (
            <p className="text-gray-400 text-sm">No notes yet...</p>
          )}

          {/* NOTES GRID */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tasks.map((elem, index) => (
              <div 
  key={index}
  className="relative bg-[url('https://pngimg.com/d/sticky_note_PNG18952.png')] bg-cover text-black h-52 w-40 rounded-xl p-5"
>
  <X className="absolute top-4 right-2 cursor-pointer" onClick={() => deleteNote(index)} />
                <h3 className="leading-tight text-xl font-bold ">{elem.title}</h3>
                <p className="mt-3 leading-tight font-medium">{elem.content}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default App;