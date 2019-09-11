import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styles from './index.module.scss'
import Header from "../components/header/Header";
import Body from "../components/body/body";
import Footer from "../components/footer/footer";

const IndexPage = () => (
  <Layout>
    <SEO title="Santiment's JP Magazine - Crypto’s Most Comprehensive API" />
    <section className={styles.wrapper}>
      <Body/>
    </section>
  </Layout>
)

export default IndexPage
