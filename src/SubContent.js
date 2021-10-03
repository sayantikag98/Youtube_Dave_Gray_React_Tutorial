import AddItem from "./AddItem";

export default function SubContent({
  fetchError,
  searchState,
  taskItem,
  setTaskItem,
}) {
  const filteredItems = taskItem.filter((ele) =>
    ele.pdt.toLowerCase().startsWith(searchState.toLowerCase())
  );
  return (
    <>
      {!fetchError ? (
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
      ) : (
        <p>{fetchError}</p>
      )}
    </>
  );
}
