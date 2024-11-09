import React, { useState } from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

const PostAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [text, setText] = useState("");

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setSlug(newTitle.toLowerCase().replace(/\s+/g, "-"));
  };

  const handleSlugChange = (e) => {
    setSlug(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const [photo, setPhoto] = useState(null);
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    // Dosya boyutunu kontrol et
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

  return (
    <Layout>
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
                  <input type="hidden" name="media_id" id="media_id" value="" />
                  <input
                    type="hidden"
                    id="category_id"
                    name="category_id"
                    value=""
                  />
                  <div className="form-group">
                    <label htmlfor="title">Title</label>
                    <input
                      type="text"
                      className="form-control form-control-sm is-invalid"
                      id="title"
                      name="title"
                      value={title}
                      onChange={handleTitleChange} // title güncellenirken slug’ı otomatik değiştir
                    />
                  </div>
                  <div className="form-group">
                    <label htmlfor="slug">Permalink</label>
                    <input
                      type="text"
                      className="form-control form-control-sm "
                      id="slug"
                      name="slug"
                      value={slug}
                      onChange={handleSlugChange} // slug’ı elle de değiştirebilme
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="btn btn-success" htmlFor="inputPhoto">
                  Kişisel Fotoğraf
                </label>
                <input
                  type="file"
                  id="inputPhoto"
                  className={`d-none ${errors.photo ? "is-invalid" : ""}`}
                  accept=".jpeg,.png"
                  onChange={handlePhotoChange}
                />
                {errors.photo && (
                  <p className="invalid-feedback">{errors.photo.message}</p>
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
              <div className="card">
                <div>
                  <h2>Görüşlerinizi Yazın:</h2>
                  <textarea
                    rows="5"
                    cols="30"
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Buraya yazın..."
                  />
                  <p>Yazdığınız metin:</p>
                  <p>{text}</p>
                </div>
              </div>
              <div className="card" id="save-card">
                <div>
                  <a
                    href="#"
                    className="btn btn-success btn-sm float-right"
                    id="submit"
                  >
                    Kaydet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostAdd;
