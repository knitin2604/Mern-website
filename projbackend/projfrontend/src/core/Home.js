import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import fit from "./images/fit.png";
import fit1 from "./images/fit1.png";
import equip1 from "./images/equip1.png";
import equip2 from "./images/equip2.png";
import equip4 from "./images/equip4.png";
import fit3 from "./images/fit3.png";
import "./Home.css";



export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base title="Welcome to the  Store" description="Sports and Fitness and  Accesories">
      <div className="row text-center">
            <img className="home-img" src={fit1}/>
            <p> ..</p>
            <img className="home-img"  src={equip1}/>
            <p>..</p>
            <img className="home-img"  src={equip2}/>
            <p>..</p>
            <img className="home-img"  src={equip4}/>
            <p>..</p>
            <img className="home-img"  src={fit3}/>
             
        <h1 className="text-white"></h1>
        <div className="row">
          {products.map((product, index) => {
            return (
              <div key={index} className="col-4 mb-4">
                <Card product={product} />
              </div>
            );
           
          })}
        </div>
         <footer className="footer bg-dark mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg">Contact Us</button>
      </div>
      <div className="container">
        <span className="text-muted">
           <span className="text-white"></span>
        </span>
      </div>
    </footer>
      </div>
    </Base>
  );
}
