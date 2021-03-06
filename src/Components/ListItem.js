import { FaTrashAlt } from "react-icons/fa";

export default function ListItem({ ele, HandlerOnChange, HandlerDeleteEvent }) {
  return (
    <li key={ele.id} id="list-div">
      <input
        onChange={() => HandlerOnChange(ele.id)}
        /*
            here you cannot invoke the function directly 
            so make an anonymous function and then invoke the 
            function from inside of this outer anonymous function
        */
        type="checkbox"
        data-type={ele.pdt}
        checked={ele.checked}
        id="checkbox-item"
      />
      <label
        style={ele.checked === true ? { textDecoration: "line-through" } : null}
        onClick={() => HandlerOnChange(ele.id)}
        id="label-item"
      >
        {ele.pdt}
      </label>
      <FaTrashAlt
        onClick={() => HandlerDeleteEvent(ele.id)}
        id="trashcan-item"
        role="button"
        tabIndex="0"
        aria-label={`Delete ${ele.pdt}`} // for assistive technology
      />
    </li>
  );
}
