import React from "react";
import FeedbackBlock from "../feedback/FeedbackBlock";
import Button from '@santiment-network/ui/Button'
import iconPoint from "./../../images/icon-point.svg";
import SanVideo from "../sanVideo/sanVideo";
import {DesktopOnly, MobileOnly} from "../responsive/Responsive";
import styles from "./Body.module.scss";

const Body = () => {
  return (
    <div className={styles.container}>
      <div key="left" className={styles.left}>
        <div className={styles.invite}>Santiment invite</div>
        <div className={styles.description}>
          Manage Risk.
          <br />
          Spot Opportunities.
        </div>

        <MobileOnly>
          <Button className={styles.offerBtn} accent='positive' variant='fill'>Get special offer</Button>
          <div className={styles.video}>
            <SanVideo />
          </div>
        </MobileOnly>

        <div className={styles.magazine}>
          Special offer for (magazine name) readers:
        </div>

        <div className={styles.points}>
          <div className={styles.point}>
            <img src={iconPoint} className={styles.iconPoint} alt="point-1" />
            Premium Sanbase Signal
          </div>
          <div className={styles.point}>
            <img src={iconPoint} className={styles.iconPoint} alt="point-1" />
            Premium Sansheets Portfolio Template
          </div>
        </div>

        <DesktopOnly>
          <SanVideo />
        </DesktopOnly>
      </div>
      <div key="right" className={styles.right}>
        <FeedbackBlock />
      </div>
    </div>
  );
};

export default Body;
