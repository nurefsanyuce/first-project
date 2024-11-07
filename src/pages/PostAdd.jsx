import Layout from "../components/Layout";

const PostAdd = () => {
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostAdd;
