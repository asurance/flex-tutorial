import headerStyles from '../styles/Header.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    href: string;
    children?: ReactNode;
}

export default function HeaderLink({
    href,
    children,
}: Readonly<Props>): ReactElement {
    return <Link href={href}><a className={headerStyles.link}>{children}</a></Link>
}