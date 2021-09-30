import { useState } from "react";

export default function Content() {
  const [groceryItem, setGroceryItem] = useState([
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
  ]);

  const HandlerOnChange = (event) => {
    groceryItem.forEach((ele, ind) => {
      if (ele.pdt === event.target.dataset.type) {
        let copyObj = [...groceryItem];
        copyObj[ind].checked = copyObj[ind].checked === true ? false : true;
        setGroceryItem(copyObj);
      }
    });
  };

  const AddItem = () =>
    groceryItem.map((ele) => {
      return (
        <li key={ele.id}>
          <input
            onChange={HandlerOnChange}
            type="checkbox"
            data-type={ele.pdt}
            checked={ele.checked}
          />
          <label style={{ padding: "10px" }}>{ele.pdt}</label>
          <button>Delete</button>
        </li>
      );
    });

  return (
    <main id="main-div">
      <ul>
        <AddItem />
      </ul>
    </main>
  );
}
