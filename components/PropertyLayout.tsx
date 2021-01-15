import layoutStyles from '../styles/Layout.module.css'

import type { ReactElement, ReactNode } from 'react'
import PropertyNav from './PropertyNav'
import { NavVO } from '../interfaces/NavVO'
import Head from 'next/head'
import Link from 'next/link'

type Props = {
    children?: ReactNode;
    title?: string;
    navs?: NavVO[];
}

const containers: NavVO[] = [
    {
        link: 'FlexDirection',
        text: 'flex-direction',
    }
]

const PropertyLayout = ({
    children,
    title,
    navs,
}: Readonly<Props>): ReactElement => {
    return (<div id={layoutStyles.layout}>
        <Head>
            <title>{`${title ? `${title} | ` : ''}Flex布局手册`}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header id={layoutStyles.header}>
            {navs ? navs.map(vo => <Link key={vo.text} href={vo.link}>{vo.text}</Link>) : null}
            <Link href="/">回到主页</Link>
        </header>
        <main id={layoutStyles.main}>
            <PropertyNav container={containers} />
            <article id={layoutStyles.article}>{children}</article>
        </main>
    </div >)
}

export default PropertyLayout