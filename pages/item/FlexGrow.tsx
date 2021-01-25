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
        link: 'https://caniuse.com/?search=CSS%20property%3A%20flex-grow',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/BaLgmzv',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-grow-property',
        text: 'Reference',
    },
]

const SampleItemClassNames = [FlexStyles['item-sample']]

export default function FlexGrow(): ReactElement {
    return <Layout title="flex-grow" navs={headNavs}>
        <header><h1>flex-grow</h1></header>
        <section>
            <PropertyP>该属性支持{Number}(负数是非法的),并设置了弹性增长因子。它决定了当可分配空间为正时,{Item}会增长多少。</PropertyP>
        </section>
        <PropertyValue value="0" isDefault>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="1">
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames} style={{ flexGrow: 1 }}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}