import React  from "react";
import cx from 'classnames'
import FeedbackBlock from "../feedback/FeedbackBlock";
import Button from '@santiment-network/ui/Button'
import iconPoint from "./../../images/icon-point.svg";
import SanVideo from "../sanVideo/sanVideo";
import styles from "./Body.module.scss";
import responsiveStyles from '../../utils/Responsive.module.scss'

const MobileVideo = () => (<>
  <Button className={styles.offerBtn} as='a' href='#reply' accent='positive' variant='fill'>Get special offer</Button>

  <div className={styles.video}>
    {SanVideo}
  </div>
</>)

const Body = () => {
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

        <div className={cx(responsiveStyles.isMobile, styles.centered)}>
          <MobileVideo/>
        </div>

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

          <div className={cx(styles.video, responsiveStyles.isDesktop)}>
            {SanVideo}
          </div>
      </div>
      <div name='reply' key="right" className={styles.right}>
        <FeedbackBlock />
      </div>
    </div>
  );
};

export default Body;
