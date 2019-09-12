import React from "react";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import styles from "./FeedbackBlock.module.scss";

const FeedbackBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.daysFree}>Get 30 Days Free</div>
      <div className={styles.explanation}>
        Yes! I’d like to try the Premium Sanbase
        and Sansheets Bundle free for 30 days.
      </div>
      <div className={styles.form}>
        <SubscriptionForm />
      </div>

      <div className={styles.description}>
        Get actionable intelligence about the
        crypto market based on real network,
        project and social activity.
      </div>

      <div className={styles.info}>
        Starred fields are required to process your request.
        The information above helps us to help us better
        understand our audience. All information is used
        consistent with our{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.santiment.net/privacy-policy"
          className={styles.privacy}
        >
          privacy policy
        </a>
        .
      </div>
    </div>
  );
};

export default FeedbackBlock;
