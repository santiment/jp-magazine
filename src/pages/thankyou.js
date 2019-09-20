import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BodyThankyou from "../components/body/bodyThankyou";
import LangWrapper from "../components/LangWrapper";
import styles from "./index.module.scss";

const ThankYouPage = () => (
	<LangWrapper>
	  <Layout>
	    <SEO title="Santiment's JP Magazine - Crypto’s Most Comprehensive API" />
	    <section className={styles.wrapper}>
	      <BodyThankyou />
	    </section>
	  </Layout>
  </LangWrapper>
);

export default ThankYouPage;
