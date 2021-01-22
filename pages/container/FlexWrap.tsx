import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { BlockStart, Container, CrossAxis, CrossEnd, CrossStart, InlineStart, WritingMode } from '../../components/LinkItem'
import ArticleLink from '../../components/ArticleLink'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'

const Wrap = <ArticleLink href="/container/FlexWrap#wrap" keep>wrap</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20flex-wrap',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/oNzmrrX',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property',
        text: 'Reference',
    },
]
const FlexDirection = (): ReactElement => {
    return <Layout title="flex-wrap" navs={headNavs}>
        <header><h1>flex-wrap</h1></header>
        <section>
            <PropertyP>该属性用来控制{Container}是单行还是多行以及{CrossAxis}的方向,即新行的堆叠方向。</PropertyP>
        </section>
        <PropertyValue value="nowrap" isDefault >
            <PropertyP>{Container}是单行容器。</PropertyP>
            <section>
                <FlexContainer >
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                    <FlexItem>4</FlexItem>
                    <FlexItem>5</FlexItem>
                    <FlexItem>6</FlexItem>
                    <FlexItem>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="wrap" >
            <PropertyP>{Container}是多行容器,{CrossStart}的方向和当前{WritingMode}的{InlineStart}或{BlockStart}(指对于{CrossAxis}而言),{CrossEnd}则是与{CrossStart}相对的方向。</PropertyP>
            <section>
                <FlexContainer style={{ flexWrap: 'wrap' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                    <FlexItem>4</FlexItem>
                    <FlexItem>5</FlexItem>
                    <FlexItem>6</FlexItem>
                    <FlexItem>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="wrap-reverse" >
            <PropertyP>和{Wrap}相似,只是{CrossStart}和{CrossEnd}的方向相反。</PropertyP>
            <section>
                <FlexContainer style={{ flexWrap: 'wrap-reverse' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                    <FlexItem>4</FlexItem>
                    <FlexItem>5</FlexItem>
                    <FlexItem>6</FlexItem>
                    <FlexItem>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}

export default FlexDirection