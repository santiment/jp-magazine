import React from "react";
import styles from "./Footer.module.scss";
import santiment from "../../images/santiment.svg";
import SmoothDropdownItem from "../smoothDropdown/SmoothDropdownItem";
import Button from "@santiment-network/ui/Button";
import chang_language from './../../images/change_language.svg'

const Footer = ()=>{
    return <div className={styles.header}>
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.lang}>
                    <img alt='change_lang' className={styles.langLogo} src={chang_language} />
                    English
                </div>

                <a href="https://santiment.net/about-santiment/" className={styles.link}>About</a>
                <a href="https://santiment.net/about-santiment/contact/" className={styles.link}>Contact</a>
                <a href="https://santiment.net/terms-conditions/" className={styles.link}>Terms</a>
                <a href="https://app.santiment.net/privacy-policy" className={styles.link}>Privacy</a>

            </div>

            <div className={styles.right}>
                © 2019 Santiment Inc. All rights reserved
            </div>
        </div>
    </div>
}

export default Footer