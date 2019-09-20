import React from "react";
import cx from "classnames";
import chang_language from "./../../images/change_language.svg";
import { Projects, SantimentLogo } from "../header/Header";
import tr from "../../translations/translate";
import styles from "./Footer.module.scss";
import responsiveStyles from "../../utils/Responsive.module.scss";
import Dropdown from "../dropdown/Dropdown";
import dropdownStyles from "../dropdown/Dropdown.module.scss";

const About = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://santiment.net/about-santiment/"
    className={styles.link}
  >
    {tr('app.footer.about')}
  </a>
);

const Lang = ({isDesktop, showArrow}) => {

  const lang = localStorage.getItem('lang')

  const setLang = (lang) => {
    if(localStorage.getItem('lang') === lang){
      return
    }

    localStorage.setItem('lang', lang)
    window.location.reload()
  }

  return <Dropdown position='top' showArrow={showArrow} title={
    <div className={styles.lang}>
      <img alt="change_lang" className={styles.langLogo} src={chang_language} />
      {lang === 'en' ? tr('app.footer.langs.en') : tr('app.footer.langs.jp')}
    </div>
  } isDesktop={isDesktop}>
    <div className={dropdownStyles.list}>
      <div onClick={()=>setLang('en')} className={cx(styles.link, dropdownStyles.menuItem)}>
        {tr('app.footer.langs.en')}
      </div>
      <div onClick={()=>setLang('ja')} className={cx(styles.link, dropdownStyles.menuItem)}>
        {tr('app.footer.langs.jp')}
      </div>
    </div>
  </Dropdown>
}


const Contact = (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href="https://santiment.net/about-santiment/contact/"
    className={styles.link}
  >
    {tr('app.footer.contact')}
  </a>
);

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={cx(responsiveStyles.isMobile, styles.center)}>
            <SantimentLogo white />
            {About}
          </div>

          <div className={cx(responsiveStyles.isMobile, styles.center)}>
            {<Projects showArrow />}
            <a
              className={styles.link}
              rel="noopener noreferrer"
              href="mailto:support@santiment.net"
            >
              {tr('app.footer.support')}
            </a>
          </div>

          <div className={cx( responsiveStyles.isDesktop)}>
            {<Lang isDesktop={true} showArrow={false}/>}
          </div>

          <div className={responsiveStyles.isDesktop}>
            {About}
            {Contact}
          </div>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://santiment.net/terms-conditions/"
            className={styles.link}
          >
            {tr('app.footer.terms')}
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://app.santiment.net/privacy-policy"
            className={styles.link}
          >
            {tr('app.footer.privacy')}
          </a>

          <div className={cx(responsiveStyles.isMobile)}>
            {<Lang showArrow={false}/>}
          </div>
        </div>

        <div className={styles.right}>
          © {new Date().getFullYear()} {tr('app.footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
