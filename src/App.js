import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  let initialState = [];
  if (localStorage.getItem("shoppingList") !== null) {
    initialState = JSON.parse(localStorage.getItem("shoppingList"));
  }
  const [groceryItem, setGroceryItem] = useState(initialState);

  return (
    <div id="app-div">
      <Header title="Task List" />
      <Content groceryItem={groceryItem} setGroceryItem={setGroceryItem} />
      <Footer count={groceryItem.length} />
    </div>
  );
}
