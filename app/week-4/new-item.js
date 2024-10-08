"use client";

import { useState} from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1)

    // now we will create increament function as shown in the assignment
    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    }

    // now we will create decrement function as shown in the assignment
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <main className="flex justify-center w-full">
            <div className="flex justify-between p-3 m-4 bg-white text-black w-36">
                <h1 className="w-10 bg-slate-300 align-middle">{quantity}</h1>
                <button 
                    onClick={decrement}
                    className={`w-10 bg-blue-400 hover:bg-blue-600 ${quantity <= 1 ? 'opacity-50 cursor-not-allowed' : 'hover:font-bold active:bg-blue-200'}`}
                    disabled={quantity <= 1}
                >
                    -
                </button>
                <button 
                    onClick={increment}
                    className={`w-10 bg-blue-400 hover:bg-blue-500 ${quantity >= 20 ? 'opacity-50 cursor-not-allowed' : 'hover:font-bold active:bg-blue-200'}`}
                    disabled={quantity >= 20}
                >
                    +
                </button>
            </div>
        </main>
    )
}