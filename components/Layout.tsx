import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
    children?: ReactNode;
    title?: string;
}

const Layout = ({
    children,
    title,
}: Readonly<Props>): JSX.Element => {
    return (<div>
        <Head>
            <title>{title ? `${title} | X's Blog` : 'X\'s Blog'}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>

        </header>
        <main>
            <section>

            </section>
            <section>
                {children}
            </section>
            <section>

            </section>
        </main>
        <footer>

        </footer>
    </div>)
}

export default Layout