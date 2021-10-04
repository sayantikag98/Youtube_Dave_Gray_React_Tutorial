import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import APIRequest from "./APIRequest";

/* 

useRef is being used to shift the focus from the submit 
button to the input text field once the button is clicked

*/

export default function UserInput({
  API_URL,
  newState,
  taskItem,
  setNewState,
  setTaskItem,
  setFetchError,
}) {
  const initialRef = useRef(null);
  const HandlerOnChange = (event) => {
    setNewState(event.target.value);
  };

  // IMPORTANT FUNCTION FOR HANDLING USER INPUT
  const HandlerUserInput = async (event) => {
    event.preventDefault();
    const obj = {
      id: taskItem.length + 1,
      pdt: newState,
      checked: false,
    };
    const newObj = [...taskItem, obj];
    setTaskItem(newObj);
    setNewState("");
    // CREATE OPERATION OF CRUD
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    };
    const error = await APIRequest(API_URL, postOptions);
    if (error) setFetchError(error);
  };

  return (
    <form id="form-item" onSubmit={HandlerUserInput}>
      <label htmlFor="add-item">Add your task here: </label>
      <input
        autoFocus
        required
        placeholder="Task Name"
        type="text"
        id="add-item"
        value={newState}
        onChange={HandlerOnChange}
        ref={initialRef}
      />
      <button
        id="plus-item"
        type="submit"
        onClick={() => initialRef.current.focus()}
      >
        <FaPlus id="faplus-item" />
      </button>
    </form>
  );
}
