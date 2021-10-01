import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  let initialState = [];
  if (localStorage.getItem("taskList") !== null) {
    initialState = JSON.parse(localStorage.getItem("taskList"));
  }
  const [taskItem, setTaskItem] = useState(initialState);

  return (
    <div id="app-div">
      <Header title="Task List" />
      <Content taskItem={taskItem} setTaskItem={setTaskItem} />
      <Footer />
    </div>
  );
}
