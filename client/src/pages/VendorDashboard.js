import { useEffect, useState } from "react";
import api from "../services/api";

export default function VendorDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/orders").then(res => setOrders(res.data));
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Vendor Dashboard</h2>
      {orders.map(o => (
        <div key={o._id} style={{ border: "1px solid #ddd", padding: "1rem", marginBottom: "1rem" }}>
          <p>Customer: {o.user?.name}</p>
          <p>Material: {o.material}</p>
          <p>Status: {o.status}</p>
        </div>
      ))}
    </div>
  );
}
