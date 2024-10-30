"use client";

import { useState } from "react";
import { ItemList } from "./item-list.js";
import NewItem from "./new-item.js";    
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => { setItems((prevItems) => [...prevItems, newItem]);
    };

    return(
        <main className="ml-4 mt-2">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            {/* Render NewItem component and pass handleAddItem as onAddItem */}
            <NewItem onAddItem={handleAddItem} />

            {/* Render ItemList component and pass items as a prop */}
            <ItemList items={items} />
        </main>
    )
};