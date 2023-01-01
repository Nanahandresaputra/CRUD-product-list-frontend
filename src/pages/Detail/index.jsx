import { Link, useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const Detail = () => {
  const [detailId, setDetailId] = useState([]);
  const { id } = useParams();

  const dataId = axios
    .get(process.env.REACT_APP_DATA + id)
    // .get(`http://localhost:8000/api/v2/product/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e));

  useEffect(() => {
    dataId.then((detId) => setDetailId([detId])).catch((e) => console.log(e));
  }, [dataId]);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        <tbody>
          {detailId.map((datId, i) => (
            <>
              <tr key={i}>
                <td>ID</td>
                <td>{datId._id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{datId.name}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{datId.price}</td>
              </tr>
              <tr>
                <td>Stock</td>
                <td>{datId.stock}</td>
              </tr>
            </>
          ))}
          {/* <tr>
            <td>ID</td>
            <td>: asdasdasdasd</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>: Laptop</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>: Rp. 20.000.000</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>: 10</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Detail;
