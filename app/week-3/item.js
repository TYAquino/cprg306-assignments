import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li class="border border-sky-500 mx-auto w-full max-w-xs m-4 p-2 list-none">
      <div>
        <p class="text-black-600 font-semibold text-center">{name}</p>
        <p class="text-sm text-black-600 text-center">Quantity: {quantity}</p>
        <p class="text-sm text-black-600 text-center">Category: {category}</p>
      </div>
    </li>
  );
}
