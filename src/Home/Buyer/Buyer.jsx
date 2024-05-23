import React from "react";
import { Link } from "react-router-dom";

const Buyer = () => {
  const data = [
    {
      id: 1,
      user_id: 1,
      title: "Luxury Villa",
      description: "A beautiful luxury villa with a private pool.",
      property_type: "Villa",
      location: "Los Angeles, CA",
      bedrooms: 5,
      bathrooms: 4,
      amenities: "Pool, Gym, Garden",
      price: 1500000.0,
      image_data: null,
    },
    {
      id: 2,
      user_id: 1,
      title: "Cozy Apartment",
      description: "A cozy apartment in the heart of the city.",
      property_type: "Apartment",
      location: "New York, NY",
      bedrooms: 2,
      bathrooms: 1,
      amenities: "Elevator, Security",
      price: 750000.0,
      image_data: null,
    },
    {
      id: 3,
      user_id: 2,
      title: "Spacious Condo",
      description: "A spacious condo with a great view.",
      property_type: "Condo",
      location: "San Francisco, CA",
      bedrooms: 3,
      bathrooms: 2,
      amenities: "Gym, Pool",
      price: 1200000.0,
      image_data: null,
    },
    {
      id: 4,
      user_id: 2,
      title: "Modern House",
      description: "A modern house with all the latest amenities.",
      property_type: "House",
      location: "Austin, TX",
      bedrooms: 4,
      bathrooms: 3,
      amenities: "Smart Home, Garden",
      price: 950000.0,
      image_data: null,
    },
    {
      id: 5,
      user_id: 3,
      title: "Beachfront Bungalow",
      description: "A charming bungalow right on the beach.",
      property_type: "Bungalow",
      location: "Miami, FL",
      bedrooms: 3,
      bathrooms: 2,
      amenities: "Beach Access, Garden",
      price: 1300000.0,
      image_data: null,
    },
    {
      id: 6,
      user_id: 3,
      title: "City Loft",
      description: "A stylish loft in the city center.",
      property_type: "Loft",
      location: "Chicago, IL",
      bedrooms: 2,
      bathrooms: 1,
      amenities: "Gym, Rooftop Access",
      price: 800000.0,
      image_data: null,
    },
    {
      id: 7,
      user_id: 4,
      title: "Suburban Home",
      description: "A comfortable home in a quiet suburb.",
      property_type: "House",
      location: "Seattle, WA",
      bedrooms: 4,
      bathrooms: 2,
      amenities: "Garage, Garden",
      price: 850000.0,
      image_data: null,
    },
    {
      id: 8,
      user_id: 4,
      title: "Downtown Apartment",
      description: "A modern apartment in downtown.",
      property_type: "Apartment",
      location: "Portland, OR",
      bedrooms: 2,
      bathrooms: 2,
      amenities: "Gym, Pool, Security",
      price: 900000.0,
      image_data: null,
    },
    {
      id: 9,
      user_id: 5,
      title: "Countryside Cottage",
      description: "A quaint cottage in the countryside.",
      property_type: "Cottage",
      location: "Nashville, TN",
      bedrooms: 3,
      bathrooms: 2,
      amenities: "Garden, Fireplace",
      price: 700000.0,
      image_data: null,
    },
    {
      id: 10,
      user_id: 5,
      title: "Mountain Cabin",
      description: "A cozy cabin in the mountains.",
      property_type: "Cabin",
      location: "Denver, CO",
      bedrooms: 2,
      bathrooms: 1,
      amenities: "Fireplace, Hiking Trails",
      price: 650000.0,
      image_data: null,
    },
  ];

  return (
    <div className="d-flex flex-wrap">
      {data.map((item) => (
        <div className="card m-2" style={{ width: "18rem" }} key={item.id}>
          <img
            src={
              item.image_data
                ? `data:image/jpeg;base64,${item.image_data}`
                : "placeholder.jpg"
            }
            className="card-img-top"
            alt={item.title}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <Link to={`/property/${item.id}`} className="btn btn-primary">
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Buyer;
