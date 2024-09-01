import React from "react";
import Button from "../../components/ui/Button";

const Product = () => {
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("testing", e.target.value);
  };

  return (
    <div>
      <h2>Product</h2>
      <Button className="my-4" onClick={handleClick}>
        <a href="/product/add_product">Add product</a>
      </Button>
    </div>
  );
};

export default Product;
