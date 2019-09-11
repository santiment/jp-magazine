import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.scss'
import BodyThankyou from "../components/body/bodyThankyou";

const ThankYouPage = () => (
  <Layout>
    <SEO title="Santiment's JP Magazine - Crypto’s Most Comprehensive API" />
    <section className={styles.wrapper}>
      <BodyThankyou/>
    </section>
  </Layout>
)

export default ThankYouPage
