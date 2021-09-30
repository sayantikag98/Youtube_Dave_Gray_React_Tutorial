import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

export default function App() {
  const initialState = [
    {
      id: 1,
      pdt: "Toothpaste",
      checked: false,
    },
    {
      id: 2,
      pdt: "Cooking Pan",
      checked: false,
    },
    {
      id: 3,
      pdt: "Table",
      checked: false,
    },
    {
      id: 4,
      pdt: "Fan",
      checked: false,
    },
    {
      id: 5,
      pdt: "Sofa",
      checked: false,
    },
  ];

  const [groceryItem, setGroceryItem] = useState(initialState);

  const HandlerOnChange = (ind) => {
    // One Approach
    const newObj = groceryItem.map((ele) => {
      ele.checked =
        ele.id === ind ? (ele.checked === true ? false : true) : ele.checked;
      return ele;
    });
    /* Another Approach
    // let copyObj = [...groceryItem];
    // copyObj[ind].checked = copyObj[ind].checked === true ? false : true;
    */
    setGroceryItem(newObj);
    localStorage.setItem("shoppingList", JSON.stringify(groceryItem));
  };

  const HandlerDeleteEvent = (ind) => {
    let newObj = groceryItem.filter((ele) => ele.id !== ind);
    setGroceryItem(newObj);
    localStorage.setItem("shoppingList", JSON.stringify(groceryItem));
  };

  return (
    <div id="app-div">
      <Header />
      <Content
        groceryItem={groceryItem}
        HandlerOnChange={HandlerOnChange}
        HandlerDeleteEvent={HandlerDeleteEvent}
      />
      <Footer count={groceryItem.length} />
    </div>
  );
}
