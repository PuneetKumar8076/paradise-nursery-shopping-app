import React from "react";

function ProductList(){

const plants=[

{ id:1,name:"Snake Plant",price:10,image:"https://via.placeholder.com/100" },
{ id:2,name:"Aloe Vera",price:12,image:"https://via.placeholder.com/100" },
{ id:3,name:"Peace Lily",price:15,image:"https://via.placeholder.com/100" },
{ id:4,name:"Spider Plant",price:11,image:"https://via.placeholder.com/100" },
{ id:5,name:"Money Plant",price:9,image:"https://via.placeholder.com/100" },
{ id:6,name:"Rubber Plant",price:18,image:"https://via.placeholder.com/100" }

]

return(

<div>

<h2>Plants</h2>

{plants.map(plant=>(

<div key={plant.id}>

<img src={plant.image} alt={plant.name} />

<h3>{plant.name}</h3>

<p>${plant.price}</p>

<button>Add to Cart</button>

</div>

))}

</div>

)

}

export default ProductList
