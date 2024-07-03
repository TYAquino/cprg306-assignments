"use client";
import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/router";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [shoppingList, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("./week-8");
    }
  }, [user, router]);

  const handleSignIn = async () => {
    await gitHubSignIn();
    router.push("./week-8/shopping-list");
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  const handleAddItem = (newItem) => {
    setItems([...shoppingList, newItem]);
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

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-200 flex justify-center items-center">
        <div className="w-200 h-60 bg-white shadow-lg rounded-lg p-6 text-center">
          <h1 className="text-3xl font-bold mb-10">Welcome to Shopping List</h1>
          <button
            onClick={handleSignIn}
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full mb-2"
          >
            Login with GitHub
          </button>
          <div>
            <Link
              href="/week-8/shopping-list"
              className="text-blue-500 hover:underline"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="p-8 bg-teal-500 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Shopping List</h1>
      <div style={{ display: "flex", justifyContent: "pace-between" }}>
        <div>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex flex-col items-left w-1/4 p-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
      <div className="mb-2">
        <p className="text-gray-700 mb-2">
          Welcome, {user.displayName} ({user.email})
        </p>
        <button
          onClick={handleSignOut}
          className="bg-red-500 text-white px-4 py-2 rounded-md w-full"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
