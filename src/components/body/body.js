import React from "react";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import styles from './Body.module.scss'
import FeedbackBlock from "../feedback/FeedbackBlock";

const offers = [{
    label: 'Premium Sanbase Signal',
    description: '(Here is a short sentence about thet signal...for BTC, or ETH, what\'s measuring, why it is a benifit)'
}, {
    label: 'Premium Sanbase Signal',
    description: '(Here is a short sentence about thet signal...for BTC, or ETH, what\'s measuring, why it is a benifit)'
}]

const Body = ()=>{
    return <div className={styles.container}>
        <div key='left' className={styles.left}>

        </div>
        <div key='right'  className={styles.right}>
            <FeedbackBlock/>
        </div>
    </div>
}

export default Body