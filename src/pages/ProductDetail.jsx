import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


export default function ProductDetail() {
  const [curProduct, setCurProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setCurProduct(res.data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    
    <div className="outer-detail-container">
      {curProduct.rating ? ( 
        <div className="detail-container">
          <div className="detail-image">
            <img src={curProduct.image} alt={curProduct.title} />
          </div>
          <div className="detail-info">
            <h2>{curProduct.title}</h2>
            <div className="detail-price">
              <p><i>{curProduct.category}</i></p>
              <p><u><b>${curProduct.price}</b></u></p>
            </div>
            <p>{curProduct.description}</p>
            <div className="detail-rating">
              <p>
                <i>
                  Rated: <b>{curProduct.rating.rate} / 5</b> by{" "}
                  <b>{curProduct.rating.count}</b> users.
                </i>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p><b>Loading product details...</b></p> 
      )}
    </div>
  );
}
