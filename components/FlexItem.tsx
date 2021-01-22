import flexStyles from '../styles/Flex.module.css'

import { CSSProperties, ReactElement, ReactNode } from 'react'

type Props = {
    style?: CSSProperties;
    children?: ReactNode;
    className?: string[];
}

export default function FlexItem({
    children,
    style,
    className,
}: Readonly<Props>): ReactElement {
    return (<div style={style} className={className ? [flexStyles.item].concat(className).join(' ') : flexStyles.item}>{children}</div>)
}