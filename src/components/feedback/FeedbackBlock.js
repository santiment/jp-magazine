import React from "react";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import styles from './FeedbackBlock.module.scss'

const FeedbackBlock = () => {
    return <div className={styles.container}>
        <div className={styles.daysFree}>
            Get 30 Days Free
        </div>
        <div className={styles.explanation}>
            Yes! I’d like to try the Premium Sanbase
            <br/>
            and Sansheets Bundle free for 30 days.
        </div>
        <div className={styles.info}>
            <SubscriptionForm/>
        </div>

        <div className={styles.description}>
            Get actionable intelligence about the
            <br/>
            crypto market based on real network,
            <br/>
            project and social activity.
        </div>

        <div  className={styles.info}>
            Starred fields are required to process your request.
            <br/>
            The information above helps us to help us better
            <br/>
            understand our audience. All information is used
            <br/>
            consistent with our <a target="_blank" href='https://app.santiment.net/privacy-policy' className={styles.privacy}>privacy policy</a>.
        </div>
    </div>
}

export default FeedbackBlock