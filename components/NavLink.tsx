import NavStyles from '../styles/Nav.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    href: string;
    children?: ReactNode;
    current?: boolean;
}

export default function NavLink({
    href,
    children,
    current,
}: Readonly<Props>): ReactElement {
    const className = [NavStyles.link]
    if (current) {
        className.push(NavStyles.current)
    }
    return <Link href={href}><a className={className.join(' ')}>{children}</a></Link>
}