import flexStyles from '../styles/Flex.module.css'

import { CSSProperties, ReactElement, ReactNode } from 'react'

type Props = {
    style?: CSSProperties;
    children?: ReactNode;
}

export default function FlexItem({
    children,
    style,
}: Readonly<Props>): ReactElement {
    return (<div style={style} className={flexStyles.item}>{children}</div>)
}