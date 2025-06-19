import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Hey there — I’m Jon Bukiewicz, a remote Engineering Manager with a passion for building great teams and better software.
      Right now, I lead the team behind two flagship products at <a href="https://synd.io" target="_blank" rel="noopener noreferrer">Syndio</a>,
      where we’re helping companies tackle pay equity with tools that are powerful, user-friendly, and make a difference.
      The products I manage bring in nearly 90% of Syndio’s revenue, so I spend a lot of time thinking about scale, reliability, and how to help my team do their best work.
    </p>

    <p>
      My background is rooted in frontend engineering, but these days I’m just as focused on strategy, team culture, and mentoring.
      I’ve led initiatives around AI-assisted tooling, incident response, test automation, and even cut down on meetings by setting up async workflows that work and maintain focus throughout the team.
      Whether it’s debugging gnarly issues or helping someone grow into their next role, I love the mix of problem-solving and people leadership this job brings.
    </p>

    <p>
      Before Syndio, I worked at places like PayPal and Neighborhoods.com,
      always pushing for cleaner code, better collaboration, and products people actually want to use.
    </p>

    <p>Want to reach out? Send me a <a href="mailto:jon@bukiewi.cz">note</a>.</p>
  </Layout>
);

export default IndexPage;
