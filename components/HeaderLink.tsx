import headerStyles from '../styles/Header.module.css'

import { ReactElement, ReactNode } from 'react'
import StyledLink from './StyledLink'

type Props = {
    href: string;
    children?: ReactNode;
    keep?: boolean;
}

export default function HeaderLink(props: Readonly<Props>): ReactElement {
    return <StyledLink {...props} className={headerStyles.link}></StyledLink>
}