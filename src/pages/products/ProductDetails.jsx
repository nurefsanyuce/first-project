import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import { getItem } from "../../redux/products/productsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const SingleProd = useSelector((state) => state.products.single);

  const [isExpanded, setIsExpanded] = useState(false);

  const TEXT_PREVIEW_LENGTH = 150;

  useEffect(() => {
    if (id) {
      dispatch(getItem(id));
    }
  }, [id, dispatch]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded); // Durumu değiştir
  };
  const previewText = SingleProd?.text?.slice(0, TEXT_PREVIEW_LENGTH);
  return (
    <Layout>
      <div className="container mt-5">
        <div className="card shadow-lg">
          {SingleProd?.photo && (
            <img
              src={SingleProd.photo}
              alt={SingleProd.title}
              className="card-img-top"
              style={{
                height: "300px",
                width: "300px",
                margin: "auto",
                objectFit: "content",
              }}
            />
          )}
          <div className="card-body">
            <h3>{SingleProd?.title || "Başlık Yok"}</h3>

            <div style={{ borderBottom: "2px solid #ccc", margin: "10px 0" }} />

            <h5>{SingleProd?.category || "Categori Yok "}</h5>
            <div style={{ borderBottom: "2px solid #ccc", margin: "10px 0" }} />

            <p className="card-text">
              {isExpanded ? SingleProd?.text : `${previewText}...`}

              {SingleProd?.text &&
                SingleProd.text.length > TEXT_PREVIEW_LENGTH && (
                  <button className="btn btn-link" onClick={handleToggleExpand}>
                    {isExpanded ? "Kapat" : "Devamını Oku"}
                  </button>
                )}
            </p>
            <NavLink to="/products">
              <button
                type="button"
                title="return"
                className="btn btn-secondary"
              >
                Geri
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
