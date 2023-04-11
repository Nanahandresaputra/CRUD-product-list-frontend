import { Link, useParams } from "react-router-dom";
import "./index.scss";
import { useEffect, useState } from "react";
import { detailProduct } from "../../api/api";
import formatRupiah from "../../utils/utils";

const Detail = () => {
  const [detailId, setDetailId] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    detailProduct(id).then((product) => setDetailId([product]));
  }, [id]);

  return (
    <div className="mainDetail">
      <Link to="/" className="btn btn-primary">
        Kembali
      </Link>

      <table className="tableDetail">
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
                <td>{formatRupiah(datId.price)}</td>
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
