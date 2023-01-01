import axios from "axios";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useHistory } from "react-router-dom";
import "./index.scss";
const Tambah = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const addProduct = async () => {
      const res = await axios.get(process.env.REACT_APP_DATA);
      setName(res.data.name);
      setPrice(res.data.price);
      setStock(res.data.stock);
      setStatus(res.data.status);
    };
    addProduct();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_DATA, { name, price, stock, status });
    } catch (e) {
      console.log(e);
    }
    history.push("/");
  };
  return (
    <div className="main">
      <div className="card">
        <h2>Tambah Produk</h2>
        <br />
        <form onSubmit={handleAdd}>
          <Input name="name" type="text" placeholder="Nama Produk..." value={name || ""} onChange={(e) => setName(e.target.value)} label="Nama" />
          <Input name="price" type="number" placeholder="Harga Produk..." value={price || ""} onChange={(e) => setPrice(e.target.value)} label="Harga" />
          <Input name="stock" type="number" placeholder="Stock Produk..." value={stock || ""} onChange={(e) => setStock(e.target.value)} label="Stock" />
          <Input name="status" type="checkbox" checked={status || false} onChange={(e) => setStatus(e.target.checked)} label="Active" />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Tambah;
