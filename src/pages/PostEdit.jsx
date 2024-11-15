import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { getItem, sendPost } from "../redux/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const PostEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null); // Fotoğraf için state

  const post = useSelector((state) => state.posts.single); // Redux'tan mevcut post

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: post || {}, // Varsayılan değerler Redux'tan gelen veri
  });

  useEffect(() => {
    if (id) {
      dispatch(getItem(id)); // Redux Action çağrısı
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      setPhoto(post.photo || null);

      Object.keys(post).forEach((key) => {
        setValue(key, post[key]);
      });
    }
  }, [post, setValue]);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;

    const newSlug = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-"); // Slug oluştur

    setValue("slug", newSlug);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert("Lütfen 1 MB'den küçük bir dosya yükleyin.");
    }
  };

  const onSubmit = (data) => {
    const formData = {
      id,
      ...data,
      photo,
    };

    dispatch(sendPost(formData));
    navigate("/posts");
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h4 className="m-0 text-dark">Yeni Posta Ekle</h4>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/">Gösterge Paneli</a>
                  </li>
                  <li className="breadcrumb-item">Posta</li>
                  <li className="breadcrumb-item active">Posta Ekle</li>
                </ol>
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-body">
                    <input
                      type="hidden"
                      name="media_id"
                      id="media_id"
                      value=""
                    />
                    <input
                      type="hidden"
                      id="category_id"
                      name="category_id"
                      value=""
                    />
                    <div className="form-group">
                      <label className="btn btn-success" htmlFor="inputPhoto">
                        Fotoğraf
                      </label>
                      <input
                        type="file"
                        id="inputPhoto"
                        {...register("inputPhoto", {
                          required: "Lütfen kullanıcı fotoğrafınızı  seçiniz",
                        })}
                        className={`d-none form-control ${
                          errors.inputPhoto ? "is-invalid" : ""
                        }`}
                        accept=".jpeg,.png"
                        onChange={handlePhotoChange}
                      />
                      {errors.inputPhoto && (
                        <div className="invalid-feedback">
                          {errors.inputPhoto.message}
                        </div>
                      )}
                      {/* Yüklenen fotoğrafın küçük resmi */}
                      {photo && (
                        <div className="mt-2">
                          <img
                            src={photo}
                            alt="Yüklenen Fotoğraf"
                            style={{
                              width: "100px",
                              height: "auto",
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlfor="title">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        onChange={handleTitleChange} // title güncellenirken slug’ı otomatik değiştir
                        className={`form-control ${
                          errors.title ? "is-invalid" : ""
                        }`}
                        {...register("title", {
                          required: "Bu alan zorunludur.",
                        })}
                      />
                      {errors.title && (
                        <div className="invalid-feedback">
                          {errors.title.message}
                        </div>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlfor="slug">Permalink</label>
                      <input
                        type="text"
                        className="form-control form-control-sm "
                        id="slug"
                        name="slug"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="category">Kategori</label>
                  <select
                    className={`form-control ${
                      errors.category ? "is-invalid" : ""
                    }`}
                    id="category"
                    {...register("category", {
                      required: "Lütfen bir kategori seçiniz",
                    })}
                    name="category"
                  >
                    <option value="" disabled>
                      Birini seçiniz
                    </option>
                    <option value="Şikayet">Şikayet</option>
                    <option value="Öneri">Öneri</option>
                    <option value="Memnuniyet">Memnuniyet</option>
                  </select>
                  {errors.category && (
                    <div className="invalid-feedback d-block">
                      {errors.category.message}
                    </div>
                  )}
                </div>
                <div className="card">
                  <div>
                    <h2>Görüşlerinizi Yazın:</h2>
                    <textarea
                      rows="5"
                      cols="30"
                      placeholder="Buraya yazın..."
                      className={`form-control ${
                        errors.text ? "is-invalid" : ""
                      }`}
                      {...register("text", {
                        required: "Bu alan zorunludur.",
                      })}
                    />
                    {errors.text && (
                      <div className="invalid-feedback">
                        {errors.text.message}
                      </div>
                    )}
                  </div>
                </div>
                <div className="card" id="save-card">
                  <div>
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

export default PostEdit;
