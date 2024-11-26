import React from "react";
import Layout from "../components/Layout";

const CategoryAdd = () => {
  return (
    <Layout>
      <div className="content-header">
        <div className="container- fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h4 className="m-0 text-dark">Yeni Kategori Ekle</h4>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="/">Gösterge Paneli</a>
                </li>
                <li className="breadcrumb-item">Kategori Ekle</li>
              </ol>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <div className="form-group">
                    <label for="name">İsim</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputStatus"> Ürün adı </label>
                    <select
                      id="inputStatus"
                      className="form-control custom-select"
                      name="status"
                    >
                      <option value="" disabled="">
                        Birini seçiniz
                      </option>
                      <option value="Buzdolabı">Buzdolabı</option>
                      <option value="Bulaşık Makinesi">Bulaşık Makinesi</option>
                      <option value="Kurutma Makinesi">Kurutma Makinesi</option>
                      <option value="Çamaşır Makinası">Çamaşır Makinesi</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputStatus"> Tip </label>
                    <select
                      id="inputStatus"
                      className="form-control custom-select"
                      name="status"
                    >
                      <option value="" disabled="">
                        Birini seçiniz
                      </option>
                      <option value="A Tipi">A Tipi</option>
                      <option value="B Tipi">B Tipi</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="inputClientCompany">Üretim Tarihi</label>
                    <input
                      type="date"
                      id="inputClientCompany"
                      className="form-control "
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <h2>Görüşlerinizi Yazın:</h2>
                <textarea
                  name="text"
                  rows="5"
                  cols="30"
                  placeholder="Buraya yazın..."
                />
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default CategoryAdd;
