import styles from './Playground.module.css'

import Layout from '../components/Layout'
import FlexContainer from '../components/FlexContainer'
import { ReactElement, useCallback, useRef } from 'react'
import { useArray } from '../utils/useArray'
import FlexItem from '../components/FlexItem'

const Playground = (): ReactElement => {
    const id = useRef<number>()
    const { state: itemData, add: addItem } = useArray<{ order: number, id: number }>()
    const items = itemData.map(data => <FlexItem key={data.id} order={data.order}></FlexItem>)
    const onAddClick = useCallback(() => {
        const data = {
            order: 1,
            id: id.current ?? 0
        }
        id.current = data.id + 1
        addItem(data)
    }, [addItem])
    return (
        <Layout title="Playground">
            <div id={styles.root}>
                <div id={styles.container}>
                    <FlexContainer>
                        {items}
                    </FlexContainer>
                </div>
                <div id={styles.inspector}>
                    <button onClick={onAddClick}>增加</button>
                </div>
            </div>
        </Layout>
    )
}

export default Playground