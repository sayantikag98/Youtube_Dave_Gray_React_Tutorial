import AddItem from "./AddItem";

export default function SubContent({
  API_URL,
  fetchError,
  searchState,
  taskItem,
  setTaskItem,
  setFetchError,
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
              API_URL={API_URL}
              taskItem={filteredItems}
              setTaskItem={setTaskItem}
              setFetchError={setFetchError}
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
