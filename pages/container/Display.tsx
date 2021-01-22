import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import PropertyValue from '../../components/PropertyValue'
import FlexContainer from '../../components/FlexContainer'
import FlexItem from '../../components/FlexItem'
import { BlockLevel, Container, InlineLevel } from '../../components/LinkItem'
import { NavVO } from '../../interfaces/NavVO'
import PropertyP from '../../components/PropertyP'

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20display%3A%20flex',
        text: 'Caniuse'
    },
    {
        link: 'https://codepen.io/asurance/pen/jOMRRzx',
        text: 'Codepen'
    },
    {
        link: 'http://www.w3.org/TR/css-flexbox-1/#flex-containers',
        text: 'Reference',
    },
]
const Display = (): ReactElement => {
    return <Layout title="display" navs={headNavs}>
        <header><h1>display</h1></header>
        <PropertyValue value="flex">
            <PropertyP>{Container}会被视为{BlockLevel}进行布局。</PropertyP>
            <section>
                <FlexContainer>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
        <PropertyValue value="inline-flex" >
            <PropertyP>{Container}会被视为{InlineLevel}进行布局。</PropertyP>
            <section>
                <FlexContainer style={{ display: 'inline-flex' }}>
                    <FlexItem>1</FlexItem>
                    <FlexItem>2</FlexItem>
                    <FlexItem>3</FlexItem>
                </FlexContainer>
            </section>
        </PropertyValue>
    </Layout>
}

export default Display