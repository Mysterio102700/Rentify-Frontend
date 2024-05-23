import React from "react";
import { useParams } from "react-router-dom";
import image from "../Assets/image.png";

const Property = () => {
  const { id } = useParams();
  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6">
          <img src={image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>Property Details for ID: {id}</h1>
          {/* Fetch and display more property details based on the ID */}
        </div>
      </div>
    </div>
  );
};

export default Property;
