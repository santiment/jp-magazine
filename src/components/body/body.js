import React from "react";
import cx from 'classnames'
import FeedbackBlock from "../feedback/FeedbackBlock";
import Button from '@santiment-network/ui/Button'
import iconPoint from "./../../images/icon-point.svg";
import SanVideo from "../sanVideo/sanVideo";
import styles from "./Body.module.scss";
import withSizes from "react-sizes";
import {mapSizesToProps} from "../../utils/sizes";

const Body = ({isDesktop}) => {
  return (
    <div className={styles.container}>
      <div key="left" className={styles.left}>
        <div className={styles.invite}>Santiment invite</div>
        <div className={styles.description}>
          Manage Risk.
        </div>
        <div className={cx(styles.description, styles.descriptionSecond)}>
          Spot Opportunities.
        </div>

        {!isDesktop &&    <Button className={styles.offerBtn} as='a' href='#reply' accent='positive' variant='fill'>Get special offer</Button>}

        {!isDesktop &&
          <div className={styles.video}>
            {SanVideo}
          </div>}

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

        {isDesktop &&
          <div className={styles.video}>
            {SanVideo}
          </div>}
      </div>
      <div name='reply' key="right" className={styles.right}>
        <FeedbackBlock />
      </div>
    </div>
  );
};

export default withSizes(mapSizesToProps)(Body);
