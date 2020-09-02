import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hey, there. Thanks for stopping by!</p>
    <p>My name is Jon Bukiewicz and I grew up building things on the web.</p>
    <p>I strive to find solutions by leveraging over 20 years of experience in front end development, project management, user-centric design, and clear communication.</p>
    <p>I currently work for a <a href="https://www.neighborhoods.com/" target="_blank" rel="noopener noreferrer">real estate software company</a> out of Chicago, working with a team of engineers to build performant and accessible features, A/B tests and integrations using React.</p>
    <p>I love all things JavaScript, semantic markup, accessibility and web performance.</p>
    <p>My experience has ranged from building <a href="https://www.calendow.org/" rel="noopener noreferrer">intricate WordPress sites</a> to <a href="https://mobilising.salvationarmy.org/#!/">AngularJs community engagement portals</a> to e-commerce sites in Magento and Hybris for some of the largest brands in the world.</p>
    <p>When not helping to move the web forward by working on various exciting projects, I can be found spending time with family, cooking, watching movies, biking, camping, seeking out good coffee or working out.</p>
    <p>Want to reach out? Send me a <a href="mailto:jon@bukiewi.cz">note</a>.</p>
  </Layout>
);

export default IndexPage;
