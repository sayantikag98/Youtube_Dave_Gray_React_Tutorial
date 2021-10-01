import ListItem from "./ListItem";

const AddItem = ({ taskItem, HandlerOnChange, HandlerDeleteEvent }) =>
  taskItem.map((ele) => {
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

export default AddItem;
