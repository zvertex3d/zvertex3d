import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const proceed = () => {
    if (!file) return alert("Upload image");
    navigate("/order", { state: { file } });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upload Image</h2>
      <p>Upload image to get your 3D Printed model</p>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <br /><br />
      <button onClick={proceed}>Proceed</button>
    </div>
  );
}
