import React from "react";

const DeleteModal = ({ deleteItem, setDeleteItem, handleDelete }) => {
  const confirmDelete = () => {
    handleDelete(deleteItem?.id);
  };

  return (
    <>
      <div
        className={deleteItem?.id ? "modal fade show" : "modal fade"}
        id="modal-default"
        style={deleteItem?.id ? { display: "block" } : { display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Postu Sil</h5>
            </div>
            <div className="modal-body">
              <p>
                <b>{deleteItem?.title}</b> başlıklı postu silmek istediğinize
                emin misiniz?
              </p>
            </div>
            <div className="modal-footer justify-content-between">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => {
                  setDeleteItem({});
                }}
              >
                Kapat
              </button>
              <button
                type="button"
                onClick={() => {
                  confirmDelete();
                }}
                className="btn btn-danger"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
