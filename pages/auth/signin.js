import {
  useSession,
  signIn,
  signOut,
  getCsrfToken,
  getProviders,
} from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Card, Col, Container, Form, FormText, Row } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
// import Header from "../../components/header";
import styles from "styles/Signin.module.css";

const Signin = ({ csrfToken, providers }) => {
  const user = useSession();
  const router = useRouter();

  useEffect(() => {
    if (user.status === "authenticated") {
      router.push("/");
    }
  }, []);

  return (
    <>
      <div className="container " style={{ marginTop: "20vh" }}>
        <div className="row g-4">
          <div
            className="col-lg-4 mx-auto  signin"
            style={{ backgroundColor: "white" }}
          >
            <div className="content">
              <form id="login" className="form">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="text-center">
                      <div className="title">
                        <h5 className="mb-2">Acessar a plataforma</h5>
                      </div>
                      <p className="mb-0">Preencha os campos para acessar</p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="row g-3">
                      <div className="col-lg-12">
                        <label>Seu e-mail</label>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          placeholder="Ex: mail@mail.com"
                          value="brunoed.0925@gmail.com"
                        />
                      </div>
                      <div className="col-lg-12">
                        <label>Sua senha</label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="********"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-2 text-end">
                    <a
                      href="https://app.copye.ai/pt-br/Login/ForgotPassword"
                      className="link font-large"
                    >
                      Esqueceu sua senha?
                    </a>
                  </div>
                  <div className="col-lg-12" style={{ display: "none" }}>
                    <div
                      id="erro-login"
                      className="alert alert-danger status error"
                    ></div>
                  </div>
                  <div className="col-lg-12" style={{ display: "none" }}>
                    <div className="alert alert-success status success"></div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      id="btn-enter"
                      className="btn btn-primary w-100 init"
                    >
                      <span>Entrar</span>
                      <i className="fa-solid fa-arrow-right ms-2"></i>
                      <ion-icon
                        className="ms-2 md hydrated"
                        data-name="loading"
                        src="https://app.copye.ai/assets/images/spinner-white.svg"
                        style={{ display: "none" }}
                        role="img"
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </form>
              <div className="social">
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      className="btn btn-light"
                      onClick={(e) => {
                        e.currentTarget.classList.toggle("disabled");
                        signIn(provider.id);
                      }}
                    >
                      <FaGoogle /> &nbsp;&nbsp; {provider.name}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
