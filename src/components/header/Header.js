import React from "react";
import santiment from "../../../src/images/santiment.svg"
import styles from './Header.module.scss'
import Button from '@santiment-network/ui/Button'
import SmoothDropdownItem from "../smoothDropdown/SmoothDropdownItem";

const Header = ()=>{
    return <div className={styles.header}>
        <div className={styles.container}>
            <img alt='header-logo' src={santiment} className={styles.logo}/>

            <div className={styles.buttons}>
                <div>
                    <SmoothDropdownItem
                        trigger={<Button variant='flat' className={styles.productsBtn}>Products</Button>}>
                        <div>
                            <a target="_blank" key='sanbase' href='https://app.santiment.net'>Sanbase</a>
                            <a target="_blank" key='sheets' href='https://sheets.santiment.net'>Sheets</a>
                            <a target="_blank" key='neuro' href='https://neuro.santiment.net'>Neuro</a>
                        </div>
                    </SmoothDropdownItem>
                </div>

                <a className={styles.link} as='a' href='mailto:support@santiment.net'>Support</a>
                <a target="_blank" className={styles.borderLink} accent="positive"  as='a' href='app.santiment.net/login'>Sign up</a>
            </div>
        </div>
    </div>
}

export default Header