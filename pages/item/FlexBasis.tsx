import FlexStyles from '../../styles/Flex.module.css'

import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Height, Item, MainSize, Width } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'
import ArticleLink from '../../components/ArticleLink'


const Auto = <ArticleLink href="/item/FlexBasis#auto" keep>auto</ArticleLink>

const Content = <ArticleLink href="/item/FlexBasis#content" keep>content</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20flex-basis',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/ExgBaBz',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-basis-property',
        text: 'Reference',
    },
]

const SampleItemClassNames = [FlexStyles['item-sample']]

export default function FlexBasis(): ReactElement {
    return <Layout title="flex-basis" navs={headNavs}>
        <header><h1>flex-basis</h1></header>
        <section>
            <PropertyP>该属性会设置{Item}基准值,它可以是{Width}/{Height}格式的值或是{Content}。除了{Auto}和{Content},该属性表现和{Width}/{Height}类似。</PropertyP>
        </section>
        <PropertyValue value="auto" isDefault>
            <PropertyP>即{Item}的{MainSize}。如果也是auto,那该值作用和{Content}一致。</PropertyP>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="content">
            <PropertyP>基于{Item}内容的自动大小。(注意,该属性实际上浏览器支持率不高。)</PropertyP>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames} style={{ flexBasis: 'content' }}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="40px">
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames} style={{ flexBasis: 40 }}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="15%">
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem className={SampleItemClassNames} style={{ flexBasis: '15%' }}>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}