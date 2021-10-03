import ListItem from "./ListItem";

export default function AddItem({ taskItem, setTaskItem }) {
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
