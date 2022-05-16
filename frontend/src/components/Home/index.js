import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./style.css";
import { loginStatusContext } from "../../App";
import { Link } from "react-router-dom";
const Home = () => {
  const [counter, setCounter] = useState(0);
  const [isLastPage, setIsLastPage] = useState(false);
  const [nextPage, setNextPage] = useState();
  const [count, setCount] = useState();
  const [check, setCheck] = useState(true);
  const { products, setProducts, path, setPath, state, setState } =
    useContext(loginStatusContext);
    const[page,setPage]=useState()
  useEffect(() => {
    axios
      .get(`http://localhost:5000/products${path}?p=${counter}`)
      .then((result) => {
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
    if (check) {
      setCheck(false);
    }
    axios.get(`http://localhost:5000/products${path}`).then((result) => {
      setCount(result.data);
    }).catch((err)=>{setCount(err)});

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

      <div className="pagination">
        <Link to="#">&laquo;</Link>
        {count
          ? count.slice(0,Math.ceil(count.length/9)).map((element, index) => {
              return (
                <Link
                  to="#"
                  onClick={() => {
                    setCounter(index);
                    setState(!state);
                  }}
                >
                  {index + 1}
                </Link>
              );
            })
          : ""}
        <Link to="#">&raquo;</Link>
        {/* <Link to="#">&laquo;</Link>
  <Link to="#">1</Link>
  <Link to="#">2</Link>
  <Link to="#">3</Link>
  <Link to="#">4</Link>
  <Link to="#">5</Link>
  <Link to="#">6</Link>
  <Link to="#">&raquo;</Link> */}
      </div>

      <button
        onClick={() => {
          if (!isLastPage) {
            setCounter(counter + 1);
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
          }
        }}
      >
        previous
      </button>
    </div>
  );
};
export default Home;
