"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page({ shoppingList = itemsData }) {
  const [items, setItems] = useState(shoppingList);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
    console.log(items);
  };

  return (
    <div>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </div>
  );
}
