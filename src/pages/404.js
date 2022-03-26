import * as React from "react";

import Layout from "../layout/layout";
import { GatsbySeo } from "gatsby-plugin-next-seo/src/meta/gatsby-seo";

const NotFoundPage = () => {

  return (
    <Layout>
      <GatsbySeo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage

