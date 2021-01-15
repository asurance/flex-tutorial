import { ReactElement } from 'react'
import PropertyLayout from '../../components/PropertyLayout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { BlockAxis, BlockEnd, BlockStart, InlineAxis, InlineEnd, InlineStart, MainAxis, MainEnd, MainStart, WritingMode } from '../../components/LinkItem'
import ArticleLink from '../../components/ArticleLink'
import { NavVO } from '../../interfaces/NavVO'

const Row = <ArticleLink href="/properties/FlexDirection#row">row</ArticleLink>
const Column = <ArticleLink href="/properties/FlexDirection#column">column</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=flex-direction',
        text: 'caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/RwGeBjL',
        text: 'codepen'
    },
]
const FlexDirection = (): ReactElement => {
    return <PropertyLayout title="flex-direciton" navs={headNavs}>
        <header><h1>flex-direction</h1></header>
        <nav>
            <ArticleLink href="https://codepen.io/asurance/pen/RwGeBjL">codepen</ArticleLink>
            <ArticleLink href="https://caniuse.com/?search=flex-direction">caniuse</ArticleLink>
        </nav>
        <PropertyValue value="row" isDefault  >
            <p>容器的{MainAxis}和当前{WritingMode}的{InlineAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{InlineStart}和{InlineEnd}方向。</p>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="row-reverse" >
            <p>和{Row}相似,只是{MainStart}和{MainEnd}方向被交换了</p>
            <section>
                <FlexContainer style={{ flexDirection: 'row-reverse' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="column" >
            <p>容器的{MainAxis}和当前{WritingMode}的{BlockAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{BlockStart}和{BlockEnd}方向。</p>
            <section>
                <FlexContainer style={{ flexDirection: 'column' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="column-reverse" >
            <p>和{Column}相似,只是{MainStart}和{MainEnd}方向被交换了</p>
            <section>
                <FlexContainer style={{ flexDirection: 'column-reverse' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </PropertyLayout>
}

export default FlexDirection