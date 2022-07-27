import Head from 'next/head';
import React, { useState, useEffect } from 'react'

interface Props {
    title: string;
    description: string;
    keywords: string;
    image?: string;
    pageslug: string;
}

const SeoMetas = (props: Props) => {
  return (
    <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="robots" content="follow, index" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href={`https://yourwebsite.com${props.pageslug}`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WebinoxMedia" />
        <meta property="og:description" content={props.description} />
        <meta property="og:title" content={props.title} />
        <meta property="og:image" content={`https://yourwebsite.com${props.image}`} />
        <meta property="og:url" content={`https://yourwebsite.com${props.pageslug}`} />
        <meta property="article:publisher" content="https://www.facebook.com/webinoxmedia" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`https://yourwebsite.com${props.pageslug}`} />
        <meta name="twitter:title" content={props.title} />
        <meta name="twitter:description" content={props.description} />
        <meta name="twitter:image:src" content={`https://yourwebsite.com${props.image}`} />
        <meta name="twitter:site" content="@webinoxmedia" />
        <meta name="twitter:creator" content="@webinoxmedia" />
    </Head>
  )
}

export default SeoMetas