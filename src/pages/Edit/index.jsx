import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import Input from "../../components/Input";
import { detailProduct, updateProduct } from "../../api/api";

const Edit = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [status, setStatus] = useState(true);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    detailProduct(id).then((product) => {
      setName(product.name);
      setPrice(product.price);
      setStock(product.stock);
      setStatus(product.status);
    });
  }, [id]);

  const productUpdate = (e) => {
    e.preventDefault();
    let product = { name, price, stock, status };
    updateProduct(id, product).then((res) => alert(`${res} press the refresh page button to update the display`));
    history.push("/");
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Edit Produk</h2>
        <br />
        <form onSubmit={productUpdate}>
          <Input name="name" type="text" placeholder="Nama Produk..." label="Nama" value={name} onChange={(e) => setName(e.target.value)} />
          <Input name="price" type="number" placeholder="Harga Produk..." label="Harga" value={price} onChange={(e) => setPrice(e.target.value)} />
          <Input name="Stock" type="number" placeholder="Stock Produk..." label="Stock" value={stock} onChange={(e) => setStock(e.target.value)} />
          <Input name="status" type="checkbox" label="Active" checked={status} onChange={(e) => setStatus(e.target.checked)} />
          <button type="submit" className="btn btn-primary">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
