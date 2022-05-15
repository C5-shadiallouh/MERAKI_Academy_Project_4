import React, { useState, useEffect ,useContext} from "react";
import axios from "axios";
import "./style.css";
import { loginStatusContext } from "../../App";
const Home = () => {


  const [counter, setCounter] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [nextPage, setNextPage] = useState();
  const {products,setProducts,path,setPath,state, setState}=useContext(loginStatusContext)
  
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products${path}?p=${counter}`)
      .then((result) => {
          console.log(path);
        setProducts(result.data);
        axios
          .get(`http://localhost:5000/products${path}?p=${counter + 1}`)
          .then((nextResult) => {
            if (nextResult.data < 3) {
              setIsLastPage(true);
            }
            setNextPage(nextResult.data);
          });
      })
      .catch((error) => {});
  }, [state]);
  return (
    <div className="products">
      {products
        ? products.map((element, index) => {
            return (
              <div key={element._id} className="render">
                <div className="container">
                  <img
                    style={{ display: "flex", flexDirection: "row" }}
                    src={element.imageUrl}
                    width="50px"
                  />
                  <p>{element.title}</p>
                  <p>{element.description}</p>
                </div>{" "}
              </div>
            );
          })
        : ""}
      <button
        onClick={() => {
          if (!isLastPage) {
            setCounter(counter + 1);
            console.log(counter);
          }
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
