import React from "react";

function CartItem({item}){

return(

<div>

<img src={item.image} alt={item.name} width="80"/>

<h3>{item.name}</h3>

<p>Price: ${item.price}</p>

<p>Quantity: {item.quantity}</p>

<button>+</button>

<button>-</button>

<button>Delete</button>

</div>

)

}

export default CartItem;
