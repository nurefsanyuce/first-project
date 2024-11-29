import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <NavLink to="#">
            <b>Admin</b>LTE
          </NavLink>
        </div>
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Oturum Açmak İçin Giriş Yapınız</p>

            <form onSubmit={onSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Şifre"
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember">Beni Hatırla</label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Giriş
                  </button>
                </div>
              </div>
            </form>

            <p className="mb-1">
              <NavLink to="#">Şifremi Unuttum</NavLink>
            </p>
            <p className="mb-0">
              <NavLink to="#" className="text-center">
                Yeni Üyelik
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
