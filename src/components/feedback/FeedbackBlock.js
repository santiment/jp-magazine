import React from "react";
import tr from "../../translations/translate";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import styles from "./FeedbackBlock.module.scss";

const FeedbackBlock = () => {
  return (
    <div className={styles.container}>
      <div className={styles.questions}>{tr('app.body.form.title')}</div>
      <div className={styles.explanation}>
          {tr('app.body.form.description')}
      </div>
      <div className={styles.form}>
        <SubscriptionForm />
      </div>

      <div className={styles.info}>
        {tr('app.body.form.privacy')}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.santiment.net/privacy-policy"
          className={styles.privacy}
        >
          {tr('app.body.form.privacy.link')}
        </a>
      </div>
    </div>
  );
};

export default FeedbackBlock;
