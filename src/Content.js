import AddItem from "./AddItem";

export default function Content({
  groceryItem,
  HandlerOnChange,
  HandlerDeleteEvent,
}) {
  return (
    <main id="main-div">
      {groceryItem.length > 0 ? (
        <ul id="ul-div">
          <AddItem
            groceryItem={groceryItem}
            HandlerOnChange={HandlerOnChange}
            HandlerDeleteEvent={HandlerDeleteEvent}
          />
        </ul>
      ) : (
        <p>Hey!! Your list is empty</p>
      )}
    </main>
  );
}
