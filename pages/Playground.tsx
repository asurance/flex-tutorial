import styles from './Playground.module.css'

import Layout from '../components/Layout'
import FlexContainer from '../components/FlexContainer'
import { ReactElement, useCallback, useState } from 'react'
import { useArray } from '../utils/useArray'
import FlexItem from '../components/FlexItem'

let id = Date.now()

const Playground = (): ReactElement => {
    const { state: itemData, add: addItem, remove: removeItem } = useArray<{ order: Order, id: number }>()
    const [cur, setCur] = useState<{ order: Order, id: number } | null>(null)
    const onAddClick = useCallback(() => {
        const order = Math.floor(Math.random() * 10)
        const data = {
            order,
            id,
        }
        id++
        addItem(data)
        setCur(data)
    }, [addItem])
    const onClickItem = useCallback((id: number) => {
        const data = itemData.find(i => i.id === id)
        if (data) {
            setCur(data)
        }
    }, [itemData])
    const onRemoveClick = useCallback(() => {
        if (cur) {
            removeItem(cur)
            setCur(null)
        }
    }, [cur, removeItem])
    const items = itemData.map(data =>
        <FlexItem select={data === cur} key={data.id} id={data.id} order={data.order} onClick={onClickItem}></FlexItem>)
    return (
        <Layout title="Playground">
            <div id={styles.root}>
                <div id={styles.container}>
                    <div>
                        <FlexContainer >
                            {items}
                        </FlexContainer>
                    </div>
                </div>
                <div id={styles.inspector}>
                    <button onClick={onAddClick}>增加</button>
                    {cur ? <div>{`Order:${cur.order}`}</div> : null}
                    {cur ? <button onClick={onRemoveClick}>删除</button> : null}
                </div>
            </div>
        </Layout>
    )
}

export default Playground