import ListItem from "./ListItem";
import APIRequest from "./APIRequest";

export default function AddItem({
  API_URL,
  taskItem,
  setTaskItem,
  setFetchError,
}) {
  const HandlerOnChange = async (ind) => {
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

    // UPDATE OPERATION OF CRUD
    const newEle = taskItem.filter((ele) => ele.id === ind);
    const patchOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: newEle[0].checked }),
    };

    const reqURL = `${API_URL}/${ind}`;
    const error = await APIRequest(reqURL, patchOptions);
    if (error) setFetchError(error);
  };

  const HandlerDeleteEvent = async (ind) => {
    let newObj = taskItem.filter((ele) => ele.id !== ind);
    setTaskItem(newObj);

    // DELETE OPERATION OF CRUD
    const deleteOptions = {
      method: "DELETE",
    };
    const reqURL = `${API_URL}/${ind}`;
    const error = await APIRequest(reqURL, deleteOptions);
    if (error) setFetchError(error);
  };

  return taskItem.map((ele) => {
    return (
      <ul id="ul-div">
        <ListItem
          ele={ele}
          HandlerOnChange={HandlerOnChange}
          HandlerDeleteEvent={HandlerDeleteEvent}
        />
      </ul>
    );
  });
}
