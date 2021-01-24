import layoutStyles from '../styles/Layout.module.css'
import headerStyles from '../styles/Header.module.css'
import navStyles from '../styles/Nav.module.css'

import { ReactElement, ReactNode, useCallback, useState } from 'react'
import PropertyNav from './PropertyNav'
import { NavVO } from '../interfaces/NavVO'
import Head from 'next/head'
import HeaderLink from './HeaderLink'
import { useRouter } from 'next/dist/client/router'

type Props = {
    children?: ReactNode;
    title?: string;
    navs?: NavVO[];
}

const containers: NavVO[] = [
    {
        link: 'Display',
        text: 'display',
    },
    {
        link: 'FlexDirection',
        text: 'flex-direction',
    },
    {
        link: 'FlexWrap',
        text: 'flex-wrap',
    },
    {
        link: 'FlexFlow',
        text: 'flex-flow',
    },
    {
        link: 'JustifyContent',
        text: 'justify-content',
    },
    {
        link: 'AlignItems',
        text: 'align-items',
    },
    {
        link: 'AlignContent',
        text: 'align-content',
    },
]

const items: NavVO[] = [
    {
        link: 'FlexBasis',
        text: 'flex-basis',
    },
    {
        link: 'AlignSelf',
        text: 'align-self',
    },
    {
        link: 'Order',
        text: 'order',
    },
]

const Layout = ({
    children,
    title,
    navs,
}: Readonly<Props>): ReactElement => {
    const [navOpen, setNavOpen] = useState(false)
    const onClickNavBtn = useCallback(() => {
        setNavOpen(!navOpen)
    }, [navOpen])

    const router = useRouter()

    return (<div id={layoutStyles.layout}>
        <Head>
            <title>{`${title ? `${title} | ` : ''}Flex布局手册`}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <header id={layoutStyles.header}>
            <nav className={headerStyles.nav}>
                {navs ? navs.map(vo => <HeaderLink key={vo.link} href={vo.link}>{vo.text}</HeaderLink>) : null}
                {router.pathname === '/' ? null : <HeaderLink href="/" keep>Home</HeaderLink>}
                <HeaderLink href="https://github.com/asurance/flex-tutorial/issues">Report Bug</HeaderLink>
            </nav>
        </header>
        <main id={layoutStyles.main}>
            <PropertyNav container={containers} item={items} show={navOpen} />
            <article id={layoutStyles.article} style={{ display: navOpen ? 'none' : '' }}>{children}</article>
            <button id={navStyles.navBtn} onClick={onClickNavBtn}>{navOpen ? '←' : '→'}</button>
        </main>
    </div >)
}

export default Layout