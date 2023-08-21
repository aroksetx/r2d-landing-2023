import Head from "next/head";

const SEO = ({ pageTitle, font }) => (
  <>
    <Head>
      <title>
        {pageTitle && `${pageTitle}`}
      </title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="description" content="DELIVERING ANYTHING ACROSS THE WEST COAST USA." />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {font && <link href={font} rel="stylesheet" />}
      <link rel="icon" href="/favicon.png" />
    </Head>
  </>
);

export default SEO;