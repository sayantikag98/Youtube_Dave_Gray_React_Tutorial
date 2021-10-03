import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const [taskItem, setTaskItem] = useState(
    /* JSON.parse(localStorage.getItem("taskList"))*/
    []
  );

  return (
    <div id="app-div">
      <Header title="Task List" />
      <Content taskItem={taskItem} setTaskItem={setTaskItem} />
      <Footer />
    </div>
  );
}
