import React from 'react';

const PropertyList = ({ properties = [], filter }) => { // Default to empty array
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
          <img src={property.image} alt={property.name} />
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
