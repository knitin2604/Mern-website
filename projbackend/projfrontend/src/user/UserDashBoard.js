import React from "react";
import Base from "../core/Base";

const UserDashBoard = () => {
  return (
    <Base title="UserDashBoard Page">
      <h1></h1>
      <div>
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
};

export default UserDashBoard;
