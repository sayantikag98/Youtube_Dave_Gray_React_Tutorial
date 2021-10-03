import AddItem from "./AddItem";
import UserInput from "./UserInput";
import UserSearch from "./UserSearch";
import { useState, useEffect } from "react";

export default function Content({ taskItem, setTaskItem }) {
  const API_URL = "http://localhost:3500/items";

  const [newState, setNewState] = useState("");
  const [searchState, setSearchState] = useState("");
  const [fetchError, setFetchError] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("taskList", JSON.stringify(taskItem));
  // }, [taskItem]);

  /*
  useEffect for fetching data from server using async-await syntax 
  */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Data not fetched");
        const data = await response.json();
        setTaskItem(data);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        setFetchError(err.message);
      }
    };
    fetchData();
  }, []);

  /*
  useEffect for fetching data from server using promise syntax
  */

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((data) => data.json())
  //     .then((data) => {
  //       setTaskItem(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  /*

  never set the state of an item inside the useEffect when that item 
  is in the dependency list otherwise that will create an infinite loop

  // NEVER DO THIS 
  useEffect(()=>{
    setTaskItem(taskItem);
  }, [taskItem]);

  */

  const filteredItems = taskItem.filter((ele) =>
    ele.pdt.toLowerCase().startsWith(searchState.toLowerCase())
  );

  return (
    <main id="main-div">
      <UserInput
        newState={newState}
        taskItem={taskItem}
        setNewState={setNewState}
        setTaskItem={setTaskItem}
      />
      <UserSearch searchState={searchState} setSearchState={setSearchState} />
      {fetchError && <p>{fetchError}</p>}
      {!fetchError && (
        <div id="content-div">
          {filteredItems.length} List{" "}
          {filteredItems.length === 1 ? "Item" : "Items"}
          {taskItem.length > 0 ? (
            <AddItem
              // Filter by using keyword logic
              taskItem={filteredItems}
              setTaskItem={setTaskItem}
            />
          ) : (
            <p>Hey!! Your list is empty...</p>
          )}
        </div>
      )}
    </main>
  );
}
