import flexStyles from '../styles/Flex.module.css'

import { CSSProperties, ReactElement, ReactNode } from 'react'

type Props = {
    style?: CSSProperties;
    children?: ReactNode;
}

export default function FlexContainer({
    style,
    children,
}: Readonly<Props>): ReactElement {
    return (<div style={style} className={flexStyles.container}>{children}</div>)
}