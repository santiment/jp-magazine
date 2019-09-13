import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import GoogleAnalytics from 'react-ga'
import Helmet from "react-helmet";
import Header from "./header/Header";
import Footer from "./footer/footer";
import styles from "./layout.module.scss";

if (process.env.NODE_ENV === 'production') {
    GoogleAnalytics.initialize('')
} else {
    GoogleAnalytics.initialize('', { testMode: true })
}

const envScript = process.env.NODE_ENV === "production" && (
  <Helmet>
    <script src="/env.js" />
  </Helmet>
);

const Layout = ({ children, classes = {} }) => (
  <>
    <Header />
    <>
      {envScript}
      <main className={cx(styles.main, classes.main)}>{children}</main>
    </>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
