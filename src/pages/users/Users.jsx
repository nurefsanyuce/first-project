import React from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { deleteUserItem } from "../../redux/user/userSlice";

const Users = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user.list);

  const handleDelete = (id) => {
    dispatch(deleteUserItem(id));
  };

  return (
    <Layout>
      <div className="container-fluid">
        <div className="content-header">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Kullanıcılar</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <NavLink to="/">Gösterge Paneli</NavLink>
                </li>
                <li className="breadcrumb-item active">Kullanıcılar</li>
              </ol>
            </div>
          </div>
          <div className="content">
            <div className="card">
              <div className="card-header">
                <Link to="/users/add" className="btn btn-success btn-sm">
                  Kullanıcı ekle
                </Link>
                <button className="btn btn-warning btn-sm float-right">
                  <i className="fas fa-trash-alt"></i> Çöp Kutusu
                </button>
              </div>
              <div className="card-body">
                <div
                  id="table1_wrapper"
                  className="dataTables_wrapper
                      dt-bootstrap4
                      no-footer"
                >
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <div className="dataTables_length" id="table1_length">
                        <label>
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
                      <table
                        id="table1"
                        className="table table-bordered table-hover dataTable no-footer dtr-inline"
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
                              aria-label="Name: activate to sort column descending"
                            >
                              Fotoğraf
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="table1"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                            >
                              İsim Soyisim
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="table1"
                              rowspan="1"
                              colspan="1"
                              aria-label="E-mail: activate to sort column ascending"
                            >
                              E-Posta
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="table1"
                              rowspan="1"
                              colspan="1"
                              aria-label="Role: activate to sort column ascending"
                            >
                              Medeni Hali
                            </th>
                            <th
                              className="sorting"
                              tabIndex="0"
                              aria-controls="table1"
                              rowspan="1"
                              colspan="1"
                              aria-label=": activate to sort column ascending"
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.values(data).length > 0 ? (
                            Object.values(data).map((item) => (
                              <tr role="row" className="odd" key={item.id}>
                                <td>
                                  {item.photo && (
                                    <img
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        objectFit: "cover",
                                      }}
                                      src={item.photo}
                                      alt=""
                                    ></img>
                                  )}
                                </td>
                                <td className="sorting_1">{item.name}</td>

                                <td>{item.email}</td>
                                <td>{item.status}</td>
                                <td>
                                  <Link
                                    to={`/users/${item.id}`}
                                    title="Edit"
                                    className="btn btn-primary btn-xs"
                                  >
                                    <i className="fas fa-pencil-alt"></i>
                                  </Link>
                                  <button
                                    type="button"
                                    onClick={() => {
                                      handleDelete(item.id);
                                    }}
                                    title="Delete"
                                    className="btn btn-danger btn-xs"
                                  >
                                    <i className="far fa-times-circle"></i>
                                  </button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr className="odd">
                              <td
                                valign="top"
                                colspan="6"
                                className="dataTables_empty"
                              >
                                Kayıtlı kullanıcı yok
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
                        12 girişten 1 ile 10 arası gösteriliyor
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
                              Öncesi
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
                          <li className="paginate_button page-item ">
                            <button
                              aria-controls="table1"
                              data-dt-idx="2"
                              className="page-link"
                            >
                              2
                            </button>
                          </li>
                          <li
                            className="paginate_button page-item next"
                            id="table1_next"
                          >
                            <button
                              aria-controls="table1"
                              data-dt-idx="3"
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
    </Layout>
  );
};

export default Users;
