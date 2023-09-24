import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
                <link href="https://fonts.go'ogleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto+Mono:wght@500;700&display=swap" rel="stylesheet" />
            </Head>
            <body className='w-screen h-screen m-0 p-0 bg-main'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}