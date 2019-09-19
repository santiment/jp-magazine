import React from "react";
import cx from "classnames";
import chang_language from "./../../images/change_language.svg";
import { Projects, SantimentLogo } from "../header/Header";
import styles from "./Footer.module.scss";
import responsiveStyles from "../../utils/Responsive.module.scss";

const About = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://santiment.net/about-santiment/"
    className={styles.link}
  >
    About
  </a>
);

const Lang = (
  <>
    <img alt="change_lang" className={styles.langLogo} src={chang_language} />
    English
  </>
);

const Contact = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://santiment.net/about-santiment/contact/"
    className={styles.link}
  >
    Contact us
  </a>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={cx(responsiveStyles.isMobile, styles.center)}>
            <SantimentLogo white />
            {About}
          </div>

          <div className={cx(responsiveStyles.isMobile, styles.center)}>
            {<Projects />}
            <a
              className={styles.link}
              rel="noopener noreferrer"
              href="mailto:support@santiment.net"
            >
              Support
            </a>
          </div>

          <div className={cx(styles.lang, responsiveStyles.isDesktop)}>
            {Lang}
          </div>

          <div className={responsiveStyles.isDesktop}>
            {About}
            {Contact}
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://santiment.net/terms-conditions/"
            className={styles.link}
          >
            Terms
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.santiment.net/privacy-policy"
            className={styles.link}
          >
            Privacy
          </a>
        </div>

        <div className={styles.right}>
          © {new Date().getFullYear()} Santiment Inc. All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
