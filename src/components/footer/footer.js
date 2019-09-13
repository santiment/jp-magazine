import React from "react";
//import chang_language from "./../../images/change_language.svg";
import {DesktopOnly, MobileOnly} from "../responsive/Responsive";
import {Projects, SantimentLogo} from "../header/Header";
import styles from "./Footer.module.scss";

const About =
    <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://santiment.net/about-santiment/"
        className={styles.link}
    >
      About
    </a>

const Contact = <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://santiment.net/about-santiment/contact/"
    className={styles.link}
>
  Contact us
</a>

/*
*
          {false && <DesktopOnly>
            <div className={styles.lang}>
              <img
                  alt="change_lang"
                  className={styles.langLogo}
                  src={chang_language}
              />
              English
            </div>
          </DesktopOnly>}
* */

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <MobileOnly>
            <SantimentLogo white/>
            {About}
          </MobileOnly>

          <MobileOnly>
            <Projects/>
            <a
                className={styles.link}
                rel="noopener noreferrer"
                href="mailto:support@santiment.net"
            >
              Support
            </a>
          </MobileOnly>

          <DesktopOnly>
            {About}
            {Contact}
          </DesktopOnly>

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
    </footer>
  );
};

export default Footer
