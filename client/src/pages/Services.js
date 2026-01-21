export default function Services() {
  const services = [
    { title:"3D Printing", desc:"High-quality, precise prints for all materials.", img:"/hero.jpg" },
    { title:"3D Scanning & Reverse Engineering", desc:"Scan objects and recreate 3D models accurately.", img:"/hero.jpg" },
    { title:"Sculpting & Design", desc:"Creative 3D designs and sculpting services.", img:"/hero.jpg" },
    { title:"Manufacturing", desc:"Industrial, Educational, and Medical applications.", img:"/hero.jpg" }
  ];

  return (
    <div style={{ padding:"3rem", background:"#F5FAFF" }}>
      <h1 style={{ textAlign:"center", marginBottom:"2rem" }}>Our Services</h1>
      <div style={grid}>
        {services.map((s,idx)=>(
          <div key={idx} style={card}>
            <img src={s.img} alt={s.title} style={{ width:"100%", borderRadius:"10px" }}/>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem"
};

const card = {
  background:"#fff",
  padding:"1rem",
  borderRadius:"10px",
  textAlign:"center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
};
