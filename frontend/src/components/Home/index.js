import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Home = () => {
  const [products, setProducts] = useState();
  const [state, setState] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isLastPage,setIsLastPage]=useState(false)
  const [nextPage,setNextPage]=useState()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products?p=${counter}`)
      .then((result) => {
        setProducts(result.data);
        axios
            .get(`http://localhost:5000/products?p=${counter+1}`)
            .then((nextResult) => {
                if(nextResult.data <3 ){setIsLastPage(true)
            
                }
                setNextPage(nextResult.data)})
           
        

      })
      .catch((error) => {});
  }, [state]);
  return (
    <div className="products">
      {products
        ? products.map((element, index) => {
            return (
                <div className="render">
                    <div className="container">
              <img
                key={element._id}
                style={{ display: "flex", flexDirection: "row" }}
                src={element.imageUrl}
                width="50px"
            
             />
            <p>{element.title}</p>
            <p>{element.description}</p>    
            </div>  </div>
            );
          })
        : ""}
      <button
        onClick={() => {
        if(!isLastPage){
          setCounter(counter + 1);
          console.log(counter);}
          setState(!state);
         
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
            setState(!state);
            console.log(counter);
          }
        }}
      >
        previous
      </button>
    </div>
  );
};
export default Home;
