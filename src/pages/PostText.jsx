import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getItem } from "../redux/posts/postsSlice";

import Layout from "../components/Layout";

const PostText = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const SinglePost = useSelector((state) => state.posts.single);

  const [isExpanded, setIsExpanded] = useState(false);

  const TEXT_PREVIEW_LENGTH = 150;

  useEffect(() => {
    if (id) {
      dispatch(getItem(id));
    }
  }, [id, dispatch]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded); // Durumu değiştir
  };
  const previewText = SinglePost?.text?.slice(0, TEXT_PREVIEW_LENGTH);
  return (
    <Layout>
      <div className="container mt-5">
        <div className="card shadow-lg">
          {SinglePost?.photo && (
            <img
              src={SinglePost.photo}
              alt={SinglePost.title}
              className="card-img-top"
              style={{
                height: "300px",
                width: "300px",
                margin: "auto",
                objectFit: "content",
              }}
            />
          )}
          <div className="card-body">
            <h3>{SinglePost?.title || "Başlık Yok"}</h3>

            <div style={{ borderBottom: "2px solid #ccc", margin: "10px 0" }} />

            <h5>{SinglePost?.category || "Categori Yok "}</h5>
            <div style={{ borderBottom: "2px solid #ccc", margin: "10px 0" }} />

            <p className="card-text">
              {isExpanded ? SinglePost?.text : `${previewText}...`}

              {SinglePost?.text &&
                SinglePost.text.length > TEXT_PREVIEW_LENGTH && (
                  <button className="btn btn-link" onClick={handleToggleExpand}>
                    {isExpanded ? "Kapat" : "Devamını Oku"}
                  </button>
                )}
            </p>
            <a href="/posts">
              <button
                type="button"
                title="return"
                className="btn btn-secondary"
              >
                Geri
              </button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostText;
