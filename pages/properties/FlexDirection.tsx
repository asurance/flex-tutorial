import flexStyles from '../../styles/Flex.module.css'

import { ReactElement, useCallback, useState } from 'react'
import PropertyLayout from '../../components/PropertyLayout'
import PropertyValue from '../../components/PropertyValue'
import Link from 'next/link'

const WritingMode = <Link href="https://www.w3.org/TR/css-writing-modes-4/#writing-mode">writing mode</Link>

const FlexDirection = (): ReactElement => {
    const [flexDirection, setFlexDirection] = useState<FlexDirection>('row')
    const onChange = useCallback((value: FlexDirection) => {
        setFlexDirection(value)
    }, [])
    return <PropertyLayout title="flex-direciton">
        <section>
            <header><h1>flex-direction</h1></header>
            <PropertyValue value="row" isDefault onTakeEffect={onChange} >
                <p>容器的主轴和当前{WritingMode}的内联方向一致。主开始和主结束分别等效于当前{WritingMode}的内联开始和内联结束方向。</p>
            </PropertyValue>
            <PropertyValue value="row-reverse" onTakeEffect={onChange} >
                <p>和<Link href="/properties/FlexDirection#row">row</Link>相似,只是主开始和主结束方向被交换了</p>
            </PropertyValue>
            <PropertyValue value="column" onTakeEffect={onChange} />
            <PropertyValue value="column-reverse" onTakeEffect={onChange} />
        </section>
        <section style={{ width: 500 }}>
            <div style={{ flexDirection }} className={flexStyles.container}>
                <div className={flexStyles.item}>1</div>
                <div className={flexStyles.item}>2</div>
                <div className={flexStyles.item}>3</div>
            </div>
        </section>
    </PropertyLayout>
}

export default FlexDirection