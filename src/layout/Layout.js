import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScrollTop from "../components/ScrollTop/ScrollTop";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <ScrollTop />
      <Footer />
    </Container>
  );
};
