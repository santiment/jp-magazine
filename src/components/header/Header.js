import React from "react";
import Button from "@santiment-network/ui/Button";
import SmoothDropdownItem from "../smoothDropdown/SmoothDropdownItem";
import SmoothDropdown from "../smoothDropdown/SmoothDropdown";
import santiment from "../../../src/images/santiment.svg";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <img alt="header-logo" src={santiment} className={styles.logo} />

        <div className={styles.buttons}>
          <SmoothDropdown verticalOffset={0} verticalMotion>
            <SmoothDropdownItem
              trigger={
                <Button variant="flat" className={styles.productsBtn}>
                  Products
                </Button>
              }
            >
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key="sanbase"
                  href="https://app.santiment.net"
                >
                  Sanbase
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key="sheets"
                  href="https://sheets.santiment.net"
                >
                  Sheets
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key="neuro"
                  href="https://neuro.santiment.net"
                >
                  Neuro
                </a>
              </div>
            </SmoothDropdownItem>
          </SmoothDropdown>

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
            accent="positive"
            as="a"
            href="https://app.santiment.net/login"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
