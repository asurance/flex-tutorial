import layoutStyles from '../styles/Layout.module.css'

import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import type { ReactElement, ReactNode } from 'react'

type Props = {
    children?: ReactNode;
    title?: string;
}

const Layout = ({
    children,
    title,
}: Readonly<Props>): ReactElement => {
    const router = useRouter()
    return (<div id={layoutStyles.layout}>
        <Head>
            <title>{`${title ? `${title} | ` : ''}Flex布局手册`}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main id={layoutStyles.main}>
            {children}
        </main>
        <footer>
            {router.pathname === '/' ? null : <Link href="/">回到主页</Link>}
            <Link href="https://www.w3.org/TR/css-flexbox-1/">参考源</Link>
        </footer>
    </div >)
}

export default Layout