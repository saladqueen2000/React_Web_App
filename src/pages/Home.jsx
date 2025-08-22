import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ProductList() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setAllProducts(res.data); 
        setProducts(res.data); 
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (search === "") {
      setProducts(allProducts);
    } else {
      const searchedProducts = allProducts.filter(
        (e) =>
          e.title.toLowerCase().includes(search.toLowerCase()) ||
          e.category.toLowerCase().includes(search.toLowerCase())
      );
      setProducts(searchedProducts);
    }
  }, [search, allProducts]);

  return (
    <div>
      <header>
        <div className="search-bar">
          <label>Search: </label>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
      </header>

      <div className="item-list">
        {products.map((p) => (
          <div className="item" key={p.id}>
            <div>
              <div className="image-container">
                <img alt="loading" src={p.image} />
              </div>
              <div className="item_info">
                <div style={{ marginBottom: "10px" }}>
                  <p style={{ fontWeight: 1000 }}>{p.title}</p>
                </div>
                <div style={{ gap: "20px", marginTop: "10px" }}>
                  <p>
                    <i>
                      <u>{p.category}</u>
                    </i>
                  </p>
                  <p>
                    <b>
                      <i>{"$" + p.price}</i>
                    </b>
                  </p>
                  <span style={{ color: "gray" }}>
                    {p.description.slice(0, 100)}...
                  </span>
                </div>
              </div>
            </div>

            <Link to={`${p.id}`} className="details-btn">
              <b>Details</b>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ProductList;
