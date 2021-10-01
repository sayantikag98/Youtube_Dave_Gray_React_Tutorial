import ListItem from "./ListItem";

const AddItem = ({ groceryItem, HandlerOnChange, HandlerDeleteEvent }) =>
  groceryItem.map((ele) => {
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
