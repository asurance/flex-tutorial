import FlexStyles from '../../styles/Flex.module.css'

import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { Container, CrossAxis, CrossEnd, CrossStart, Item, MainAxis } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'
import ArticleLink from '../../components/ArticleLink'

const JustifyContent = <ArticleLink href="/container/JustifyContent" keep>justify-content</ArticleLink>

const FlexStart = <ArticleLink href="/container/AlignContent#flex-start" keep>flex-start</ArticleLink>

const Center = <ArticleLink href="/container/AlignContent#center" keep>center</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20align-content%3A%20Supported%20in%20Flex',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/RwGOzqX',
        text: 'Codepen'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#align-content-property',
        text: 'Reference',
    },
]
const ContainerClassNames = [FlexStyles['container-very-larger'], FlexStyles['container-wrap']]
const ItemClassNames = [FlexStyles['item-auto-height']]
const ItemLargerClassNames = [...ItemClassNames, FlexStyles['item-larger']]

export default function AlignContent(): ReactElement {
    return <Layout title="align-content" navs={headNavs}>
        <header><h1>align-content</h1></header>
        <section>
            <PropertyP>当{CrossAxis}上有额外空间时,该属性在{Container}中对齐所有的行。该功能类似于当前行的{CrossAxis}来对齐{Item}。功能上类似于{JustifyContent}在{MainAxis}上对齐{Item}的方式。注意:该属性对单行{Container}没有影响。</PropertyP>
        </section>
        <PropertyValue value="stretch" isDefault>
            <PropertyP>行会被延伸以填满剩余的空间。如果剩余的可用空间为负,则该值与{FlexStart}相同,否则剩余的空间在所有行中平均分配来增大它们的交叉大小。</PropertyP>
            <section>
                <FlexContainer className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={ItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemLargerClassNames}>3</FlexItem>
                    <FlexItem className={ItemClassNames}>4</FlexItem>
                    <FlexItem className={ItemClassNames}>5</FlexItem>
                    <FlexItem className={ItemClassNames}>6</FlexItem>
                    <FlexItem className={ItemClassNames}>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-start" >
            <PropertyP>行被放在{Container}的开始。{Container}第一行的{CrossStart}与{Container}的{CrossStart}对齐,之后的每一行都分别与前一行对齐。</PropertyP>
            <section>
                <FlexContainer style={{ alignContent: 'flex-start' }} className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={ItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemLargerClassNames}>3</FlexItem>
                    <FlexItem className={ItemClassNames}>4</FlexItem>
                    <FlexItem className={ItemClassNames}>5</FlexItem>
                    <FlexItem className={ItemClassNames}>6</FlexItem>
                    <FlexItem className={ItemClassNames}>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="flex-end" >
            <PropertyP>行被放在{Container}的结束。{Container}最后一行的{CrossEnd}与{Container}的{CrossEnd}对齐,之前的每一行都分别与后一行对齐。</PropertyP>
            <section>
                <FlexContainer style={{ alignContent: 'flex-end' }} className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={ItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemLargerClassNames}>3</FlexItem>
                    <FlexItem className={ItemClassNames}>4</FlexItem>
                    <FlexItem className={ItemClassNames}>5</FlexItem>
                    <FlexItem className={ItemClassNames}>6</FlexItem>
                    <FlexItem className={ItemClassNames}>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="center" >
            <PropertyP>行被放在{Container}的中心。不同行都相邻排布,在第一行到{Container}的{CrossStart}和最后一行到{Container}的{CrossEnd}均匀地分配剩余的空间。(如果剩余的空间为负,那就在两侧均匀地溢出。)</PropertyP>
            <section>
                <FlexContainer style={{ alignContent: 'center' }} className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={ItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemLargerClassNames}>3</FlexItem>
                    <FlexItem className={ItemClassNames}>4</FlexItem>
                    <FlexItem className={ItemClassNames}>5</FlexItem>
                    <FlexItem className={ItemClassNames}>6</FlexItem>
                    <FlexItem className={ItemClassNames}>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="space-between" >
            <PropertyP>行被均匀地分布在{Container}内。如果剩余可用空间为负,或是{Container}只有一行,则该值与{FlexStart}相同。否则,{Container}第一行的{CrossStart}和{Container}的{CrossStart}对齐,最后一行的{CrossEnd}和{Container}的{CrossEnd}对齐。剩余空间被平分使得任意两个相邻行之间间距相同。</PropertyP>
            <section>
                <FlexContainer style={{ alignContent: 'space-between' }} className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={ItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemLargerClassNames}>3</FlexItem>
                    <FlexItem className={ItemClassNames}>4</FlexItem>
                    <FlexItem className={ItemClassNames}>5</FlexItem>
                    <FlexItem className={ItemClassNames}>6</FlexItem>
                    <FlexItem className={ItemClassNames}>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="space-around" >
            <PropertyP>行被均匀地分布在{Container}内,并在两端有一半大小的空间。如果剩余空间为负,则该值与{Center}相同。否则,所有行会被排布成任意两行之间间距相同,并且第一行和最后一行离{Container}两侧的距离为间距的一半。</PropertyP>
            <section>
                <FlexContainer style={{ alignContent: 'space-around' }} className={ContainerClassNames}>
                    <FlexItem className={ItemClassNames}>1</FlexItem>
                    <FlexItem className={ItemClassNames}>2</FlexItem>
                    <FlexItem className={ItemLargerClassNames}>3</FlexItem>
                    <FlexItem className={ItemClassNames}>4</FlexItem>
                    <FlexItem className={ItemClassNames}>5</FlexItem>
                    <FlexItem className={ItemClassNames}>6</FlexItem>
                    <FlexItem className={ItemClassNames}>7</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}