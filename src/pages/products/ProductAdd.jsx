import React, { useState } from "react";
import Layout from "../../components/Layout";
import CreatableSelect from "react-select/creatable";
import { useSelector } from "react-redux";

const ProductAdd = () => {
  const [title, setTitle] = useState(""); // Ürün adı
  const [features, setFeatures] = useState([{ name: "", url: "" }]); // Sosyal medya alanları
  const [selectedCategories, setSelectedCategories] = useState([]);
  const categories = useSelector((state) => state.categories.list);

  // Ürün adı değişikliği
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  // Yeni özellik alanı ekleme
  const addFeature = () => {
    setFeatures([...features, { name: "", url: "" }]);
  };

  // Yeni özellik alanı değiştirme
  const handleFeatureChange = (index, field, value) => {
    const updatedFeatures = features.map((seature, i) =>
      i === index ? { ...seature, [field]: value } : seature
    );
    setFeatures(updatedFeatures);
  };

  // Yeni özellik  alanı silme
  const removeFeature = (index) => {
    const updatedFeatures = features.filter((_, i) => i !== index);
    setFeatures(updatedFeatures);
  };
  const categoryOptions = Object.values(categories)
    .filter((cat) => {
      return cat.type === "urun";
    })
    .map((cate) => ({ value: cate.name, label: cate.name }));
  console.log(categoryOptions, categories);
  const handleChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };

  // Form kaydetme işini tamamla
  const handleSubmit = () => {
    const formData = { title, features };
    console.log("Kaydedilen Veriler:", formData);
    // API'ye gönderme işlemi yapılabilir
  };

  return (
    <Layout>
      <div className="col-md-9">
        <div className="card">
          <div className="card-body">
            {/*Ürün fotoğrafı kısmı gelecek */}
            <div className="form-group">
              <label htmlFor="title">Ürün Adı</label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
              />
            </div>

            {/* buraya ürün açıklaması textarea gelecek */}

            <div className="form-group">
              <label htmlFor="text">Ürün Açıklaması</label>
              <textarea
                id="text"
                className="form-control"
                rows="3"
                cols="30"
                placeholder="Buraya yazın..."
              />
            </div>
            <div className="form-group">
              <CreatableSelect
                isMulti
                options={categoryOptions}
                value={selectedCategories}
                onChange={handleChange}
                placeholder="Kategorileri seçin veya yeni bir kategori ekleyin..."
              />
            </div>
            <div className="form-group ">
              <label>Ürün Özellikleri</label>
              {features.map((seature, index) => (
                <div className="form-group row mx-0" key={index}>
                  <input
                    name={`seature[${index}][name]`}
                    className="form-control form-control-sm col-md-3 mr-1"
                    value={seature.name}
                    onChange={(e) =>
                      handleFeatureChange(index, "name", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    name={`seature[${index}][url]`}
                    className="form-control form-control-sm col mr-1"
                    value={seature.url}
                    onChange={(e) =>
                      handleFeatureChange(index, "url", e.target.value)
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

              {/* Yeni Ürün Ekle Butonu */}
              <div className="d-flex justify-end">
                <button
                  type="button"
                  className="btn btn-outline-success btn-sm px-4 ml-auto "
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
              onClick={handleSubmit}
            >
              Kaydet
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductAdd;
