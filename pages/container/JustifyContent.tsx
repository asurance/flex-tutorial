import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { BlockAxis, BlockEnd, BlockStart, InlineAxis, InlineEnd, InlineStart, Item, MainAxis, MainEnd, MainStart, WritingMode } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=justify-content',
        text: 'Caniuse'
    },
    // {
    //     link: 'https://codepen.io/asurance/pen/RwGeBjL',
    //     text: 'Codepen'
    // },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#propdef-justify-content',
        text: 'Reference',
    },
]

export default function JustifyContent(): ReactElement {
    return <Layout title="justify-content" navs={headNavs}>
        <header><h1>justify-content</h1></header>
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
            <PropertyP>容器的{MainAxis}和当前{WritingMode}的{InlineAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{InlineStart}和{InlineEnd}方向。</PropertyP>
            <section>
                <FlexContainer style={{ justifyContent: 'center' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="space-between" >
            <PropertyP>容器的{MainAxis}和当前{WritingMode}的{InlineAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{InlineStart}和{InlineEnd}方向。</PropertyP>
            <section>
                <FlexContainer style={{ justifyContent: 'space-between' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="space-around" >
            <PropertyP>容器的{MainAxis}和当前{WritingMode}的{InlineAxis}方向一致。{MainStart}和{MainEnd}分别等效于当前{WritingMode}的{InlineStart}和{InlineEnd}方向。</PropertyP>
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