import layoutStyles from '../styles/Layout.module.css'

import type { ReactElement, ReactNode } from 'react'
import Layout from './Layout'
import PropertyNav from './PropertyNav'
import { NavVO } from '../interfaces/NavVO'

type Props = {
    children?: ReactNode;
    title?: string;
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
}: Readonly<Props>): ReactElement => {
    return <Layout title={title}>
        <PropertyNav container={containers} />
        <article id={layoutStyles.article}>{children}</article>
    </Layout>
}

export default PropertyLayout