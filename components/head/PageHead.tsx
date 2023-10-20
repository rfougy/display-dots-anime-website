import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import Script from "next/script";

const PageHead: React.FC<{
  page: string;
  title: string;
  description: string;
  image?: string;
  isHomePage?: boolean;
}> = ({ page, title, description, image, isHomePage }) => {
  const { asPath }: NextRouter = useRouter();
  const url: string = "https://display-dots-anime.vercel.app" + asPath;
  const defaultImage: string =
    "https://github.com/rfougy/display-dots-anime-website/assets/77861258/cccd95b2-6f81-4ce8-aeae-9f7a4abd139b";

  return (
    <>
      <Head>
        <title>{isHomePage ? title : `${title} | Display Dots Anime`}</title>
        <meta
          name="description"
          key={`description-${page}`}
          content={description}
        />

        <meta
          property="og:site_name"
          key={`og-site-name-${page}`}
          content="Display Dots Anime"
        />
        <meta
          property="og:title"
          key={`og-title-${page}`}
          content={`${title} | Display Dots Anime`}
        />
        <meta
          property="og:description"
          key={`og-description-${page}`}
          content={description}
        />
        <meta
          property="og:type"
          key={`og-type-${page}`}
          content={image ? "article" : "website"}
        />
        <meta
          property="og:image"
          key={`og-image-${page}`}
          content={image ? image : defaultImage}
        />
        <meta property="og:url" content={url} key={`og-url-${page}`} />
        <meta
          name="twitter:card"
          key={`og-twitter-card-${page}`}
          content="summary_large_image"
        />
      </Head>
      <Script
        id="JSON-LD"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": image ? "article" : "website",
            name: title,
            about: description,
            url: url,
          }),
        }}
      />
    </>
  );
};

export default PageHead;
