import React from "react";
import cx from 'classnames'
import santiment from "../../../src/images/santiment.svg";
import santimentWhite from '../../../src/images/santiment-white.svg'
import Dropdown from "../dropdown/Dropdown";
import styles from "./Header.module.scss";
import responsiveStyles from '../../utils/Responsive.module.scss'
import {isDesktop} from "react-sizes/src/presets";

export const SantimentLogo = ({white}) => <img alt="header-logo" src={white ? santimentWhite : santiment } className={styles.logo} />

export const Projects = ({idDesktop}) => (<Dropdown idDesktop={idDesktop}>
    <div className={styles.list}>
      <a
          className={cx(styles.link, styles.menuItem)}
          target="_blank"
          rel="noopener noreferrer"
          key="sanbase"
          href="https://app.santiment.net"
      >
        Sanbase
      </a>
      <a
          className={cx(styles.link, styles.menuItem)}
          target="_blank"
          rel="noopener noreferrer"
          key="sheets"
          href="https://sheets.santiment.net"
      >
        Sheets
      </a>
      <a
          className={cx(styles.link, styles.menuItem)}
          target="_blank"
          rel="noopener noreferrer"
          key="neuro"
          href="https://neuro.santiment.net"
      >
        Neuro
      </a>
    </div>
  </Dropdown>)

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <SantimentLogo/>

        <div className={cx(styles.buttons, responsiveStyles.isDesktop)}>
          {<Projects idDesktop={isDesktop}/>}
          <a
              className={styles.link}
              rel="noopener noreferrer"
              href="mailto:support@santiment.net"
          >
            Support
          </a>
          <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.borderLink}
              href="https://app.santiment.net/login"
          >
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
