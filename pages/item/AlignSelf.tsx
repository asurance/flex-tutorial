import FlexStyles from '../../styles/Flex.module.css'

import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Container, CrossAxis, Item } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'
import ArticleLink from '../../components/ArticleLink'

const AlignItems = <ArticleLink href="/container/AlignItems" keep>align-items</ArticleLink>
const FlexStart = <ArticleLink href="/container/AlignItems#flex-start" keep>flex-start</ArticleLink>
const FlexEnd = <ArticleLink href="/container/AlignItems#flex-end" keep>flex-end</ArticleLink>
const Center = <ArticleLink href="/container/AlignItems#center" keep>center</ArticleLink>
const Baseline = <ArticleLink href="/container/AlignItems#baseline" keep>baseline</ArticleLink>
const Stretch = <ArticleLink href="/container/AlignItems#stretch" keep>stretch</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20align-self%3A%20Supported%20in%20Flex%20Layout',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/abmrOmd',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#align-items-property',
        text: 'Reference',
    },
]

const ContainerClassNames = [FlexStyles['container-larger']]
const ItemClassNames = [FlexStyles['item-auto-height']]
const SampleItemClassNames = [...ItemClassNames, FlexStyles['item-sample']]

export default function AlignSelf(): ReactElement {
    return <Layout title="align-self" navs={headNavs}>
        <header><h1>align-self</h1></header>
        <section>
            <PropertyP>该属性允许为单个{Item}设置以覆盖{Container}的{AlignItems}。(如果{Item}任一{CrossAxis}边距为&apos;auto&apos;,该属性会失效。)</PropertyP>
        </section>
        <PropertyValue value="auto" isDefault>
            <PropertyP>对{CrossAxis}的控制延迟到父玄素的{AlignItems}上。</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-start" >
            <PropertyP>参考{FlexStart}</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem style={{ alignSelf: 'flex-start' }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-end" >
            <PropertyP>参考{FlexEnd}</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem style={{ alignSelf: 'flex-end' }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="center" >
            <PropertyP>参考{Center}</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem style={{ alignSelf: 'center' }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="baseline" >
            <PropertyP>参考{Baseline}</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem style={{ alignSelf: 'baseline' }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="stretch">
            <PropertyP>参考{Stretch}</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem style={{ alignSelf: 'stretch' }} className={SampleItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemClassNames}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}