"use client";

import { useState } from "react";
import { ItemList } from "./item-list.js";
import NewItem from "./new-item.js";
import MealIdeas from "./meal-ideas.js";
import itemsData from "./items.json";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    // Handle adding a new item
    const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
    };

    // Event handler for selecting an item
    const handleItemSelect = (item) => {
        // Clean up item name to remove quantity, size, and emojis
        const cleanedName = item.name
            .split(",")[0] // Remove quantity after comma
            .replace(/[^\w\s]/g, "") // Remove emojis
            .trim();
        setSelectedItemName(cleanedName);
    };

    return (
        <main className="ml-4 mt-2 flex">
            <div className="w-1/2">
                <h1 className="text-3xl font-bold m-2">Shopping List</h1>
                {/* Render NewItem component and pass handleAddItem as onAddItem */}
                <NewItem onAddItem={handleAddItem} />
                {/* Render ItemList component and pass items and onItemSelect */}
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <div className="w-1/2">
                {/* Render MealIdeas component and pass selectedItemName as the ingredient */}
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
