import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Hey, there. Thanks for stopping by!</p>
    <p>My name is Jon Bukiewicz and I grew up building things on the web. I strive to find solutions by leveraging over 20 years of experience in front end development, project management, user-centric design, and clear communication.</p>
    <p>I currently work for a <a href="https://www.gorillagroup.com/" target="_blank" rel="noopener noreferrer">digital agency</a> out of Chicago, building complex e-commerce experiences on a variety of platforms. In addition, I have multiple years of experience in front end frameworks like React, Vue, and Angular, as well as utilizing test driven development through Jest, Enzyme and Cypress.</p>
    <p>Outside of my day job, I have built and maintained websites for a variety of clients for the past 8 years. From securing hosting, to designing websites, handling full stack development and helping clients better understand their platforms, my freelance work speaks for itself. I primarily have focused on WordPress, but have also had the opportunity to dabble in Angular, ReactJs and more.</p>
    <p>When not helping to move the web forward by working on various exciting projects, I can be found cooking, hanging with my family, watching movies, riding my bike, seeking out good coffee or working out.</p>
    <p>Want to reach out? Send me a <a href="mailto:jon@bukiewi.cz">note</a>.</p>
  </Layout>
);

export default IndexPage;
