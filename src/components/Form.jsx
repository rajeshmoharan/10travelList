import { useState } from "react";


export default function Form({ onAdd }) {
  // state
  const [input, setInput] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    const newItem = {
      input,
      quantity,
      packed: false,
      id: Date.now(),
    };
    // console.log(newItem);
    onAdd(newItem);
    setInput("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <button>Add</button>
    </form>
  );
}
