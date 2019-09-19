import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "./index.module.scss";
import Body from "../components/body/body";
import LangWrapper from "../components/LangWrapper";

const IndexPage = () => (
    <LangWrapper>
        <Layout>
            <SEO title="Santiment's JP Magazine - Crypto’s Most Comprehensive API" />
            <section className={styles.wrapper}>
                <Body />
            </section>
        </Layout>
    </LangWrapper>
);

export default IndexPage;
