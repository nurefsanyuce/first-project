import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/posts/postsSlice";
import DeleteModal from "../components/DeleteModal";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const [delItem, setDeleteItem] = useState({});

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
    setDeleteItem({});
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
                                      setDeleteItem(post);
                                    }}
                                    title="Delete"
                                    className="btn btn-danger btn-xs mx-2"
                                  >
                                    <i className="fas fa-times-circle"></i>
                                  </button>

                                  <Link
                                    to={`/posts/${post.id}/text`}
                                    title="Comment"
                                    className="btn btn-success btn-xs"
                                  >
                                    <i className="fas fa-comment"></i>
                                  </Link>
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
      <DeleteModal
        deleteItem={delItem}
        setDeleteItem={setDeleteItem}
        handleDelete={handleDelete}
      />
    </Layout>
  );
};

export default Posts;
