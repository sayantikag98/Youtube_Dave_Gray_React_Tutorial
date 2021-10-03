import AddItem from "./AddItem";
import UserInput from "./UserInput";
import UserSearch from "./UserSearch";
import { useState, useEffect } from "react";

export default function Content({ taskItem, setTaskItem }) {
  const [newState, setNewState] = useState("");
  const [searchState, setSearchState] = useState("");
  const filteredItems = taskItem.filter((ele) =>
    ele.pdt.toLowerCase().startsWith(searchState.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskItem));
  }, [taskItem]);

  /*

  never set the state of an item inside the useEffect when that item 
  is in the dependency list otherwise that will create an infinite loop

  // NEVER DO THIS 
  useEffect(()=>{
    setTaskItem(taskItem);
  }, [taskItem]);

  */

  const HandlerOnChange = (ind) => {
    // One Approach
    const newObj = taskItem.map((ele) => {
      ele.checked =
        ele.id === ind ? (ele.checked === true ? false : true) : ele.checked;
      return ele;
    });
    /* Another Approach
    // let copyObj = [...taskItem];
    // copyObj[ind].checked = copyObj[ind].checked === true ? false : true;
    */
    setTaskItem(newObj);
  };

  const HandlerDeleteEvent = (ind) => {
    let newObj = taskItem.filter((ele) => ele.id !== ind);
    setTaskItem(newObj);
  };

  // IMPORTANT FUNCTION FOR HANDLING USER INPUT

  const HandlerUserInput = (event) => {
    event.preventDefault();
    const obj = {
      id: taskItem.length + 1,
      pdt: newState,
      checked: false,
    };
    const newObj = [...taskItem, obj];
    setTaskItem(newObj);
    setNewState("");
  };

  return (
    <main id="main-div">
      <UserInput
        newState={newState}
        setNewState={setNewState}
        HandlerUserInput={HandlerUserInput}
      />
      <UserSearch searchState={searchState} setSearchState={setSearchState} />
      <p>
        {filteredItems.length} List{" "}
        {filteredItems.length === 1 ? "Item" : "Items"}
      </p>
      {taskItem.length > 0 ? (
        <AddItem
          // Filter by using keyword logic
          taskItem={filteredItems}
          HandlerOnChange={HandlerOnChange}
          HandlerDeleteEvent={HandlerDeleteEvent}
        />
      ) : (
        <p>Hey!! Your list is empty...</p>
      )}
    </main>
  );
}
