import { FaPlus } from "react-icons/fa";

export default function UserInput({ newState, setNewState, HandlerUserInput }) {
  const HandlerOnChange = (event) => {
    setNewState(event.target.value);
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
      />
      <button id="plus-item" type="submit">
        <FaPlus id="faplus-item" />
      </button>
    </form>
  );
}
