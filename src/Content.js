import { useState } from "react";

export default function Content() {
  const [groceryItem, setGroceryItem] = useState("Grocery item");
  const [count, setCount] = useState(0);
  const groceries = ["Wheat Flour", "Sugar", "Salt", "Red Chili Powder"];

  const HeandleOnClick = () => {
    setGroceryItem(groceries[Math.floor(Math.random() * 4)]);
    console.log(count);
    setCount(count + 1);
    setCount(count + 1);
  };

  // const HandleOnCLick2 = (name) => {
  //   console.log(`${name}`);
  // };

  // const HandleOnCLick3 = (event) => {
  //   console.log(event.target.dataset.name);
  //   console.log(event.target.textContent);
  // };

  // const btnStyle = {
  //   margin: "20px",
  // };

  return (
    <main id="main-div">
      <p>{groceryItem}</p>
      <button onClick={HeandleOnClick}>Click it to display grocery item</button>

      {/* <button style={btnStyle} onClick={() => HandleOnCLick2("Sayantika")}>
        Click it to print name
      </button>

      <button style={btnStyle} onClick={HandleOnCLick3} data-name="click event">
        Click it to display event
      </button> */}
    </main>
  );
}
