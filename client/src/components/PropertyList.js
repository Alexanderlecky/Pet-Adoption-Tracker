import React from 'react';

const PropertyList = ({ properties = [], filter }) => { 
  const filteredProperties = properties.filter((property) =>
    property.location.includes(filter)
  );

  return (
    <div className="property-list">
      {filteredProperties.map((property) => (
        <div key={property.id} className="property-item">
          <h2>{property.name}</h2>
          <p>{property.location}</p>
          <p>{property.price}</p>
          {/* Construct the full URL to access the images */}
          <img 
            src={`http://localhost:5000/${property.image}`} 
            alt={property.name} 
            style={{ width: "300px" }} 
          />
        </div>
      ))}
    </div>
  );
}

export default PropertyList;