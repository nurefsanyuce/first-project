import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/Layout";

import "react-18-image-lightbox/style.css";
import { getItem } from "../../redux/products/productsSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const SingleProd = useSelector((state) => state.products.single);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const TEXT_PREVIEW_LENGTH = 150;

  useEffect(() => {
    if (id) {
      dispatch(getItem(id));
    }
  }, [id, dispatch]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="card shadow-lg">
          {SingleProd?.images && SingleProd.images.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {SingleProd.images.map((img, index) => (
                <div
                  key={index}
                  style={{ margin: "10px", position: "relative" }}
                >
                  <img
                    src={img}
                    alt={`Ürün Fotoğrafı ${index + 1}`}
                    className="m-2"
                    style={{
                      width: "100px",
                      height: "100px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          )}
          {isOpen && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "66vw",
                height: "66vh",
                background: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1050,
              }}
            >
              <img
                src={SingleProd.images[photoIndex]}
                alt="Büyük Fotoğraf"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "black",
                  border: "none",
                  borderRadius: "50%",
                  width: "25px",
                  height: "25px",
                  cursor: "pointer",
                }}
              >
                X
              </button>
            </div>
          )}

          <div className="card-body">
            <div>
              <h3>Ürün Adı</h3>
              <p>{SingleProd?.title || "Başlık Yok"}</p>
            </div>

            <div style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }} />

            <div>
              <h3>Kategori</h3>
              <p>{SingleProd?.categories?.join(", ") || "Kategori Yok"}</p>
            </div>

            <div style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }} />

            <div className="card-text">
              <h3>Ürün Açıklaması</h3>
              <p>
                {isExpanded
                  ? SingleProd?.description
                  : `${SingleProd?.description?.slice(
                      0,
                      TEXT_PREVIEW_LENGTH
                    )}...`}
                {SingleProd?.description &&
                  SingleProd.description.length > TEXT_PREVIEW_LENGTH && (
                    <button
                      className="btn btn-link"
                      onClick={handleToggleExpand}
                    >
                      {isExpanded ? "Kapat" : "Devamını Oku"}
                    </button>
                  )}
              </p>
            </div>

            <div style={{ borderBottom: "1px solid #ccc", margin: "10px 0" }} />

            <div>
              <h3>Özellikler</h3>
              <ul>
                {SingleProd?.features?.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.name}:</strong> {feature.value}
                  </li>
                )) || <p>Özellik Yok</p>}
              </ul>
            </div>

            <div style={{ borderBottom: "1px solid #ccc", margin: "10px " }} />

            <NavLink to="/products">
              <button type="button" className="btn btn-secondary">
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
