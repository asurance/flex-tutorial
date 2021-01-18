import Link from 'next/link'
import { ReactElement, ReactNode } from 'react'

type Props = {
    className?: string;
    href: string;
    children?: ReactNode;
    keep?: boolean;
}

export default function StyledLink({
    className,
    href,
    children,
    keep,
}: Readonly<Props>): ReactElement {
    return <Link href={href}><a target={keep ? '_self' : '_blank'} className={className}>{children}</a></Link>
}