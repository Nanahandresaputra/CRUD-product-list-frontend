import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { deleteProduct, getProduct } from "../../api/api";
import formatRupiah from "../../utils/utils";

const Home = () => {
  const [datar, setDatar] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    getProduct().then((res) => {
      setDatar(res);
      setSearch(res);
    });
  }, []);
  const handleDelete = (id) => {
    deleteProduct(id).then((res) => alert(`${res} press the refresh page button to update the display`));
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);
    if (getSearch.length > 0) {
      const searchData = datar.filter((item) => item.name.toLowerCase().includes(getSearch));
      setDatar(searchData);
    } else {
      setDatar(search);
    }
  };
  return (
    <div className="main">
      <Link to="/tambah" className="btn btn-primary">
        Tambah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." value={query} onChange={(e) => handleSearch(e)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {datar.map((datas, i) => (
            <tr key={i}>
              <td>{datas._id}</td>
              <td>{datas.name}</td>
              <td>{formatRupiah(datas.price)}</td>
              <td className="text-center">
                <Link to={`/detail/${datas._id}`} className="btn btn-sm btn-info">
                  Detail
                </Link>
                <Link to={`/edit/${datas._id}`} className="btn btn-sm btn-warning">
                  Edit
                </Link>
                <button
                  type="submit"
                  onClick={() => {
                    handleDelete(datas._id);
                  }}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          to="/tambah"
          className="btn btn-primary mt-25"
          onClick={() => {
            window.location.reload();
          }}
        >
          Refresh page
        </button>
      </div>
    </div>
  );
};

export default Home;
