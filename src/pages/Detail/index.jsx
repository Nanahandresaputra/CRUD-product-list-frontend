import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { detailProduct } from "../../api/api";

const Detail = () => {
  const [detailId, setDetailId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    detailProduct(id).then((product) => setDetailId([product]));
  }, [id]);
  console.log(detailId);

  return (
    <div className="main">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="table">
        {detailId.map((datId, i) => (
          <tbody key={i}>
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
              <tr>
                <td>Status</td>
                <td>{datId.status.toString()}</td>
              </tr>
            </>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Detail;
