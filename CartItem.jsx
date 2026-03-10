import React from "react";

function CartItem({ item, onIncrement, onDecrement, onDelete }) {

return(

<div>

<img src={item.image} alt={item.name} width="80"/>

<h3>{item.name}</h3>

<p>Unit Price: ${item.price}</p>

<p>Quantity: {item.quantity}</p>

<p>Total: ${item.price * item.quantity}</p>

<button onClick={()=>onIncrement(item.id)}>+</button>

<button onClick={()=>onDecrement(item.id)}>-</button>

<button onClick={()=>onDelete(item.id)}>Delete</button>

</div>

)

}

export default CartItem;
