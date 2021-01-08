import styles from './Layout.module.css'

import Head from 'next/head'
import Link from 'next/link'

import type { ReactElement, ReactNode } from 'react'
import { useRouter } from 'next/router'

type Props = {
    children?: ReactNode;
    title?: string;
}

const Layout = ({
    children,
    title,
}: Readonly<Props>): ReactElement => {
    const router = useRouter()
    return (<div id={styles.layout}>
        <Head>
            <title>{`${title ? `${title} | ` : ''}Flex布局教程`}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main id={styles.main}>
            {children}
        </main>
        <footer>
            {router.pathname === '/' ? null : <Link href="/">回到主页</Link>}
            <Link href="https://www.w3.org/TR/css-flexbox-1/">参考源</Link>
        </footer>
    </div >)
}

export default Layout