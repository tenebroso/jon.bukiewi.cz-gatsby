import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hey, there. Thanks for stopping by!</p>
    <p>My name is Jon Bukiewicz and I grew up building things on the web.</p>
    <p>I strive to find solutions by leveraging over 20 years of experience in front end development, project management, user-centric design, and clear communication.</p>
    <p>I currently work for a <a href="https://www.gorillagroup.com/" target="_blank" rel="noopener noreferrer">digital agency</a> out of Chicago, managing a team of creative technologists as we work to build complex e-commerce experiences for some of the world's largest clients.</p>
    <p>I love all things JavaScript, semantic markup, accessibility and web performance.</p>
    <p>My experience has ranged from building <a href="https://www.calendow.org/" rel="noopener noreferrer">intricate WordPress sites</a> to <a href="https://mobilising.salvationarmy.org/#!/">AngularJs community engagement portals</a> to spending nearly 2 years working with a team of engineers to build features, A/B tests and integrations using ReactJs on <a href="https://www.neighborhoods.com/" rel="noopener noreferrer">one of the most engaging real estate listing sites on the web</a>.</p>
    <p>When not helping to move the web forward by working on various exciting projects, I can be found cooking, hanging with my family, watching movies, riding my bike, seeking out good coffee or working out.</p>
    <p>Want to reach out? Send me a <a href="mailto:jon@bukiewi.cz">note</a>.</p>
  </Layout>
);

export default IndexPage;
