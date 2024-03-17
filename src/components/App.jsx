/* eslint-disable react/prop-types */
import { useState } from "react";
import "../index.css";
import Logo from "../components/Logo";
import Form  from "../components/Form";
import  PackingList  from "../components/PackingList";
import Stats  from "../components/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: true },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  const handleItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleChecked = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id == id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(items);
  };

  const handleClear = () => {
    let confirmed = window.confirm("Do you want to clear ?");
    if (confirmed)  setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAdd={handleItems} />
      <PackingList
        items={items}
        onDelete={handleDelete}
        onToggled={handleChecked}
        onClearList = {handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
