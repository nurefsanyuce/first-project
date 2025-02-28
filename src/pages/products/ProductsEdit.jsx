import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import CreatableSelect from "react-select/creatable";
import { useDispatch, useSelector } from "react-redux";
import Lightbox from "react-18-image-lightbox";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getItem, sendProd } from "../../redux/products/productsSlice";

const ProductEdit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const categories = useSelector((state) => state.categories.list);
  const singleProd = useSelector((state) => state.products.single);
  const categoryOptions = Object.values(categories)
    .filter((cat) => cat.type === "urun")
    .map((cate) => ({ value: cate.name, label: cate.name }));

  const [features, setFeatures] = useState([{ name: "", value: "" }]);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {
    reset,
    register,
    handleSubmit,

    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      categories: [],
    },
  });
  useEffect(() => {
    if (id) {
      dispatch(getItem(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (singleProd) {
      reset(singleProd);
      if (singleProd.images) {
        setImages(singleProd.images);
      }
      if (singleProd.features) {
        setFeatures(singleProd.features);
      }
    } else {
      reset();
    }
  }, [singleProd, reset]);

  const onSubmit = (data) => {
    const prodData = {
      id,
      ...data,
      images: images,
    };
    console.log("prodAdd", prodData);

    dispatch(sendProd(prodData));
    navigate("/products");
  };

  // Resim yükleme işlemi: dosyaları base64 formatında alıyoruz.
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 5) {
      alert("En fazla 5 fotoğraf yükleyebilirsiniz.");
      return;
    }

    const fileReaders = [];
    let isCancel = false;

    const readFile = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (isCancel) {
            reject("İşlem iptal edildi");
          } else {
            resolve(event.target.result);
          }
        };
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });
    };

    Promise.all(files.map((file) => readFile(file)))
      .then((base64Files) => {
        if (!isCancel) {
          setImages((prevImages) => [...prevImages, ...base64Files]);
        }
      })
      .catch((error) => {
        if (error !== "İşlem iptal edildi") {
          console.error("Dosya okuma hatası:", error);
        }
      });

    return () => {
      isCancel = true;
      fileReaders.forEach((reader) => {
        if (reader.readyState === FileReader.LOADING) {
          reader.abort();
        }
      });
    };
  };

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Yeni özellik ekleme, değiştirme ve silme fonksiyonları (var olan kodunuz)
  const addFeature = () => {
    setFeatures([...features, { name: "", value: "" }]);
  };

  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = features.map((feature, i) =>
      i === index ? { ...feature, [field]: value } : feature
    );
    setFeatures(updatedFeatures);
  };

  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-9 mx-auto ms-3">
          <div className="card">
            <div className="card-body">
              {/* Ürün fotoğrafı kısmı */}
              <div className="form-group">
                <input
                  type="file"
                  id="inputPhoto"
                  name="photos"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                />
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {images.map((img, index) => (
                    <div
                      key={index}
                      style={{ position: "relative", margin: "10px" }}
                    >
                      <img
                        src={img}
                        alt={`Ürün Fotoğrafı ${index + 1}`}
                        style={{
                          width: "100px",
                          height: "100px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(index)}
                      />
                      <button
                        onClick={() => handleRemoveImage(index)}
                        style={{
                          position: "absolute",
                          top: 0,
                          right: 0,
                          background: "black",
                          color: "white",
                          border: "none",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
                {isOpen && (
                  <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={
                      images[(photoIndex + images.length - 1) % images.length]
                    }
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                      setPhotoIndex(
                        (photoIndex + images.length - 1) % images.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setPhotoIndex((photoIndex + 1) % images.length)
                    }
                  />
                )}
              </div>

              {/* Ürün adı */}
              <div className="form-group">
                <label htmlFor="title">Ürün Adı</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className={`form-control ${errors.title ? "is-invalid" : ""}`}
                  {...register("title", { required: "Bu alan zorunludur." })}
                />
                {errors.title && (
                  <div className="invalid-feedback">{errors.title.message}</div>
                )}
              </div>

              {/* Ürün açıklaması */}
              <div className="form-group">
                <label htmlFor="text">Ürün Açıklaması</label>
                <textarea
                  id="text"
                  name="description"
                  rows="3"
                  cols="30"
                  placeholder="Buraya yazın..."
                  className={`form-control ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  {...register("description", {
                    required: "Bu alan zorunludur.",
                  })}
                />
                {errors.description && (
                  <div className="invalid-feedback">
                    {errors.description.message}
                  </div>
                )}
              </div>

              {/* Kategori seçimi: Controller ile entegre edilmiş CreatableSelect */}
              <div className="form-group">
                <label>Kategoriler</label>
                <Controller
                  name="categories"
                  control={control}
                  rules={{ required: "En az bir kategori seçmelisiniz." }}
                  defaultValue={[]}
                  render={({ field }) => (
                    <CreatableSelect
                      {...field}
                      isMulti
                      options={categoryOptions}
                      placeholder="Kategorileri seçin veya oluşturun..."
                    />
                  )}
                />
                {errors.categories && (
                  <div className="invalid-feedback d-block">
                    {errors.categories.message}
                  </div>
                )}
              </div>

              {/* Ürün özellikleri */}
              <div className="form-group">
                <label>Ürün Özellikleri</label>
                {features.map((feature, index) => (
                  <div className="form-group row mx-0" key={index}>
                    <input
                      name={`feature[${index}][name]`}
                      className="form-control form-control-sm col-md-3 mr-1"
                      value={feature.name}
                      onChange={(e) =>
                        handleFeatureChange(index, "name", e.target.value)
                      }
                    />
                    <input
                      type="text"
                      name={`feature[${index}][value]`}
                      className="form-control form-control-sm col mr-1"
                      value={feature.value}
                      onChange={(e) =>
                        handleFeatureChange(index, "value", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => removeFeature(index)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div className="d-flex justify-end">
                  <button
                    type="button"
                    className="btn btn-outline-success btn-sm px-4 ml-auto"
                    onClick={addFeature}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-success btn-sm float-right"
              >
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default ProductEdit;
