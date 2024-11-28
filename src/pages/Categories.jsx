import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DeleteModal from "../components/DeleteModal";
import { deleteCateItem } from "../redux/categories/categoriesSlice";

const Categories = () => {
  const categories = useSelector((state) => state.categories.list);
  const dispatch = useDispatch();
  const [delCateItem, setDeleteItem] = useState({});

  const handleDelete = (id) => {
    dispatch(deleteCateItem(id));
    setDeleteItem({});
  };
  return (
    <Layout>
      <div className="container-fluid">
        <div className="content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Kategoriler</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <NavLink to="/">Gösterge Paneli</NavLink>
                </li>
                <li className="breadcrumb-item active">Kategoriler</li>
              </ol>
            </div>

            <div className="container-fluid">
              <div className="content-header">
                <div className="card">
                  <div className="card-header">
                    <a href="/category/add" className="btn btn-success btn-sm">
                      Yeni Ekle
                    </a>
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
                      <div className="row">
                        <div className="col-sm-12">
                          <table className="table table-bordered table-hover ">
                            <thead>
                              <tr>
                                <th>İsim</th>
                                <th>Üst Kategori</th>
                                <th>Tip</th>
                                <th>İşlemler</th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.values(categories).length > 0 ? (
                                Object.values(categories).map((cate) => (
                                  <tr key={cate.id}>
                                    <td>{cate.name}</td>
                                    <td>
                                      {categories[cate.upper]?.name || "-"}
                                    </td>
                                    <td>{cate.type}</td>
                                    <td>
                                      <Link
                                        to={`/categories/${cate.id}`}
                                        title="Edit"
                                        className="btn btn-primary btn-xs"
                                      >
                                        <i className="fas fa-pencil-alt"></i>
                                      </Link>

                                      <button
                                        type="button"
                                        onClick={() => {
                                          setDeleteItem(cate);
                                        }}
                                        title="Delete"
                                        className="btn btn-danger btn-xs mx-2"
                                      >
                                        <i className="fas fa-times-circle"></i>
                                      </button>
                                    </td>
                                  </tr>
                                ))
                              ) : (
                                <tr className="odd">
                                  <td
                                    valign="top"
                                    colSpan="6"
                                    className="dataTables_empty"
                                  >
                                    Kayıt bulunamadı
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
                            Showing 0 to 0 of 0 entries
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                          <div
                            className="dataTables_paginate paging_simple_numbers"
                            id="table1_paginate"
                          >
                            <ul className="pagination">
                              <li
                                className="paginate_button page-item previous disabled"
                                id="table1_previous"
                              >
                                <button
                                  aria-controls="table1"
                                  data-dt-idx="0"
                                  className="page-link"
                                >
                                  Previous
                                </button>
                              </li>
                              <li
                                className="paginate_button page-item next disabled"
                                id="table1_next"
                              >
                                <button
                                  aria-controls="table1"
                                  data-dt-idx="1"
                                  className="page-link"
                                >
                                  Next
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
      </div>
      <DeleteModal
        deleteCateItem={delCateItem}
        setDeleteItem={setDeleteItem}
        handleDelete={handleDelete}
      />
    </Layout>
  );
};

export default Categories;
