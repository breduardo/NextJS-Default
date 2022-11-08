import React, { useState } from "react";

import { Header, Footer } from "./Layout";
import { useRouter } from "next/router";

const DefaultLayout = (props) => {
  const router = useRouter();

  const showHeader = [
    "/login",
    "/cadastrar",
    "/minha-conta/completarCadastro",
    "/login/esqueciMinhaSenha",
    "/contato",
  ].includes(router.pathname)
    ? false
    : true;

  const { children } = props;
  return (
    <div>
      <div className="wrapper d-flex flex-column vh-100">
        {showHeader && <Header {...props} />}
        <div className={`body ${!showHeader ? "" : "flex-grow-1 px-3"}`}>
          {/* <AppContent /> */}
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
};

// DefaultLayout.getInitialProps = async (ctx) => {
// };

export default DefaultLayout;
