import React from "react";
import Layout from "../components/Layout";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/posts/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Posta</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <NavLink to="/">Gösterge Paneli</NavLink>
                </li>
                <li className="breadcrumb-item active">Posta</li>
              </ol>
            </div>
            <div className="content">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-header">
                    <a href="/post/add" className="btn btn-success btn-sm">
                      Yeni ekle
                    </a>
                    <a href="#" className="btn btn-warning btn-sm float-right">
                      <i className="fas fa-trash-alt"></i> Geri dönüşüm kutusu
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

                      {/* <div className="row">
                        <div className="col-sm-12">
                          <table
                            id="table1"
                            className="table table-bordered table-hover dataTable no-footer dtr-inline collapsed"
                            role="grid"
                            aria-describedby="table1_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting_asc"
                                  tabIndex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-sort="ascending"
                                  aria-label="Image: activate to sort column descending"
                                >
                                  Fotoğraf
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Title: activate to sort column ascending"
                                >
                                  Başlık
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Permalink: activate to sort column ascending"
                                >
                                  Permalink
                                </th>
                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Category: activate to sort column ascending"
                                >
                                  Kategori
                                </th>

                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Creation Date: activate to sort column ascending"
                                >
                                  Oluşturulma tarihi
                                </th>

                                <th
                                  className="sorting"
                                  tabIndex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label=": activate to sort column ascending"
                                  style={{ display: "none" }}
                                ></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr role="row" className="odd">
                                <td tabIndex="0" className="sorting_1">
                                  <img
                                    src=""
                                    alt=""
                                    style={{ height: "24px" }}
                                  />
                                </td>
                                <td>dfthfhfh</td>
                                <td>dfthfhfh</td>
                                <td>Unnamed</td>

                                <td>31 minutes ago</td>
                                <td style={{ display: "none" }}>
                                  <div
                                    className="toggle btn btn-danger off btn-xs"
                                    data-toggle="toggle"
                                    style={{ width: "0px", height: "0px" }}
                                  >
                                    <input
                                      className="switch"
                                      type="checkbox"
                                      name="my-checkbox"
                                      data-id="1"
                                      data-toggle="toggle"
                                      data-size="mini"
                                      data-on="Published"
                                      data-off="Draft"
                                      data-onstyle="success"
                                      data-offstyle="danger"
                                    />
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div> */}

                      <div className="card-body">
                        <table className="table table-bordered table-hover">
                          <thead>
                            <tr>
                              <th>Fotoğraf</th>
                              <th>Başlık</th>
                              <th>Permalink</th>
                              <th>Kategori</th>
                              <th>Oluşturulma Tarihi</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.values(posts).map((post) => (
                              <tr key={post.id}>
                                <td>
                                  {post.photo ? (
                                    <img
                                      src={post.photo}
                                      alt="Fotoğraf"
                                      style={{ height: "24px" }}
                                    />
                                  ) : (
                                    "Yok"
                                  )}
                                </td>
                                <td>{post.title}</td>
                                <td>{post.slug}</td>
                                <td>{post.category}</td>
                                <td>{post.createdAt}</td>
                                <td>
                                  <Link
                                    to={`/posts/${post.id}`}
                                    title="Edit"
                                    className="btn btn-primary btn-xs"
                                  >
                                    <i className="fas fa-pencil-alt"></i>
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      handleDelete(post.id);
                                    }}
                                    title="Delete"
                                    className="btn btn-danger btn-xs"
                                  >
                                    <i className="far fa-times-circle"></i>
                                  </button>
                                </td>
                              </tr>
                            ))}
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
                          Showing 1 to 1 of 1 entries
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-7">
                        <div className="float-right" id="table1_paginate">
                          <ul className="pagination">
                            <li
                              className="paginate_button page-item previous disabled"
                              id="table1_previous"
                            >
                              <a
                                href="#"
                                aria-controls="table1"
                                data-dt-idx="0"
                                tabIndex="0"
                                className="page-link"
                              >
                                Önceki
                              </a>
                            </li>
                            <li className="paginate_button page-item active">
                              <a
                                href="#"
                                aria-controls="table1"
                                data-dt-idx="1"
                                tabIndex="0"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li
                              className="paginate_button page-item next disabled"
                              id="table1_next"
                            >
                              <a
                                href="#"
                                aria-controls="table1"
                                data-dt-idx="2"
                                tabIndex="0"
                                className="page-link"
                              >
                                Sonraki
                              </a>
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
    </Layout>
  );
};

export default Posts;
