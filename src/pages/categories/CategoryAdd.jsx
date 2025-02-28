import React from "react";
import Layout from "../../components/Layout";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { sendCate } from "../../redux/categories/categoriesSlice";

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
    console.log("cateAdd", data);

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
                    <NavLink to="/">Gösterge Paneli</NavLink>
                  </li>
                  <li className="breadcrumb-item">Kategori Ekle</li>
                </ol>
              </div>

              <div className="col-md-9 mx-auto mt-3">
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
                          <option key={cate.id} value={cate.id}>
                            {cate.name}
                          </option>
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
                        <option value="urun">Ürün</option>
                      </select>
                      {errors.type && (
                        <div className="invalid-feedback">
                          {errors.type.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="text">
                        {" "}
                        Görüşleriniz bizim için önemli{" "}
                      </label>
                      <textarea
                        className="form-control"
                        id="text"
                        rows="5"
                        cols="30"
                        placeholder="Buraya yazın..."
                        {...register("text", {})}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary float-right"
                    >
                      Kaydet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};
export default CategoryAdd;
