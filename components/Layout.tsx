import layoutStyles from '../styles/Layout.module.css'

import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'
import Link from 'next/link'

type Props = {
    children?: ReactNode;
    title?: string;
}

const Layout = ({
    children,
    title,
}: Readonly<Props>): ReactElement => {
    return (<div id={layoutStyles.layout}>
        <Head>
            <title>{`${title ? `${title} | ` : ''}Flex布局手册`}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main id={layoutStyles.main}>
            <Link href="https://www.w3.org/TR/css-flexbox-1/">参考源</Link>
            {children}
        </main>
    </div >)
}

export default Layout