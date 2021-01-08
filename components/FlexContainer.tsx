import { memo, ReactElement, ReactNode } from 'react'

type Props = {
    flexDirection: FlexDirection;
    children: ReactNode
}

const FlexContainer = memo(function FlexContainer({
    flexDirection,
    children,
}: Partial<Props>): ReactElement {
    return (<div
        style={{
            display: 'flex',
            flexDirection,
            border: '1px solid',
            overflow: 'hidden',
        }}
    >{children}</div>)
})

export default FlexContainer