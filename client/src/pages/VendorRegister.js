import { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import { registerVendor } from "../services/api";

const VendorRegister = () => {
  const [form, setForm] = useState({});
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setForm({ ...form, photo: URL.createObjectURL(file) });
  };

  const submit = async () => {
    await registerVendor(form);
    alert("Submitted");
  };

  return (
    <Container>
      <TextField label="Name" fullWidth onChange={e => setForm({...form, name:e.target.value})}/>
      <TextField label="Email" fullWidth onChange={e => setForm({...form, email:e.target.value})}/>

      <Button component="label">
        Upload Store Photo
        <input hidden type="file" onChange={handleImage}/>
      </Button>

      {preview && (
        <img src={preview} style={{ width: 200, marginTop: 10 }} />
      )}

      <Button onClick={submit}>Submit</Button>
    </Container>
  );
};

export default VendorRegister;