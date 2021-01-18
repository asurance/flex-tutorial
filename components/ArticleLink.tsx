import linkStyles from '../styles/Link.module.css'

import { ReactElement, ReactNode } from 'react'
import StyledLink from './StyledLink'

type Props = {
    href: string;
    keep?: boolean
    children?: ReactNode;
}

export default function ArticleLink(props: Props): ReactElement {
    return <StyledLink {...props} className={linkStyles.link}></StyledLink>
}