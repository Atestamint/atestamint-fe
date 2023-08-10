import Layout from "@/components/layout";
import Head from "next/head";
import ProjectAttestations from "@/pages/project-attestations";

export default function Landing() {
  return (
    <>
      <Head>
        <title>ATESTAMINT</title>
        <meta name="title" content="ATESTAMINT" />
        <meta name="description" content="ATESTAMINT" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://atestamint.vercel.app/meta-image.jpg"
        />
        <meta property="og:title" content="ATESTAMINT" />
        <meta property="og:description" content="ATESTAMINT" />
        <meta
          property="og:image"
          content="https://atestamint.vercel.app/meta-image.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://atestamint.vercel.app/" />
        <meta property="twitter:title" content="ATESTAMINT" />
        <meta property="twitter:description" content="ATESTAMINT" />
        <meta
          property="twitter:image"
          content="https://atestamint.vercel.app/meta-image.jpg"
        />
      </Head>

      <Layout>
        <ProjectAttestations />
      </Layout>
    </>
  );
}
