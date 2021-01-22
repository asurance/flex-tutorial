import FlexStyles from '../../styles/Flex.module.css'

import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Container, Integer, Item } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'

const SampleItemClassNames = [FlexStyles['item-sample']]

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20order',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/wvzbGmQ',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#order-property',
        text: 'Reference',
    },
]
const FlexDirection = (): ReactElement => {
    return <Layout title="order" navs={headNavs}>
        <header><h1>order</h1></header>
        <section>
            <PropertyP>该属性通过给{Item}设定序号来控制其在{Container}中的显示顺序。它接受一个{Integer}来指定{Item}属于哪个序号组。{Container}会从编号最小的文档开始向大的排列,相同序号组的则按在源文档中出现的顺序排列。</PropertyP>
        </section>
        <PropertyValue value="0" isDefault >
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="1" >
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem style={{ order: 1 }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="-1" >
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem style={{ order: -1 }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}

export default FlexDirection