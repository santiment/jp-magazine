import React, {useState} from "react";
import cx from 'classnames'
import {DesktopOnly, MobileOnly} from "../responsive/Responsive";
import ContextMenu from "@santiment-network/ui/ContextMenu";
import Button from "@santiment-network/ui/Button";
import arrowUp from './../../images/arrow-up.svg'
import arrowDown from './../../images/arrow-down.svg'
import styles from "./Dropdown.module.scss";

const Dropdown = ({children}) => {
    const [isOpen, setOpen] = useState(false)
    const close = (force) => setTimeout(()=>{
        setOpen(false)}, force ? 0 : 1000)
    const open = () => setOpen(true)

    return <>
        <DesktopOnly>
            <div
                onMouseLeave={close}
                onMouseEnter={open}>
                <ContextMenu
                    open={isOpen}
                    onClose={()=>close(true)}
                    onOpen={open}
                    trigger={<div><ProjectsTrigger/></div>}
                    position='bottom'
                    align='start'
                >
                    {children}
                </ContextMenu>
            </div>
        </DesktopOnly>
        <MobileOnly>
            <>
                <ProjectsTrigger showArrow isOpen={isOpen} onClick={()=>{
                    setOpen(!isOpen)
                }}/>
                {isOpen && children}
            </>
        </MobileOnly>
    </>
}

const ProjectsTrigger = ({onClick, isOpen, showArrow}) => {
    return <Button onClick={onClick} variant="flat" as='a' className={cx(styles.productsBtn, isOpen && styles.open)}>
        Products
        {showArrow && <>
            {isOpen && <img alt='up' className={styles.arrow} src={arrowUp}/>}
            {!isOpen && <img alt='down' className={styles.arrow} src={arrowDown}/>}
        </>}
</Button>
}

export default Dropdown