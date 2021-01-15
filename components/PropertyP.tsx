import LayoutStyles from '../styles/Layout.module.css'

import { ReactElement, ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export default function PropertyP({
    children,
}: Readonly<Props>): ReactElement {
    return <section className={LayoutStyles.p}>
        {children}
    </section>
}