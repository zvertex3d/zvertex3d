import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { registerVendor } from "../services/api";

const VendorRegister = () => {
  const [data, setData] = useState({
    storeName: "",
    phone: "",
    email: "",
    printers: "",
    location: "",
    photos: []
  });

  const handleSubmit = async () => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    await registerVendor(formData);
    alert("Registered Successfully");
  };

  return (
    <div>
      <h2>Vendor Registration</h2>
      <TextField label="Store Name" onChange={(e) => setData({...data, storeName: e.target.value})}/>
      <TextField label="Phone" onChange={(e) => setData({...data, phone: e.target.value})}/>
      <TextField label="Email" onChange={(e) => setData({...data, email: e.target.value})}/>
      <TextField label="Printers List" onChange={(e) => setData({...data, printers: e.target.value})}/>
      <TextField label="Location" onChange={(e) => setData({...data, location: e.target.value})}/>
      <input type="file" multiple onChange={(e) => setData({...data, photos: e.target.files})} />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

export default VendorRegister;