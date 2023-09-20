import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
            </Head>
            <body className='w-screen h-screen m-0 p-0'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}