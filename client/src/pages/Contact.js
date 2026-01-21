export default function Contact() {
  return (
    <div style={{ padding:"3rem", background:"#F5FAFF" }}>
      <h1 style={{ textAlign:"center", marginBottom:"2rem" }}>Contact Us</h1>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=Suryanagar,Hayathnagar,Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="600"
          height="400"
          style={{ border:0, borderRadius:"10px" }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <div style={{ textAlign:"center", marginTop:"2rem" }}>
        <p>📞 +91 8639684322</p>
        <p>📧 zvertex3d@gmail.com</p>
        <p>📍 Suryanagar, Hayathnagar, Hyderabad, India</p>
      </div>
    </div>
  );
}
