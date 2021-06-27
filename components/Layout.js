import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Nav from "./Nav";
import Footer from "./Footer";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.css"
        />
        <script
          async
          src="//cdn.jsdelivr.net/npm/semantic-ui@${props.versions.sui}/dist/semantic.min.js"
        ></script>
      </Head>
      <Nav />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;
