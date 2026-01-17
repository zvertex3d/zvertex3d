import api from "../services/api";

export default function Cart({ item }) {
  const placeOrder = async () => {
    await api.post("/orders", item);
    alert("Order placed");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Cart</h2>
      <p>Material: {item.material}</p>
      <p>Price: ₹{item.price}</p>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
