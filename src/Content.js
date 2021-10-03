import UserInput from "./UserInput";
import UserSearch from "./UserSearch";
import { useState, useEffect } from "react";
import SubContent from "./SubContent";

export default function Content({ taskItem, setTaskItem }) {
  /*
Always run the server first by using command 
npx json-server -p 3500 -w data/db.json
  */
  const API_URL = "http://localhost:3500/items";

  const [newState, setNewState] = useState("");
  const [searchState, setSearchState] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      } finally {
        setIsLoading(true);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 7000);
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

  return (
    <main id="main-div">
      <UserInput
        newState={newState}
        taskItem={taskItem}
        setNewState={setNewState}
        setTaskItem={setTaskItem}
      />
      <UserSearch searchState={searchState} useSearchState={setSearchState} />
      {isLoading ? (
        <SubContent
          fetchError={fetchError}
          searchState={searchState}
          taskItem={taskItem}
          setTaskItem={setTaskItem}
        />
      ) : (
        <p>Loading Data ...</p>
      )}
    </main>
  );
}
