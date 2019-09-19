import React  from "react";
import cx from 'classnames'
import FeedbackBlock from "../feedback/FeedbackBlock";
import scrollDown from './../../images/scroll_down.svg'
import styles from "./Body.module.scss";
import responsiveStyles from '../../utils/Responsive.module.scss'


const Body = () => {
  return (
    <div className={styles.container}>
      <div key="left" className={styles.left}>

        <div className={styles.description}>
          Manage Risk.
        </div>
        <div className={cx(styles.description, styles.descriptionSecond)}>
          Spot Opportunities.
        </div>

        <div className={cx(styles.line, responsiveStyles.isDesktop)}></div>
        <div className={cx(styles.scrollBlock, responsiveStyles.isMobile)}>
          <div>Scroll to explore</div>
          <a href='#about'>
            <img alt='scrollBtn' src={scrollDown} className={styles.scrollIcon}/>
          </a>
        </div>

        <h1 name='about' className={styles.welcome}>Welcome <span className={styles.welcomeMagazine}>Gekkan Kasou Tuuka</span> readers!</h1>

        <div className={styles.looking}>
          If you’re looking for ways to supplement your portfolio, or you just want to learn more about crypto, you’re in the right place.
        </div>

        <div className={styles.explanation}>
          <a className={styles.link} target="_blank" rel="noopener noreferrer" href='https://app.santiment.net'>Sanbase</a> is our flagship web application — learn about how crypto works, watch your favorite coins, and get insights into market behavior from an expert community. And yes, crypto is good for your portfolio!
        </div>

        <div className={styles.explanation}>
          <a className={styles.link} target="_blank" rel="noopener noreferrer" href='https://sheets.santiment.net'>Sansheets</a> brings Santiment data into your Google spreadsheets. We have several templates — including a portfolio template — available to get you started.
        </div>

        <div className={styles.explanation}>
          Plus, if you’re a developer ready to build your own applications, a robust <a  target="_blank" rel="noopener noreferrer" className={styles.link} href='https://neuro.santiment.net'>API</a> is available to pump reliable, quickly accessible data into whatever you create.
        </div>

        <div className={styles.explanation}>
          For general information, learn more at <a href='https://santiment.net/jp/' className={styles.link}>santiment.net/jp/</a>.
        </div>

      </div>
      <div name='reply' key="right" className={styles.right}>
        <FeedbackBlock />
      </div>
    </div>
  );
};

export default Body;
