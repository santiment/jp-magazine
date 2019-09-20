import React from "react";
import tr from "../../translations/translate";
import confetti from "./../../images/confetti.svg";
import styles from "./BodyThankyou.module.scss";

const BodyThankYou = () => {
  return (
    <div className={styles.container}>
      <img alt="confetti" src={confetti} className={styles.confetti} />
      <div className={styles.thankyou}>{tr('app.body.thankyou.title')}</div>

      <div className={styles.description}>
        {tr('app.body.thankyou.description')}
      </div>

      <div className={styles.more}>{tr('app.body.thankyou.more')}</div>
      <div className={styles.links}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          href="https://app.santiment.net"
        >
          {tr('app.body.sanbase')}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          href="https://sheets.santiment.net"
        >
          {tr('app.body.sansheets')}
        </a>
      </div>
    </div>
  );
};

export default BodyThankYou;
