import React from "react";
import SanVideo from "../sanVideo/sanVideo";
import styles from './Body.module.scss'

const BodyThankYou = ()=>{
    return <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.title}>Santiment invite</div>
            <div className={styles.header}>
                Thank you!
            </div>
            <div className={styles.offerTitle}>Special offer for (magazine mame) readers:</div>
            <div className={styles.offers}>

            </div>
        </div>
        <div  className={styles.right}>
            <SanVideo/>
        </div>
    </div>
}

export default BodyThankYou