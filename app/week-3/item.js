import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li class="border rounded border-sky-500 mx-auto w-full max-w-xs m-4 p-2 list-none hover:scale-110 transition duration-300 ease-in-out">
      <div>
        <p className="text-black-600 font-semibold text-center">{name}</p>
        <p className="text-sm text-black-600 text-center">
          Quantity: {quantity}
        </p>
        <p className="text-sm text-black-600 text-center">
          Category: {category}
        </p>
      </div>
    </li>
  );
}
