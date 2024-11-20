"use client";
import Item from './item.js';
import {useState} from 'react';

export function ItemList({ items, onItemSelect }) {

    const [sortBy, setSortBy] = useState('name');

    // items.sort ((a, b) => a.name.localeCompare(b.name)); // sort by name
    // items.sort ((a, b) => a.category.localeCompare(b.category)); // sort by category

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });


    return (
        <main className="m-4">

            <div className="flex space-x-2 mb-4">
            <button className={`px-4 py-2 rounded-xl h-full  ${sortBy === 'name' ? "bg-blue-700" : "bg-gray-700 && hover:bg-green-900"} text-white`}onClick={() => setSortBy('name')}>Sort by Name </button>
            <button className={`px-4 py-2 rounded-xl h-full  ${sortBy === 'category' ? "bg-blue-700" : "bg-gray-700 && hover:bg-green-900"} text-white`} onClick={() => setSortBy('category')}>Sort by Category</button>
            </div>
            {sortedItems.map((item, id) => (
                <Item
                    key={id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                />
            ))}
        </main>
    );
}