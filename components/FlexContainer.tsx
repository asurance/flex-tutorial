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
            flexDirection,
        }}
    >{children}</div>)
})

export default FlexContainer