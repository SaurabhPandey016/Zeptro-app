import { useEffect, useState } from "react";

const Wishlist = () => {
  const [items, setItems] = useState([]);

  const fetchWishlist = async () => {
    const res = await fetch("http://localhost:3000/favorites");
    const data = await res.json();
    setItems(data);
  };

  const removeItem = async (id) => {
    await fetch(`http://localhost:3000/favorites/${id}`, {
      method: "DELETE",
    });
    fetchWishlist();
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      {items.length === 0 && <p>No items in wishlist</p>}

      {items.map(item => (
        <div key={item._id} className="wishlist-card">
          <img src={item.image} alt={item.title} width="120" />
          <h4>{item.title}</h4>
          <p>₹ {item.price}</p>

          <button onClick={() => removeItem(item._id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
