import React from "react";

function CartItem({item,handleIncrement,handleDecrement,handleDelete}){

return(

<div>

<img src={item.image} alt={item.name} width="80"/>

<h3>{item.name}</h3>

<p>Price: ${item.price}</p>

<p>Quantity: {item.quantity}</p>

<p>Total: ${item.price * item.quantity}</p>

<button onClick={()=>handleIncrement(item.id)}>+</button>

<button onClick={()=>handleDecrement(item.id)}>-</button>

<button onClick={()=>handleDelete(item.id)}>Delete</button>

</div>

)

}

export default CartItem;
