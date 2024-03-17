import App from "./App";

export default function Item({ item, onDelete, onToggled }) {
  return (
    <li style={item.packed ? { textDecoration: "line-through" } : {}}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggled(item.id)} />
      <span>
        {item.quantity}
        {item.input}
      </span>
      <button onClick={() => onDelete(item.id)}>❌</button>
    </li>
  );
}
