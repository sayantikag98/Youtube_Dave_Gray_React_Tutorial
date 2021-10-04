import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
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
