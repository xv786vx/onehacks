import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ipcRenderer } from "electron";

export default function AddTask() {
  const [inputName, setInputName] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPriority, setInputPriority] = useState("");
  const [inputProgress, setInputProgress] = useState(0);

  const [inputStartDate, setInputStartDate] = useState("");
  const [inputEndDate, setInputEndDate] = useState("");

  const handleAddTask = async () => {
    await ipcRenderer.invoke(
      "add-task",
      inputName,
      inputDate,
      inputPriority,
      inputProgress
    );
    setInputName("");
    setInputDate("");
    setInputPriority("");
    setInputProgress(0);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const CreateTask = () => {
    const [task, setTask] = useState(false);
    const handleClick = () => setTask(true);

    return (
      <>
        <div>
          <button
            onClick={handleClick}
            className={
              inputName.length === 0 || inputDate.length === 0
                ? "task-btn-disabled"
                : "task-btn"
            }
            disabled={inputName.length === 0 || inputDate.length === 0}
          >
            Create Task
          </button>
          {task ? <div>hello</div> : <></>}
        </div>
      </>
    );
  };

  return (
    <React.Fragment>
      <Head>
        <title>Sage</title>
      </Head>

      <div className="bg-black1 h-screen">
        <div className="w-96 pl-8 pt-12">
          <Link href="/home">
            <button className="back-btn">Back</button>
          </Link>

          <div className="container pb-4">
            <button className="toggle-btn" onClick={handleToggle}>
              {isOpen ? "-" : "+"}
            </button>
            {isOpen && (
              <div className="bg-black1 border border-sage2 rounded-[8px] w-84 mt-4 p-4">
                <div className="flex p-4 justify-center items-center ">
                  <form className="flex flex-col">
                    <div className="pb-4">
                      <input
                        className="input-field"
                        placeholder="Task Name"
                        value={inputName}
                        onChange={(e) => setInputName(e.target.value)}
                      />
                    </div>

                    <div className="pb-4">
                      <label
                        className="block scp text-md pb-2"
                        htmlFor="duedate"
                      >
                        Due Date
                      </label>

                      <React.Fragment>
                        <Container>
                          <div className="input-field">
                            <DatePicker
                              selected={inputDate}
                              onChange={(date: React.SetStateAction<string>) =>
                                setInputDate(date)
                              }
                              placeholderText="Select date"
                              dateFormat="MMMM d, yyyy h:mm aa"
                              showPopperArrow={false}
                              showTimeSelect
                              timeFormat="HH:mm"
                              timeIntervals={15}
                              className="p-2 w-52 -my-2 -ml-2 text-white text-align-left bg-black1 hover:bg-black2 duration-300"
                            />
                          </div>
                        </Container>
                      </React.Fragment>
                    </div>

                    <div className="pb-4">
                      <label
                        className="block scp text-md pb-2"
                        htmlFor="priority"
                      >
                        Priority
                      </label>

                      <select
                        name="priority"
                        value={inputPriority}
                        onChange={(e) => {
                          setInputPriority(e.target.value);
                          console.log(inputPriority);
                        }}
                        className="input-field w-full"
                      >
                        <option>Select an option</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                      </select>
                    </div>

                    <div>
                      <label
                        className="block scp text-md pb-2"
                        htmlFor="progress"
                      >
                        Progress
                      </label>

                      <input
                        type="range"
                        step="10"
                        value={inputProgress}
                        onChange={(e) =>
                          setInputProgress(parseInt(e.target.value))
                        }
                        className="custom-slider"
                      ></input>
                      <span className="scp pt-2 text-center">
                        {inputProgress}%
                      </span>
                    </div>

                    <div className="flex pt-8 mx-auto justify-center">
                      <button type="submit" onClick={handleAddTask}>
                        <CreateTask />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-row gap-4">
            <div className="pb-4">
              <React.Fragment>
                <Container>
                  <div className="input-field">
                    <DatePicker
                      selected={inputStartDate}
                      onChange={(date: React.SetStateAction<string>) =>
                        setInputStartDate(date)
                      }
                      placeholderText="Start Study"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      showPopperArrow={false}
                      showTimeSelect
                      showTimeSelectOnly
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      className="p-2 w-32 -my-2 -ml-2 text-white text-center bg-black1 hover:bg-black2 duration-300"
                    />
                  </div>
                </Container>
              </React.Fragment>
            </div>

            <div className="pb-4">
              <React.Fragment>
                <Container>
                  <div className="input-field">
                    <DatePicker
                      selected={inputEndDate}
                      onChange={(date: React.SetStateAction<string>) =>
                        setInputEndDate(date)
                      }
                      placeholderText="End Study"
                      dateFormat="MMMM d, yyyy h:mm aa"
                      showPopperArrow={false}
                      showTimeSelect
                      showTimeSelectOnly
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      className="p-2 w-32 -my-2 -ml-2 text-white text-center bg-black1 hover:bg-black2 duration-300"
                    />
                  </div>
                </Container>
              </React.Fragment>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
