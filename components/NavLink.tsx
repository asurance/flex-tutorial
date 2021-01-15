import NavStyles from '../styles/Nav.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    href: string;
    children?: ReactNode;
}

export default function NavLink({
    href,
    children,
}: Readonly<Props>): ReactElement {
    return <Link href={href}><a className={NavStyles.link}>{children}</a></Link>
}