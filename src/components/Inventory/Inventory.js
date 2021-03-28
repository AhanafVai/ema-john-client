import React from "react";

const Inventory = () => {
  const product = {};
  const handleAddProduct = () => {
    fetch("https://polar-beyond-43155.herokuapp.com/addProduct", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };
  return (
    <div>
      <form action="">
        <p>
          <span>Name: </span>
          <input type="text" />
        </p>
        <p>
          <span>Price </span>
          <input type="text" />
        </p>
        <p>
          <span>Quantity:</span>
          <input type="text" />
        </p>
        <p>
          <span>Image</span>
          <input type="file" />
        </p>
      </form>
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Inventory;
