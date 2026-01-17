import { useEffect, useState } from "react";
import api from "../services/api";

export default function CustomerDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Customer Dashboard</h2>
      {orders.map(o => (
        <div key={o._id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <p>Material: {o.material}</p>
          <p>Price: ₹{o.price}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
