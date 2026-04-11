import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStore } from "../services/api";
import Navbar from "../components/Navbar";

const Store = () => {
  const { code } = useParams();
  const [store, setStore] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const res = await getStore(code);
      setStore(res.data);
    };
    fetch();
  }, [code]);

  return (
    <>
      <Navbar />
      <div style={{ padding: 20 }}>
        <h2>{store.storeName}</h2>
        <p>{store.location}</p>
        <p>{store.printers}</p>
      </div>
    </>
  );
};

export default Store;