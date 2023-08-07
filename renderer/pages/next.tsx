import React, { useState } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ipcRenderer } from "electron";

export default function AddTask() {
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputProgress, setInputProgress] = useState(0);
  //const handleProgressChange = () => setInputProgress(100-inputProgress)

  const handleTestNotification = async () =>
    await ipcRenderer.invoke(
      "test-notification",
      `${inputName} ${inputDate}`,
      `${inputPriority} ${inputProgress}`
    );

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const CreateTask = () => {
    const [task, setTask] = useState(false);
    const handleClick = () => setTask(true);

    return (
      <div>
        <button
          onClick={handleClick}
          className="bg-blue-100 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-md"
          type="submit"
        >
          Create Task
        </button>
        {task ? <div>hello</div> : <div></div>}
      </div>
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>Tasks View</title>
      </Head>

      <div className="container">
        <button
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          onClick={handleToggle}
        >
          {isOpen ? "-" : "+"}
        </button>
        {isOpen && (
          <div className="bg-gray-800 border border-gray-600 w-72 mt-4 p-4">
            <div className="flex p-4 justify-center items-center ">
              <form className="flex flex-col">
                <div className="pb-4">
                  <label
                    className="block font-semibold text-md pb-2"
                    htmlFor="name"
                  >
                    Task Name
                  </label>

                  <input
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Task Name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                  />
                </div>

                <div className="pb-4">
                  <label
                    className="block font-semibold text-md pb-2"
                    htmlFor="duedate"
                  >
                    Due Date
                  </label>

                  <React.Fragment>
                    <Container>
                      <div className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 text-black col-sm-5">
                        <DatePicker
                          selected={inputDate}
                          onChange={(date) => setInputDate(date)}
                          placeholderText="Click to select a date"
                          dateFormat="MMMM d, yyyy h:mm aa"
                          showPopperArrow={false}
                          showTimeSelect
                          timeFormat="HH:mm"
                          timeIntervals={15}
                          className="p-2 w-52 -my-2 -ml-2 text-white text-align-left bg-gray-700"
                        />
                      </div>
                    </Container>
                  </React.Fragment>
                </div>

                <div className="pb-4">
                  <label
                    className="block font-semibold text-md pb-2"
                    htmlFor="priority"
                  >
                    Priority
                  </label>

                  <select
                    name="priority"
                    value={inputPriority}
                    onChange={(e) => setInputPriority(e.target.value)}
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  >
                    <option>Select an option</option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>

                <div>
                  <label
                    className="block font-semibold text-md pb-2"
                    htmlFor="progress"
                  >
                    Progress
                  </label>

                  <input
                    id="default-range"
                    type="range"
                    step="10"
                    value={inputProgress}
                    onChange={(e) => setInputProgress(parseInt(e.target.value))}
                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  ></input>
                  <span className="pt-2 text-center">{inputProgress}%</span>
                </div>

                <div className="flex pt-8 mx-auto justify-center">
                  <button
                    className=""
                    type="submit"
                    onClick={handleTestNotification}
                  >
                    <CreateTask />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
