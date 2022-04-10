import React, { useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)

  function handleClick() {
    setInCart((inCart) => !inCart)
  }

  const cartClass = inCart ? "" : "in-cart"

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart ? "Add to" : "Remove from"} Cart</button>
    </li>
  );
}

export default Item;
