import React from "react";
import cx from "classnames";
import { Link } from "gatsby"
import tr from "../../translations/translate";
import FeedbackBlock from "../feedback/FeedbackBlock";
import scrollDown from "./../../images/scroll_down.svg";
import styles from "./Body.module.scss";
import responsiveStyles from "../../utils/Responsive.module.scss";

const Body = () => {
  return (
    <div className={styles.container}>
      <div key="left" className={styles.left}>
        <div className={styles.description}>{tr('app.body.title')}</div>
        <div className={cx(styles.description, styles.descriptionSecond)}>
          {tr('app.body.description')}
        </div>

        <div className={cx(styles.line, responsiveStyles.isDesktop)}></div>
        <div className={cx(styles.scrollBlock, responsiveStyles.isMobile)}>
          <div>{tr('app.body.scroll')}</div>
          <Link
            to="#welcome"
            className={styles.scrollIcon}
          >
            <img
              alt="scrollBtn"
              src={scrollDown}
            />
          </Link>
        </div>

        <h1 id="welcome" className={styles.welcome}>
          {tr('app.body.welcome1')}{" "}
          <span className={styles.welcomeMagazine}>{tr('app.body.welcome2')}</span>{" "}
          {tr('app.body.welcome3')}
        </h1>

        <div className={styles.looking}>
          {tr('app.body.looking')}
        </div>

        <div className={styles.explanation}>
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.santiment.net"
          >
            {tr('app.body.sanbase')}
          </a>{" "}
          {tr('app.body.sanbase.description')}
        </div>

        <div className={styles.explanation}>
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://sheets.santiment.net"
          >
            {tr('app.body.sansheets')}
          </a>{" "}
          {tr('app.body.sansheets.description')}
        </div>

        <div className={styles.explanation}>
          {tr('app.body.api.first')}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            href="https://neuro.santiment.net"
          >
            API
          </a>{" "}
          {tr('app.body.api.second')}
        </div>

        <div className={styles.explanation}>
          {tr('app.body.more.first')}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://santiment.net/jp/"
            className={styles.link}
          >
            santiment.net/jp/
          </a>
          {tr('app.body.more.second')}
        </div>
      </div>
      <div name="reply" key="right" className={styles.right}>
        <FeedbackBlock />
      </div>
    </div>
  );
};

export default Body;
