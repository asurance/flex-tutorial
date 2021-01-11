import layoutStyles from '../styles/Layout.module.css'

import Link from 'next/link'
import Layout from './Layout'
import type { ReactElement, ReactNode } from 'react'

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
        {children}
    </Layout>
}

export default PropertyLayout