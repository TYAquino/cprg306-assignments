import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between mb-2">
      <span className="text-lg">{name}</span>
      <span className="text-sm text-gray-600">{quantity} x {category}</span>
    </li>
  );
};

export default Item;
