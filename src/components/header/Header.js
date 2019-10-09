import React from "react";
import cx from "classnames";
import tr from "../../translations/translate";
import santiment from "../../../src/images/santiment.svg";
import santimentWhite from "../../../src/images/santiment-white.svg";
import Dropdown from "../dropdown/Dropdown";
import dropdownStyles from "../dropdown/Dropdown.module.scss";
import Button from "@santiment-network/ui/Button";
import responsiveStyles from "../../utils/Responsive.module.scss";
import styles from "./Header.module.scss";

export const SantimentLogo = ({ white }) => (
  <img
    alt="header-logo"
    src={white ? santimentWhite : santiment}
    className={styles.logo}
  />
);

export const Projects = ({ isDesktop, showArrow }) => (
  <Dropdown title={tr('app.header.products')} showArrow={showArrow} isDesktop={isDesktop}>
    <div className={dropdownStyles.list}>
      <a
        className={cx(styles.link, dropdownStyles.menuItem)}
        target="_blank"
        rel="noopener noreferrer"
        key="sanbase"
        href="https://app.santiment.net"
      >
        {tr('app.header.products.sanbase')}
      </a>
      <a
        className={cx(styles.link, dropdownStyles.menuItem)}
        target="_blank"
        rel="noopener noreferrer"
        key="sheets"
        href="https://sheets.santiment.net"
      >
        {tr('app.header.products.sheets')}
      </a>
      <a
        className={cx(styles.link, dropdownStyles.menuItem)}
        target="_blank"
        rel="noopener noreferrer"
        key="neuro"
        href="https://neuro.santiment.net"
      >
        {tr('app.header.products.neuro')}
      </a>
    </div>
  </Dropdown>
);

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <SantimentLogo />

        <div className={cx(styles.buttons, responsiveStyles.isDesktop)}>
          {<Projects isDesktop={true} />}
          <a
            className={styles.link}
            rel="noopener noreferrer"
            href="mailto:support@santiment.net"
          >
            {tr('app.header.support')}
          </a>
          <Button
            as="a"
            target="_blank"
            accent="positive"
            border
            rel="noopener noreferrer"
            className={styles.borderLink}
            href="https://app.santiment.net/login"
          >
            {tr('app.header.signup')}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
