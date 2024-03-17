import { useState } from "react";
import  Item  from "../components/Item";

export default function PackingList({ items, onDelete, onToggled, onClearList }) {

  const [sorted, setSorted] = useState("quantity");

  let sortedItem;

  if (sorted === "quantity") sortedItem = items;

  if (sorted === "input") sortedItem = items.slice().sort((a, b) => a.input.localeCompare(b.input)
  );

  if (sorted === "packed") sortedItem = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed)
  );




  return (
    <div className="list">
      <ul>
        {sortedItem.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggled={onToggled} />
        ))}
      </ul>
      {/* sorting item */}
      <div className="actions">
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option value="quantity">Sort by input order</option>
          <option value="input">Sort by description order</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
