import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Container, CrossAxis, CrossEnd, CrossStart, Item, MaxHeight, MaxWidth, MinHeight, MinWidth } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'
import ArticleLink from '../../components/ArticleLink'

const JustifyContent = <ArticleLink href="/container/JustifyContent">justify-content</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=align-items',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/rNMbzxq',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#align-items-property',
        text: 'Reference',
    },
]

export default function AlignItems(): ReactElement {
    return <Layout title="align-items" navs={headNavs}>
        <header><h1>align-items</h1></header>
        <section>
            <PropertyP>该属性沿着{Container}当前行的{CrossAxis}来对齐{Item}。功能上类似与{JustifyContent},但是是在垂直方向上的。</PropertyP>
        </section>
        <PropertyValue value="stretch" isDefault>
            <PropertyP>如果{Item}的交叉大小和{CrossAxis}的两侧都不是计算为&apos;auto&apos;,那{Item}会被拉伸。它所使用的值会是使{Item}的交叉大小应可能与行的一致,同时又满足的{MinHeight}/{MinWidth}/{MaxHeight}/{MaxWidth}约束。</PropertyP>
            <section>
                <FlexContainer style={{ height: 150 }}>
                    <FlexItem style={{ height: 'auto' }}>1</FlexItem>
                    <FlexItem style={{ height: 'auto' }}>2</FlexItem>
                    <FlexItem style={{ height: 'auto', lineHeight: '120px', fontSize: 60 }}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-start" >
            <PropertyP>{Item}的{CrossStart}和行的{CrossStart}对齐。</PropertyP>
            <section>
                <FlexContainer style={{ alignItems: 'flex-start', height: 150 }}>
                    <FlexItem style={{ height: 'auto' }}>1</FlexItem>
                    <FlexItem style={{ height: 'auto' }}>2</FlexItem>
                    <FlexItem style={{ height: 'auto', lineHeight: '120px', fontSize: 60 }}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-end" >
            <PropertyP>{Item}的{CrossEnd}和行的{CrossEnd}对齐。</PropertyP>
            <section>
                <FlexContainer style={{ alignItems: 'flex-end', height: 150 }}>
                    <FlexItem style={{ height: 'auto' }}>1</FlexItem>
                    <FlexItem style={{ height: 'auto' }}>2</FlexItem>
                    <FlexItem style={{ height: 'auto', lineHeight: '120px', fontSize: 60 }}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="center" >
            <PropertyP>{Item}的边距框位于行内{CrossAxis}的中心。(如果该行的尺寸小于所需尺寸,则会在两边均匀地溢出。)</PropertyP>
            <section>
                <FlexContainer style={{ alignItems: 'center', height: 150 }}>
                    <FlexItem style={{ height: 'auto' }}>1</FlexItem>
                    <FlexItem style={{ height: 'auto' }}>2</FlexItem>
                    <FlexItem style={{ height: 'auto', lineHeight: '120px', fontSize: 60 }}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="baseline" >
            <PropertyP>{Item}会是用基线进行对齐。所有{Item}会被排布成他们的基线对齐,同时{Item}中基线和{CrossStart}距离最大的一个的与行的{CrossStart}对齐。如果一个{Item}在必要的轴线中没有基线,那会从它的边框中合成基线。</PropertyP>
            <section>
                <FlexContainer style={{ alignItems: 'baseline', height: 150 }}>
                    <FlexItem style={{ height: 'auto' }}>1</FlexItem>
                    <FlexItem style={{ height: 'auto' }}>2</FlexItem>
                    <FlexItem style={{ height: 'auto', lineHeight: '120px', fontSize: 60 }}>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}