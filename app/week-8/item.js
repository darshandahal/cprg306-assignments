export default function Item(props) {
    return (
        <section 
            className="border p-1 m-1 bg-blue-700 border-black rounded-md shadow-md max-w-xs hover:bg-orange-500"
            onClick={() => props.onSelect(props.name)} // Trigger onSelect with item name when clicked
        >
            <ul>
                <li className="font-bold text-white">
                    Name: {props.name}
                </li>
                <li className="font-bold text-white">
                    Quantity: {props.quantity}
                </li>
                <li className="font-bold text-white">
                    Category: {props.category}
                </li>
            </ul>
        </section>
    );
}
