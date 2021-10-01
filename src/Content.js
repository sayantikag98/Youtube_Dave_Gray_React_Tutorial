import AddItem from "./AddItem";
import UserInput from "./UserInput";
import UserSearch from "./UserSearch";
import { useState } from "react";

export default function Content({ groceryItem, setGroceryItem }) {
  const [newState, setNewState] = useState("");
  const [searchState, setSearchState] = useState("");

  const SetAndSave = (newObj) => {
    setGroceryItem(newObj);
    localStorage.setItem("shoppingList", JSON.stringify(newObj));
  };

  const HandlerOnChange = (ind) => {
    // One Approach
    const newObj = groceryItem.map((ele) => {
      ele.checked =
        ele.id === ind ? (ele.checked === true ? false : true) : ele.checked;
      return ele;
    });
    /* Another Approach
    // let copyObj = [...groceryItem];
    // copyObj[ind].checked = copyObj[ind].checked === true ? false : true;
    */
    SetAndSave(newObj);
  };

  const HandlerDeleteEvent = (ind) => {
    let newObj = groceryItem.filter((ele) => ele.id !== ind);
    SetAndSave(newObj);
  };

  // IMPORTANT FUNCTION FOR HANDLING USER INPUT

  const HandlerUserInput = (event) => {
    event.preventDefault();
    const obj = {
      id: groceryItem.length + 1,
      pdt: newState,
      checked: false,
    };
    const newObj = [...groceryItem, obj];
    SetAndSave(newObj);
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
      {groceryItem.length > 0 ? (
        <AddItem
          // Filter by using keyword logic
          groceryItem={groceryItem.filter((ele) =>
            ele.pdt.startsWith(searchState)
          )}
          HandlerOnChange={HandlerOnChange}
          HandlerDeleteEvent={HandlerDeleteEvent}
        />
      ) : (
        <p>Hey!! Your list is empty...</p>
      )}
    </main>
  );
}
