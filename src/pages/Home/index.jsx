import { Link } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [datar, setDatar] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(process.env.REACT_APP_DATA);
      setDatar(res.data);
      setSearch(res.data);
      // console.log(res);
    };
    getData();
  }, []);
  const handleDelete = async (id) => {
    window.location.reload();
    try {
      const res = await axios.delete(process.env.REACT_APP_DATA + id);
      console.log(res.data);
    } catch (e) {}
  };

  const handleSearch = (e) => {
    const getSearch = e.target.value;
    setQuery(getSearch);
    // console.log(getSearch);
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
        Tamah Produk
      </Link>
      <div className="search">
        <input type="text" placeholder="Masukan kata kunci..." value={query} onChange={(e) => handleSearch(e)} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-right">Price</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {datar.map((datas, i) => (
            <tr key={i}>
              <td>{datas.name}</td>
              <td>{datas.price}</td>
              <td className="text-right">{datas.stock}</td>
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
    </div>
  );
};

export default Home;
