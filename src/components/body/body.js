import React from "react";
import SubscriptionForm from "../subscriptionForm/SubscriptionForm";
import styles from './Body.module.scss'
import FeedbackBlock from "../feedback/FeedbackBlock";
import iconPoint from './../../images/icon-point.svg'
import SanVideo from "../sanVideo/sanVideo";

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
            <div className={styles.invite}>Santiment invite</div>
            <div className={styles.description}>
                Manage Risk.
                <br/>
                Spot Opportunities.
            </div>
            <div className={styles.magazine}>Special offer for (magazine name) readers:</div>

            <div className={styles.points}>
                <div className={styles.point}>
                    <img src={iconPoint} className={styles.iconPoint} alt='point-1'/>
                    Premium Sanbase Signal
                </div>
                <div className={styles.point}>
                    <img src={iconPoint}  className={styles.iconPoint} alt='point-1'/>
                    Premium Sansheets Portfolio Template
                </div>
            </div>

            <SanVideo/>
        </div>
        <div key='right'  className={styles.right}>
            <FeedbackBlock/>
        </div>
    </div>
}

export default Body