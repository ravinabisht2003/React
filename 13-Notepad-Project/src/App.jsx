import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    // We are making a task copy & it's storing old task
    const copytask = [...task];

    //Pushing the title and details in copy task and pushing it in  object
    copytask.push({ title, details });

    //Replacing copytask with settask (original) and it will add new data in the setTask
    setTask(copytask);

    console.log(copytask);

    setTitle("");
    setDetails("");
  };

  return (
    <div className="bg-black text-white h-screen lg:flex ">
      <form
        onSubmit={(e) => {
          formHandler(e);
          console.log("form submited");
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <textarea
          name="text"
          placeholder="Write Details"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>

        <button className="bg-white font-medium w-full text-black outline-none px-5 py-2 rounded active:scale-95">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto items-start justify-start">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button className="w-full py-2 bg-red-600 text-white text-xs rounded cursor-pointer active:scale-95 font-bold">Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
