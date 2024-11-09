import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState({});

  const toggleMenu = (menu) => {
    setIsOpen({ ...isOpen, [menu]: !isOpen?.[menu] });
  };

  useEffect(() => {
    const current = location.pathname.split("/")?.[1];
    if (current) {
      setIsOpen({
        [current]: true,
      });
    }
  }, [location]);

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <NavLink to="/" className="brand-link">
        <img
          src="/dist/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          className="brand-image img-circle elevation-3"
          style={{ opacity: 0.8 }}
        />
        <span className="brand-text font-weight-light">YÖNETİCİ PANELİ</span>
      </NavLink>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img
              src="/dist/img/user2-160x160.jpg"
              className="img-circle elevation-2"
              alt="User Image"
            />
          </div>
          <div className="info">
            <NavLink to="/" className="d-block">
              Nurefşan YÜCE
            </NavLink>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input
              className="form-control form-control-sidebar"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>Gösterge Paneli</p>
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fas fa-users"></i>
                <p>Kullanıcılar</p>
              </NavLink>
            </li>

            <li
              className={`nav-item has-treeview ${
                isOpen?.posts ? "menu-open" : ""
              }`}
            >
              <div
                onClick={() => {
                  toggleMenu("posts");
                }}
                className={`nav-link ${isOpen?.posts ? "active" : ""}`}
              >
                <i className="nav-icon fas fa-thumbtack"></i>
                <p>
                  Posta
                  <i
                    className={`right fas ${
                      isOpen ? "fa-angle-down" : "fa-angle-left"
                    }`}
                  ></i>
                </p>
              </div>
              <ul
                className={`nav nav-treeview ${
                  isOpen?.posts ? "d-block" : "d-none"
                }`}
              >
                <li className="nav-item">
                  <NavLink
                    to="/posts"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                  >
                    <i className="fas fa-share"></i>
                    <p>Tüm Gönderiler</p>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="/post/add" className="nav-link">
                    <i className="fas fa-share"></i>
                    <p>Yeni Ekle</p>
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item ">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                <i className="nav-icon fas fa-power-off"></i>
                <p>Çıkış</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
