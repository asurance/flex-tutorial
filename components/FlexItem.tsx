import { memo, ReactElement, useCallback } from 'react'

type Props = {
    order: Order;
    onClick(id: number): void;
    id: number;
    select?: boolean
}

const FlexItem = memo(function FlexItem({
    order,
    onClick,
    id,
    select,
}: Props): ReactElement {
    const onClickItem = useCallback(() => {
        onClick(id)
    }, [onClick, id])
    return (<div
        onClick={onClickItem}
        style={{
            order,
            width: 100,
            height: 100,
            backgroundColor: select ? 'red' : 'yellow',
            margin: 5,
        }}
    />)
})

export default FlexItem