import React from "react";

function ProductList() {
  const plants = [
    { name: "Aloe Vera", price: 10 },
    { name: "Snake Plant", price: 15 },
    { name: "Peace Lily", price: 20 }
  ];

  return (
    <div>
      <h2>Plants</h2>
      {plants.map((plant, index) => (
        <div key={index}>
          <h3>{plant.name}</h3>
          <p>${plant.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
