/* eslint-disable react/prop-types */

export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start Adding some items in your packing List</em>
      </p>
    );
  }

  const numItems = items.length;
  const packedItem = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItem / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage == 100
          ? `You ready to go ✈️`
          : `💼 You have ${numItems} items on your list, and you already packed
        ${packedItem} (${percentage}%)`}
      </em>
    </footer>
  );
}
