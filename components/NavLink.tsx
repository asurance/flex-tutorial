import NavStyles from '../styles/Nav.module.css'

import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'
import { useRouter } from 'next/router'

type Props = {
    href: string;
    children?: ReactNode;
}

export default function NavLink({
    href,
    children,
}: Readonly<Props>): ReactElement {
    const router = useRouter()
    console.log(router)
    return <Link href={href}><a className={NavStyles.link}>{children}</a></Link>
}