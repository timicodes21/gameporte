import "@/styles/globals.css";
import { theme } from "@/utils/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from "next/router";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "@/components/layout/Navbar";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({});
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
