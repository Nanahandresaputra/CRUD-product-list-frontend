import { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useHistory } from "react-router-dom";
import "./index.scss";
import { addProduct, getProduct } from "../../api/api";
const Tambah = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [status, setStatus] = useState(false);
  const history = useHistory();
  useEffect(() => {
    getProduct().then((product) => {
      setName(product.name);
      setPrice(product.price);
      setStock(product.stock);
      setStatus(product.status);
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    let product = { name, price, stock, status };
    addProduct(product).then((res) => alert(`${res.name} added sucessfully press the refresh page button to update the display`));
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
