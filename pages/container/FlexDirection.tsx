import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { BlockAxis, BlockEnd, BlockStart, Container, InlineAxis, InlineEnd, InlineStart, Item, MainAxis, MainEnd, MainStart, WritingMode } from '../../components/LinkItem'
import ArticleLink from '../../components/ArticleLink'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'

const Row = <ArticleLink href="/container/FlexDirection#row" keep>row</ArticleLink>
const Column = <ArticleLink href="/container/FlexDirection#column" keep>column</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20flex-direction',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/RwGeBjL',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-direction-property',
        text: 'Reference',
    },
]
const FlexDirection = (): ReactElement => {
    return <Layout title="flex-direciton" navs={headNavs}>
        <header><h1>flex-direction</h1></header>
        <section>
            <PropertyP>该属性是通过设置{Container}的{MainAxis}来表明{Item}被排布的方向。</PropertyP>
        </section>
        <PropertyValue value="row" isDefault >
            <PropertyP>容器的{MainAxis}和当前{WritingMode}的{InlineAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{InlineStart}和{InlineEnd}方向。</PropertyP>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="row-reverse" >
            <PropertyP>和{Row}相似,只是{MainStart}和{MainEnd}方向被交换了。</PropertyP>
            <section>
                <FlexContainer style={{ flexDirection: 'row-reverse' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="column" >
            <PropertyP>容器的{MainAxis}和当前{WritingMode}的{BlockAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{BlockStart}和{BlockEnd}方向。</PropertyP>
            <section>
                <FlexContainer style={{ flexDirection: 'column' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="column-reverse" >
            <PropertyP>和{Column}相似,只是{MainStart}和{MainEnd}方向被交换了。</PropertyP>
            <section>
                <FlexContainer style={{ flexDirection: 'column-reverse' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}

export default FlexDirection