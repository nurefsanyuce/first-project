import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Categories = () => {
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
            <div className="content">
              <div className="container-fluid">
                <div className="card">
                  <div className="card-header">
                    <a href="#" className="btn btn-success btn-sm">
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
                          <table
                            id="table1"
                            className="table table-bordered table-hover dataTable no-footer dtr-inline"
                            role="grid"
                            aria-describedby="table1_info"
                          >
                            <thead>
                              <tr role="row">
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Name: activate to sort column ascending"
                                >
                                  İsim
                                </th>

                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Parent: activate to sort column ascending"
                                >
                                  Ürün Adı
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label="Description: activate to sort column ascending"
                                >
                                  Tip
                                </th>
                                <th
                                  className="sorting"
                                  tabindex="0"
                                  aria-controls="table1"
                                  rowspan="1"
                                  colspan="1"
                                  aria-label=": activate to sort column ascending"
                                >
                                  Üretim Tarihi
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="odd">
                                <td
                                  valign="top"
                                  colspan="6"
                                  className="dataTables_empty"
                                >
                                  No data available in table
                                </td>
                              </tr>
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
                                <a
                                  href="#"
                                  aria-controls="table1"
                                  data-dt-idx="0"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Previous
                                </a>
                              </li>
                              <li
                                className="paginate_button page-item next disabled"
                                id="table1_next"
                              >
                                <a
                                  href="#"
                                  aria-controls="table1"
                                  data-dt-idx="1"
                                  tabindex="0"
                                  className="page-link"
                                >
                                  Next
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
      </div>
    </Layout>
  );
};

export default Categories;
