import React from "react";
import chang_language from "./../../images/change_language.svg";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.lang}>
            <img
              alt="change_lang"
              className={styles.langLogo}
              src={chang_language}
            />
            English
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://santiment.net/about-santiment/"
            className={styles.link}
          >
            About
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://santiment.net/about-santiment/contact/"
            className={styles.link}
          >
            Contact
          </a>
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
          © 2019 Santiment Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
