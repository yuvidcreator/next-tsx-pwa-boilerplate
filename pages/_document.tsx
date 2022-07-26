import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
import { GTM_ID } from '../lib/Gtm'

const APP_NAME = 'WebinoxMedia Next-TS PWA App'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name='application-name' content={APP_NAME} />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#f80cde' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />

                <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='/icons/152x152.png' />
                <link rel='apple-touch-icon' sizes='180x180' href='/icons/180x180.png' />
                <link rel='apple-touch-icon' sizes='167x167' href='/icons/167x167.png' />

                <link rel='icon' type='image/png' sizes='32x32' href='/icons/32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/icons/16x16.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/icons/512x512.png' color='#5bbad5' />
                <link rel='shortcut icon' href='/icons/favicon.ico' />
            </Head>
            <body>
                {/*  Google Tag Manager inside Head tag */}
                <Script id="gtm-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');`}}></Script>
                {/* Google Tag Manager inside Head tag End */}

                {/*  Google Tag Manager inside Body tag */}
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {/* Google Tag Manager inside Body tag End */}

                <Main />

                <NextScript />
            </body>
        </Html>
    )
}