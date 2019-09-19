import React from "react";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import styles from "./FeedbackBlock.module.scss";

const FeedbackBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.questions}>Questions?</div>
      <div className={styles.explanation}>
          We’re here to help! Drop us a line and an representative will contact you shortly.
      </div>
      <div className={styles.form}>
        <SubscriptionForm />
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
