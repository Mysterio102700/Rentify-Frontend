import React from "react";

const Buyer = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {property.image_data && (
        <img
          src={`data:image/jpeg;base64,${property.image_data}`}
          className="card-img-top"
          alt={property.title}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">{property.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Type: {property.property_type}</li>
          <li className="list-group-item">Location: {property.location}</li>
          <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
          <li className="list-group-item">Bathrooms: {property.bathrooms}</li>
          <li className="list-group-item">Price: ${property.price}</li>
        </ul>
      </div>
    </div>
  );
};

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
  
    useEffect(() => {
      const fetchProperties = async () => {
        try {
          const response = await axios.get('/api/properties/user/1'); 
          setProperties(response.data);
        } catch (error) {
          console.error('Error fetching properties:', error);
        }
      };
  
      fetchProperties();
    }, []);
  
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 mb-4">
            <button className="btn btn-primary">Add Property</button>
          </div>
          {properties.map((property) => (
            <div className="col-md-4 mb-4" key={property.id}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  

export default Buyer;
