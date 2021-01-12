import layoutStyles from '../styles/Layout.module.css'

import Link from 'next/link'
import type { ReactElement, ReactNode } from 'react'
import Layout from './Layout'

type Props = {
    children?: ReactNode;
    title?: string;
}

const PropertyLayout = ({
    children,
    title,
}: Readonly<Props>): ReactElement => {
    return <Layout title={title}>
        <nav id={layoutStyles['property-list']} >
            <Link href="/properties/FlexDirection">flex-direciton</Link>
        </nav>
        <article id={layoutStyles.article}>{children}</article>
    </Layout>
}

export default PropertyLayout