import React from "react";
import confetti from "./../../images/confetti.svg";
import styles from "./BodyThankyou.module.scss";

const BodyThankYou = () => {
  return (
    <div className={styles.container}>
      <img alt="confetti" src={confetti} className={styles.confetti} />
      <div className={styles.thankyou}>Thank You!</div>

      <div className={styles.description}>
        Your request has been received. Check your email for next steps.
      </div>

      <div className={styles.more}>Learn more about the products:</div>
      <div className={styles.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          href="https://app.santiment.net"
        >
          Sanbase
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          href="https://sheets.santiment.net"
        >
          Sansheets
        </a>
      </div>
    </div>
  );
};

export default BodyThankYou;
