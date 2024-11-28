import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { sendCate } from "../redux/categories/categoriesSlice";

const CategoryAdd = () => {
  const categories = useSelector((state) => state.categories.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const cateData = {
      id: Date.now().toString(),
      ...data,
    };
    console.log("postAdd", data);

    dispatch(sendCate(cateData));
    navigate("/categories");
  };
  console.log(errors);

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                      <label htmlFor="name">İsim</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        } ${watch("name") && !errors.name ? "is-valid" : ""}`}
                        id="name"
                        name="name"
                        {...register("name", {
                          required: "Bu alan zorunludur.",
                        })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback">
                          {errors.name.message}
                        </div>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="upper"> Üst kategori </label>
                      <select
                        name="upper"
                        id="upper"
                        className="form-control "
                        {...register("upper", {})}
                      >
                        <option value="" disabled="">
                          Birini seçiniz
                        </option>
                        {Object.values(categories).map((cate) => (
                          <option value={cate.id}>{cate.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="type"> Tip </label>
                      <select
                        name="type"
                        id="type"
                        className={`form-control ${
                          errors.type ? "is-invalid" : ""
                        } ${watch("type") && !errors.type ? "is-valid" : ""}`}
                        {...register("type", {
                          required: "Bu alan zorunludur.",
                        })}
                      >
                        <option value="" disabled="">
                          Birini seçiniz
                        </option>

                        <option value="posta">Posta</option>
                      </select>
                      {errors.type && (
                        <div className="invalid-feedback">
                          {errors.type.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <h2>Görüşlerinizi Yazın:</h2>
                  <textarea
                    className="form-control"
                    id="text"
                    rows="5"
                    cols="30"
                    placeholder="Buraya yazın..."
                    {...register("text", {})}
                  />
                </div>
                <button type="submit" className="btn btn-primary float-right">
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default CategoryAdd;
