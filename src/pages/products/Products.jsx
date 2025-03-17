import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProdItem } from "../../redux/products/productsSlice";
import DeleteModal from "../../components/DeleteModal";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);
  const [delProdItem, setDeleteItem] = useState({});

  const handleDelete = (id) => {
    dispatch(deleteProdItem(id));
    setDeleteItem({});
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Ürünler</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <NavLink to="/">Gösterge Paneli</NavLink>
                </li>
                <li className="breadcrumb-item active">Ürünler</li>
              </ol>
            </div>
            <div className="col-md-12 mx-auto mt-3">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-header">
                    <NavLink
                      to="/product/add"
                      className="btn btn-success btn-sm"
                    >
                      Yeni ekle
                    </NavLink>
                    <NavLink
                      to="#"
                      className="btn btn-warning btn-sm float-right"
                    >
                      <i className="fas fa-trash-alt"></i> Geri dönüşüm kutusu
                    </NavLink>
                  </div>
                  <div className="card-body">
                    <div
                      id="table1_wrapper"
                      className="dataTables_wrapper dt-bootstrap4 no-footer"
                    >
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div className="dataTables_length" id="table1_length">
                            <label>
                              {" "}
                              <select
                                name="table1_length"
                                aria-controls="table1"
                                className="custom-select custom-select-sm form-control form-control-sm"
                              >
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>{" "}
                              Kayıt gösteriliyor
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <div id="table1_filter" className="dataTables_filter">
                            <label>
                              Arama:
                              <input
                                type="search"
                                className="form-control form-control-sm"
                                placeholder=""
                                aria-controls="table1"
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="card-body">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Fotoğraf</th>
                              <th>Ürün Adı</th>
                              <th>Ürün Açıklaması</th>
                              <th>Kategoriler</th>
                              <th>Oluşturulma Tarihi</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.values(products).length > 0 ? (
                              Object.values(products).map((prod) => (
                                <tr key={prod.id}>
                                  <td>
                                    {prod.images?.[0] ? (
                                      <img
                                        src={prod.images?.[0]}
                                        alt="Fotoğraf"
                                        style={{ height: "24px" }}
                                      />
                                    ) : (
                                      "Yok"
                                    )}
                                  </td>
                                  <td>{prod.title}</td>
                                  <td>
                                    {prod.description.length > 15
                                      ? `${prod.description.slice(0, 15)}...`
                                      : prod.description}
                                  </td>

                                  <td>
                                    {prod.categories?.map((cate) => {
                                      return cate.label;
                                    })}
                                  </td>
                                  <td>{prod.createdAt}</td>
                                  <td>
                                    <Link
                                      to={`/product/${prod.id}`}
                                      title="Edit"
                                      className="btn btn-primary btn-xs"
                                    >
                                      <i className="fas fa-pencil-alt"></i>
                                    </Link>

                                    <button
                                      type="button"
                                      onClick={() => {
                                        setDeleteItem(prod);
                                      }}
                                      title="Delete"
                                      className="btn btn-danger btn-xs mx-2"
                                    >
                                      <i className="fas fa-times-circle"></i>
                                    </button>

                                    <Link
                                      to={`/products/${prod.id}/text`}
                                      title="Comment"
                                      className="btn btn-success btn-xs"
                                    >
                                      <i className="fas fa-comment"></i>
                                    </Link>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr className="odd">
                                <td
                                  valign="top"
                                  align="center"
                                  colSpan="6"
                                  className="dataTables_empty"
                                >
                                  Kayıtlı posta yok
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-12 col-md-5">
                        <div
                          className="dataTables_info"
                          id="table1_info"
                          role="status"
                          aria-live="polite"
                        >
                          20 elemandan 1 ile 10 arası gösteriliyor
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="float-right" id="table1_paginate">
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="table1_previous"
                            >
                              <button
                                aria-controls="table1"
                                data-dt-idx="0"
                                tabIndex="0"
                                className="page-link"
                              >
                                Önceki
                              </button>
                            </li>
                            <li className="paginate_button page-item active">
                              <button
                                aria-controls="table1"
                                data-dt-idx="1"
                                className="page-link"
                              >
                                1
                              </button>
                            </li>
                            <li
                              className="paginate_button page-item next disabled"
                              id="table1_next"
                            >
                              <button
                                aria-controls="table1"
                                data-dt-idx="2"
                                className="page-link"
                              >
                                Sonraki
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteModal
        deleteItem={delProdItem}
        setDeleteItem={setDeleteItem}
        handleDelete={handleDelete}
      />
    </Layout>
  );
};
export default Products;
