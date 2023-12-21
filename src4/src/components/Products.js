import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("실행");
    fetch(`data/products.json`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        //console.log(products); //콘솔에는 빈배열로 나타남 //useEfeect가 끝나야 배열이 채워짐
      });
  }, []);
  console.log(products); //useEffect의 실행이 종료되고 데이터가 변경된다.

  return (
    <div>
      product
      {products.map((product) => {
        return (
          <li>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Products;
