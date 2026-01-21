import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const images = ["/hero.jpg", "/hero.jpg", "/hero.jpg"];

export default function Home() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((i + 1) % images.length), 3000);
    return () => clearInterval(t);
  }, [i]);

  return (
    <div>
      <div style={{ background:`url('${images[i]}') center/cover`, height:"70vh", color:"#fff", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
        <h1>Upload your design. We print it.</h1>
        <button onClick={() => navigate("/services")}>Explore Services</button>
      </div>

      <div style={{ padding:"2rem", background:"#f5faff" }}>
        <h2>Client Reviews</h2>
        <p>⭐️⭐️⭐️⭐️⭐️ Amazing quality – Rahul</p>
        <p>⭐️⭐️⭐️⭐️ Fast delivery – Sneha</p>
      </div>
    </div>
  );
}
