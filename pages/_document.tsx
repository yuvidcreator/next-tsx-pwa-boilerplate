import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
import { GTM_ID } from '../lib/Gtm'


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name='application-name' content='Cricket Aryans Next App' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                <meta name='apple-mobile-web-app-title' content='Cricket Aryans Next App' />
                <meta name='format-detection' content='telephone=no' />
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='msapplication-config' content='/browserconfig.xml' />
                <meta name='msapplication-TileColor' content='#f80cde' />
                <meta name='msapplication-tap-highlight' content='no' />
                <meta name='theme-color' content='#000000' />

                <link rel='apple-touch-icon' type='image/png' href='/touch-icon-iphone.png' />
                <link rel='apple-touch-icon' type='image/png' sizes='152x152' href='/192x192.png' />
                <link rel='apple-touch-icon' type='image/png' sizes='180x180' href='/192x192.png' />
                <link rel='apple-touch-icon' type='image/png' sizes='167x167' href='/192x192.png' />

                <link rel='icon' type='image/png' sizes='32x32' href='/48x48.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/48x48.png' />
                <link rel='manifest' href='/manifest.json' />
                <link rel='mask-icon' href='/512x512.png' color='#5bbad5' />
                <link rel="icon" href="/favicon.ico" />
                <link rel='shortcut icon' href='/favicon.ico' />
            </Head>
            <body>
                {/*  Google Tag Manager inside Head tag */}
                <Script strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
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