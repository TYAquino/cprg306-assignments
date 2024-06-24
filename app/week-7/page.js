"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [shoppingList, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF][\uDC00-\uDFFF]|[\u2011-\u26FF]|[\uD83E-\uDD10-\uDDFF])/g,
        ""
      )
      .trim();

    setSelectedItemName(cleanName);
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={shoppingList} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2 p-4">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}
