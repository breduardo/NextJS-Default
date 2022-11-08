import React, {
  createContext,
  useState,
  Component,
  Suspense,
  useEffect,
} from "react";
import DefaultLayout from "../components/DefaultLayout";
import App from "next/app";
// import { AuthProvider, ProtectRoute, TokenExpirado } from "context/Auth";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import "../styles/custom.scss";

import getConfig from "next/config";
import axios from "axios";
const { publicRuntimeConfig } = getConfig();

import { useRouter } from "next/router";
function MyApp({ Component, pageProps, data = {} }) {
  const MINUTE_MS = 6000;

  return (
    // <AppContext.Provider value={{ user, setUser, actions }}>

    // <AuthProvider>
    <DefaultLayout>
      <Component {...pageProps} {...data} />
    </DefaultLayout>
  );
}

export default MyApp;
