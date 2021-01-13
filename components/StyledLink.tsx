import styles from '../styles/Link.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    href: string;
    children?: ReactNode;
}

export default function StyledLink({
    href,
    children,
}: Props): ReactElement {
    return <Link href={href}><a target={href.startsWith('http') ? '_blank' : '_self'} className={styles.link}>{children}</a></Link>
}