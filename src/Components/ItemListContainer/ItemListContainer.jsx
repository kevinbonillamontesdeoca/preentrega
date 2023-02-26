import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ backgroundColor: '#f2f2f2', padding: '20px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>{greeting}</h1>
      <p style={{ fontSize: '16px' }}>Bienvenido a nuestra tienda en línea</p>
    </div>
  );
};

export default ItemListContainer;