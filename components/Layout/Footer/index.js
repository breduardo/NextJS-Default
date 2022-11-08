import React, { useContext, useState, useRef } from "react";

import {
  IoLinkOutline,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
} from "react-icons/io5";

import Link from "next/link";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="g-5 g-lg-4">
          <div className="col-lg">
            <div className="logo mb-4">
              <img src="/images/logotipo.png" />
            </div>
            <p className="mb-5">
              GRUPO B2B TECNOLOGIA LTDA
              <br />
              CNPJ: 47.442.582/0001-20
              <br />
              Av. Coronel José Severiano Maia, 400. <br />
              Centro - Mafra - SC
            </p>
            <div className="social">
              <ul>
                <li>
                  <Link href="https://www.facebook.com/b2bleadsbr">
                    <IoLogoFacebook />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/b2bleads_/">
                    <IoLogoInstagram />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/b2bleadsbr">
                    <IoLogoLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg">
            <h4 className="mb-4">Menu</h4>
            <ul>
              <li>
                <Link href="/">Início</Link>
              </li>
              <li>
                <Link href="/resultado">Pesquisar</Link>
              </li>
              <li>
                <Link href="/login">Entrar</Link>
              </li>
              <li>
                <Link href="/cadastrar">Cadastre-se</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg">
            <h4 className="mb-4">Links</h4>
            <ul>
              <li>
                <Link href="/politicas-de-privacidade">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href={process.env.PUBLIC_URL + "/termos-de-uso"}>
                  Termos de uso
                </Link>
              </li>
              <li>
                <Link href="/contato">Contato</Link>
              </li>
              <li>
                <Link href="https://blog.b2bleads.com.br">Blog</Link>
              </li>
              <li>
                <Link href="https://b2bleads.com.br/api/docs">API</Link>
              </li>
            </ul>
          </div>
          {/* <CCol>
                        <h4 className="mb-4">Selos</h4>
                        <CRow xs={{gutter:3}}>
                            <CCol lg={10} xs={7}>
                                <img src="/images/segure.png?v=2" className="img-fluid"/>
                            </CCol>
                            <CCol lg={10} xs={7}>
                                <img src="/images/payments.png" className="img-fluid"/>
                            </CCol>
                        </CRow>
                    </CCol> */}
        </Row>
      </Container>
      <div className="copyright" style={{ backgroundColor: "#0c3066" }}>
        2022 © b2b leads - Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
