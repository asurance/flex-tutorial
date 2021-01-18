import headerStyles from '../styles/Header.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    href: string;
    children?: ReactNode;
    keep?: boolean;
}

export default function HeaderLink({
    href,
    children,
    keep,
}: Readonly<Props>): ReactElement {
    return <Link href={href}><a target={keep ? '_self' : '_blank'} className={headerStyles.link}>{children}</a></Link>
}