import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Container, Item, MainAxis, MainEnd, MainStart } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'
import ArticleLink from '../../components/ArticleLink'

const FlexStart = <ArticleLink href="/container/JustifyContent#flex-start" keep>flex-start</ArticleLink>
const Center = <ArticleLink href="/container/JustifyContent#center" keep>center</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20justify-content%3A%20Supported%20in%20Flex%20Layout',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/bGwZvow',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#justify-content-property',
        text: 'Reference',
    },
]

export default function JustifyContent(): ReactElement {
    return <Layout title="justify-content" navs={headNavs}>
        <header><h1>justify-content</h1></header>
        <section>
            <PropertyP>该属性沿着{Container}当前行的{MainAxis}来对齐{Item}。这是在任何弹性长度和自动边距计算后完成的。通常而言,当一行中的所有{Item}都没弹性或是已经到其最大大小的时候,该属性可以帮助分配剩余的可用空间。当总长超出行时,也可以对项目的对齐方式进行一些控制。</PropertyP>
        </section>
        <PropertyValue value="flex-start" isDefault >
            <PropertyP>{Item}被放在行首。行上第一个{Item}的{MainStart}边和行的{MainStart}对齐,之后的每个{Item}的则分别与前一个对齐。</PropertyP>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-end" >
            <PropertyP>{Item}被放在行尾。行上最后一个{Item}的{MainEnd}边和行的{MainEnd}对齐,之前的每个{Item}的则分别与后一个对齐。</PropertyP>
            <section>
                <FlexContainer style={{ justifyContent: 'flex-end' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="center" >
            <PropertyP>{Item}被放在行中心。行上的的{Item}彼此紧邻,并与行的中心对齐。行的{MainStart}与行中第一个{Item}之间和行的{MainEnd}与行中最后一个{Item}之间有相同大小的空间。(如何剩余的可用空间为负,{Item}也会溢出相同的空间。)</PropertyP>
            <section>
                <FlexContainer style={{ justifyContent: 'center' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="space-between" >
            <PropertyP>{Item}被均匀的分布在一条线上。如果剩余可用的空间为负,或是行中只有一个{Item},该值效果和{FlexStart}一致。否则,行中的第一个{Item}的{MainStart}和行的{MainStart}对齐,最后一个{Item}的{MainEnd}和行的{MainEnd}对齐,剩余的{Item}会被分布成任意两个相邻之间间距相同。</PropertyP>
            <section>
                <FlexContainer style={{ justifyContent: 'space-between' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="space-around" >
            <PropertyP>{Item}被均匀的分布在一条线上,并且两侧有一般大小的空间。如果剩余的可用空间为负数,或者行中只有一个{Item},该值效果和{Center}一致。否则,该行上的{Item}分布会使得任意相邻两个之间间距相同,并且第一个/最后一个{Item}到容器两边的间距是相邻间距的一半。</PropertyP>
            <section>
                <FlexContainer style={{ justifyContent: 'space-around' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}