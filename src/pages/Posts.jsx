import React from "react";
import Layout from "../components/Layout";
import { NavLink } from "react-router-dom";

const Posts = () => {
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
