import flexStyles from '../styles/Flex.module.css'

import { CSSProperties, ReactElement, ReactNode } from 'react'

type Props = {
    style?: CSSProperties;
    children?: ReactNode;
    className?: string[];
}

export default function FlexContainer({
    style,
    children,
    className,
}: Readonly<Props>): ReactElement {
    return (<div style={style} className={className ? [flexStyles.container].concat(className).join(' ') : flexStyles.container}>{children}</div>)
}