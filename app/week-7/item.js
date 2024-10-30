export default function Item(props) {
    return (
        <section className="border p-1 m-1 bg-blue-700 border-black rounded-md shadow-md border max-w-xs">
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