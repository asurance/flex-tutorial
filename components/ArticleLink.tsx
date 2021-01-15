import styles from '../styles/Link.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    href: string;
    keep?: boolean
    children?: ReactNode;
}

export default function ArticleLink({
    href,
    keep,
    children,
}: Props): ReactElement {
    return <Link href={href}><a target={keep ? '_self' : '_blank'} className={styles.link}>{children}</a></Link>
}