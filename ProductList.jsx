import React from "react";

function ProductList(){

const plants = [

{
category:"Indoor Plants",
items:[
{id:1,name:"Snake Plant",price:10,image:"https://via.placeholder.com/100"},
{id:2,name:"Aloe Vera",price:12,image:"https://via.placeholder.com/100"},
{id:3,name:"ZZ Plant",price:15,image:"https://via.placeholder.com/100"},
{id:4,name:"Pothos",price:11,image:"https://via.placeholder.com/100"},
{id:5,name:"Fiddle Leaf",price:20,image:"https://via.placeholder.com/100"},
{id:6,name:"Areca Palm",price:18,image:"https://via.placeholder.com/100"}
]
},

{
category:"Decorative Plants",
items:[
{id:7,name:"Peace Lily",price:15,image:"https://via.placeholder.com/100"},
{id:8,name:"Spider Plant",price:11,image:"https://via.placeholder.com/100"},
{id:9,name:"Calathea",price:14,image:"https://via.placeholder.com/100"},
{id:10,name:"Anthurium",price:19,image:"https://via.placeholder.com/100"},
{id:11,name:"Dracaena",price:13,image:"https://via.placeholder.com/100"},
{id:12,name:"Croton",price:16,image:"https://via.placeholder.com/100"}
]
},

{
category:"Garden Plants",
items:[
{id:13,name:"Money Plant",price:9,image:"https://via.placeholder.com/100"},
{id:14,name:"Rubber Plant",price:18,image:"https://via.placeholder.com/100"},
{id:15,name:"Rose Plant",price:10,image:"https://via.placeholder.com/100"},
{id:16,name:"Tulsi",price:8,image:"https://via.placeholder.com/100"},
{id:17,name:"Jasmine",price:12,image:"https://via.placeholder.com/100"},
{id:18,name:"Hibiscus",price:14,image:"https://via.placeholder.com/100"}
]
}

];

return(

<div>

<h2>Plant Shop</h2>

{plants.map((group,index)=>(

<div key={index}>

<h3>{group.category}</h3>

{group.items.map((plant)=>(

<div key={plant.id}>

<img src={plant.image} alt={plant.name}/>

<h4>{plant.name}</h4>

<p>${plant.price}</p>

<button>Add to Cart</button>

</div>

))}

</div>

))}

</div>

)

}

export default ProductList;
