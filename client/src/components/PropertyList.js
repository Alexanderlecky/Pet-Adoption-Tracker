import React from 'react';
// import './PropertyList.css';

const properties = [
  { id: 1, name: 'Luxury Villa', location: 'New York', price: '$2,000,000' },
  { id: 2, name: 'Beach House', location: 'Miami', price: '$1,500,000' },
];

const PropertyList = ({ filter }) => {
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
        </div>
      ))}
    </div>
  );
}

export default PropertyList;
