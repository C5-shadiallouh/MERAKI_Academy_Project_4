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
      .get(`http://localhost:5000/products/getbydate?p=${counter}`)
      .then((result) => {
        setProducts(result.data);
        axios
            .get(`http://localhost:5000/products/getbydate?p=${counter+1}`)
            .then((nextResult) => {setNextPage(nextResult.data)})
            if(nextPage.length <3 )
        setIsLastPage(true)

      })
      .catch((error) => {});
  }, [state]);
  return (
    <div className="products">
      {products
        ? products.map((element, index) => {
            return (
              <p
                key={element._id}
                style={{ display: "flex", flexDirection: "row" }}
              >
                {element.title}
              </p>
            );
          })
        : ""}
      <button
        onClick={() => {
        if(!isLastPage){
          setCounter(counter + 1);
          setState(!state);
          console.log(counter);}
        }}
      >
        next
      </button>
      <button
        onClick={() => {
          if (counter > 0) {
              if (isLastPage)
              setIsLastPage(false)
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
