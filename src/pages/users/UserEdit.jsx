import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../../components/Layout";
import { getItem, sendList } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const UserEdit = () => {
  const [photo, setPhoto] = useState(null);
  const singleUser = useSelector((state) => state.user.single);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    defaultValues: singleUser,
  });

  useEffect(() => {
    dispatch(getItem(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (singleUser) {
      setPhoto(singleUser.photo);

      Object.keys(singleUser).forEach((key) => {
        setValue(key, singleUser[key]);
      });
    }
  }, [singleUser, setValue]);

  const onSubmit = (data) => {
    const formData = {
      id: Math.random().toString(),
      ...data,
      photo: photo,
    };
    console.log("userAdd", formData);
    dispatch(sendList(formData));
    navigate("/users");
  };

  // const emailValue = watch("email", "");

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];

    // Dosya boyutunu kontrol et
    if (file && file.size <= 1024 * 1024) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Base64 formatında fotoğrafı kaydet
      };
      reader.readAsDataURL(file);
    } else {
      alert("Lütfen 1 MB'den küçük bir dosya yükleyin.");
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="content-wrapper" style={{ minHeight: "1604.44px" }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Kullanıcı Ekle</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <NavLink to="#">Gösterge Paneli</NavLink>
                    </li>
                    <li className="breadcrumb-item active">Kullanıcı Ekle</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-body" style={{ display: "block" }}>
                    {/* Fotoğraf Yükleme */}
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
                        <p className="invalid-feedback">
                          {errors.photo.message}
                        </p>
                      )}
                      {/* Yüklenen fotoğrafın küçük resmi */}
                      {photo && (
                        <div className="mt-2">
                          <img
                            src={photo}
                            alt="Yüklenen Fotoğraf"
                            style={{
                              width: "100px", // Küçük resim boyutu
                              height: "auto",
                              borderRadius: "5px",
                            }}
                          />
                        </div>
                      )}
                    </div>

                    {/* Kullanıcı Ad Soyad */}
                    <div className="form-group">
                      <label htmlFor="inputName">Kullanıcı Ad-Soyad</label>
                      <input
                        type="text"
                        id="inputName"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        } ${watch("name") && !errors.name ? "is-valid" : ""}`}
                        {...register("name", {
                          required: "Ad-Soyad zorunludur",
                        })}
                      />
                      {errors.name && (
                        <p className="invalid-feedback">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    {/* Doğum tarihi */}
                    <div className="form-group">
                      <label htmlFor="inputClientCompany">Doğum Tarihi</label>
                      <input
                        type="date"
                        id="inputClientCompany"
                        className={`form-control ${
                          errors.birthdate ? "is-invalid" : ""
                        } ${
                          watch("birthdate") && !errors.birthdate
                            ? "is-valid"
                            : ""
                        }`}
                        {...register("birthdate", {
                          required: "Doğum tarihi zorunludur",
                        })}
                      />
                      {errors.birthdate && (
                        <p className="invalid-feedback">
                          {errors.birthdate.message}
                        </p>
                      )}
                    </div>

                    {/* Cinsiyet */}

                    <div className="form-group">
                      <label htmlFor="inputGender">Cinsiyet</label>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            {...register("gender", {})}
                          />
                          Kadın
                        </label>
                      </div>

                      <div className="form-check">
                        <label className="form-check-label">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            {...register("gender", {})}
                          />
                          Erkek
                        </label>
                      </div>
                    </div>

                    {/* medeni durumu */}
                    <div className="form-group">
                      <label htmlFor="inputStatus">Medeni Durumu</label>
                      <select
                        id="inputStatus"
                        className="form-control custom-select"
                        {...register("status", {
                          required: "Medeni durum zorunludur",
                        })}
                      >
                        <option value="" disabled>
                          Birini seçiniz
                        </option>
                        <option value="Evli">Evli</option>
                        <option value="Bekar">Bekar</option>
                      </select>
                      {errors.status && <p>{errors.status.message}</p>}
                    </div>

                    {/* kullanıcı e-posta */}

                    <div className="form-group">
                      <label htmlFor="inputEmail">E-Posta</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-envelope"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          id="inputEmail"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          } ${
                            watch("email") && !errors.email ? "is-valid" : ""
                          }`}
                          {...register("email", {
                            required: "E-posta zorunludur",
                            pattern: {
                              value:
                                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                              message: "Geçerli bir e-posta adresi girin",
                            },
                          })}
                        />
                      </div>

                      {errors.email && (
                        <p
                          className="invalid-feedback"
                          style={{ display: "block" }}
                        >
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    {/* Öğrenim durumu */}
                    <div className="form-group">
                      <label htmlFor="education">Öğrenim Durumu</label>
                      <select
                        id="education"
                        className="form-control custom-select"
                        {...register("education", {
                          required: "Öğrenim durumu zorunludur",
                        })}
                      >
                        <option value="" disabled>
                          Birini seçiniz
                        </option>
                        <option value="İlkokul">İlkokul</option>
                        <option value="Lise">Lise</option>
                        <option value="Ön Lisans">
                          Üniversite (Ön Lisans)
                        </option>
                        <option value="Lisans">Üniversite (Lisans)</option>
                      </select>
                      {errors.education && <p>{errors.education.message}</p>}
                    </div>

                    {/* ilgi Alanları */}
                    <div className="form-group">
                      <label htmlFor="inputDescription">İlgi Alanları</label>
                      <textarea
                        id="inputDescription"
                        className="form-control"
                        rows="2"
                        {...register("interests")}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-success float-right">
                  Kaydet
                </button>
              </div>
            </div>
          </section>
        </div>
      </form>
    </Layout>
  );
};

export default UserEdit;
