import React from "react";
import { useState,useEffect} from "react"
function Shop() {
    const [items,setItems]=useState([])
    useEffect(() => {
        fetchItems();
    }, []);
    const fetchItems= async ()=>{
        await  fetch("https://fortnite-api.com/v2/shop/br/combined")
          .then((res) => res.json())
           .then((result) => {setItems(result.data.featured.entries);
        console.log(result )});
        
    }
  return (
    <div>
      <h2>{items.map((item)=>(
          <p>{item.regularPrice}</p>
      ))}</h2>
    </div>
  );
}

export default Shop;
