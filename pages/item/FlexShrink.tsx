import FlexStyles from '../../styles/Flex.module.css'

import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Item, Number } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20flex-shrink',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/YzGoZGb',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-shrink-property',
        text: 'Reference',
    },
]

const ItemClassNames = [FlexStyles['item-wider']]

const SampleItemClassNames = [...ItemClassNames, FlexStyles['item-sample']]

export default function FlexBasis(): ReactElement {
    return <Layout title="flex-basis" navs={headNavs}>
        <header><h1>flex-basis</h1></header>
        <section>
            <PropertyP>该属性支持{Number},并设置了弹性收缩因子。它决定了当可分配空间为负时,{Item}会收缩多少。</PropertyP>
        </section>
        <PropertyValue value="1" isDefault>
            <section>
                <FlexContainer>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="0">
            <section>
                <FlexContainer>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={SampleItemClassNames} style={{ flexShrink: 0 }}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="2">
            <section>
                <FlexContainer>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={SampleItemClassNames} style={{ flexShrink: 2 }}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}