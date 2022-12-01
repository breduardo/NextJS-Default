import React, {
  createContext,
  useState,
  Component,
  Suspense,
  useEffect,
} from "react";
import DefaultLayout from "../components/DefaultLayout";
import App from "next/app";
import { getSession, SessionProvider } from "next-auth/react";

// import { AuthProvider, ProtectRoute, TokenExpirado } from "context/Auth";

// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";
import "../styles/custom.scss";

import getConfig from "next/config";
import axios from "axios";
const { publicRuntimeConfig } = getConfig();

import { useRouter } from "next/router";
import { SSRProvider } from "react-bootstrap";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const MINUTE_MS = 6000;

  const getLayout = Component.getLayout || ((page) => page);
  return (
    // <AppContext.Provider value={{ user, setUser, actions }}>

    // <AuthProvider>
    <SessionProvider session={session}>
      <SSRProvider>
        {getLayout(
          <DefaultLayout {...pageProps}>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </SSRProvider>
    </SessionProvider>
  );
}

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const session = await getSession(ctx);

  console.log({ session });

  return { pageProps: { ...appProps, session } };
  return {
    props: {
      session,
    },
  };
};

export default MyApp;
