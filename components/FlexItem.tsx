import { memo, ReactElement } from 'react'

type Props = {
    order: number;
}

const FlexItem = memo(function FlexItem({
    order,
}: Partial<Props>): ReactElement {
    return (<div
        style={{
            order,
        }}
    />)
})

export default FlexItem