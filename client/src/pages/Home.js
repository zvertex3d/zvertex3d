import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const slides = ["/hero.jpg","/hero.jpg","/hero.jpg"];
const reviews = [
  { name: "Rahul", text: "Outstanding quality, fast delivery!", rating: 5 },
  { name: "Sneha", text: "Professional and precise 3D prints.", rating: 5 },
  { name: "Arjun", text: "Great experience with Zvertex3D!", rating: 4 }
];

export default function Home() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(()=>setI(prev=>(prev+1)%slides.length),4000);
    return ()=>clearInterval(t);
  }, []);

  return (
    <div>
      <div style={{ ...hero, backgroundImage:`url(${slides[i]})` }}>
        <div style={overlay}>
          <h1 style={{ fontSize:"3rem", marginBottom:"1rem" }}>Transforming Ideas to Reality</h1>
          <p style={{ fontSize:"1.2rem", marginBottom:"1.5rem" }}>Upload your designs, we print them in high precision</p>
          <button style={btn} onClick={()=>navigate("/upload")}>Upload Photo</button>
        </div>
      </div>

      <div style={instructions}>
        <h2>How to Work With Us</h2>
        <ol style={{ fontSize:"1.1rem", lineHeight:"2" }}>
          <li>Create an Account</li>
          <li>Drag and Drop Your 3D Part Files</li>
          <li>Select Materials & Print Specs</li>
          <li>Choose Lead Time</li>
          <li>Review & Checkout / Get Instant Quote</li>
        </ol>
      </div>

      <div style={reviewsSection}>
        <h2>What Clients Say</h2>
        <div style={reviewGrid}>
          {reviews.map((r,idx)=>(
            <div key={idx} style={reviewCard}>
              <p>{'⭐️'.repeat(r.rating)}</p>
              <p>"{r.text}"</p>
              <p><b>- {r.name}</b></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const hero = {
  height: "80vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const overlay = {
  backgroundColor: "rgba(0,0,0,0.5)",
  color: "#fff",
  padding: "2rem 3rem",
  borderRadius: "10px",
  textAlign: "center"
};

const btn = {
  padding: "0.8rem 2rem",
  backgroundColor: "#00BFFF",
  border: "none",
  borderRadius: "5px",
  fontWeight: "600",
  cursor: "pointer"
};

const instructions = {
  background: "#fff",
  padding: "3rem",
  textAlign: "center",
  marginTop: "2rem",
  borderRadius: "10px",
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};

const reviewsSection = {
  background: "#F5FAFF",
  padding: "3rem",
  textAlign: "center",
  marginTop: "2rem"
};

const reviewGrid = {
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  marginTop: "2rem",
  flexWrap: "wrap"
};

const reviewCard = {
  background: "#fff",
  padding: "1.5rem",
  borderRadius: "10px",
  width: "250px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
};
