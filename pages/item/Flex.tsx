import { ReactElement } from 'react'
import ArticleLink from '../../components/ArticleLink'
import Layout from '../../components/Layout'
import PropertyP from '../../components/PropertyP'
import PropertyValue from '../../components/PropertyValue'
import { NavVO } from '../../interfaces/NavVO'

const FlexGrow = <ArticleLink href="/item/FlexGrow" keep>flex-grow</ArticleLink>

const FlexShrink = <ArticleLink href="/item/FlexShrink" keep>flex-shrink</ArticleLink>

const FlexBasis = <ArticleLink href="/item/FlexBasis" keep>flex-basis</ArticleLink>


const headNavs: NavVO[] = [
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-property',
        text: 'Reference',
    },
]

export default function FlexFlow(): ReactElement {
    return <Layout title="flex-flow" navs={headNavs}>
        <header><h1>flex-flow</h1></header>
        <section>
            <PropertyP>该属性是{FlexGrow},{FlexShrink}和{FlexBasis}属性的缩写。取值:&lt;&apos;flex-grow&apos;&gt; &lt;&apos;flex-shrink&apos;&gt;?||&lt;&apos;flex-basis&apos;&gt;</PropertyP>
        </section>
        <PropertyValue value="initial" isDefault>
            <PropertyP>等效于&apos;0 1 auto&apos;</PropertyP>
        </PropertyValue>
        <PropertyValue value="auto">
            <PropertyP>等效于&apos;1 1 auto&apos;</PropertyP>
        </PropertyValue>
        <PropertyValue value="none">
            <PropertyP>等效于&apos;0 0 auto&apos;</PropertyP>
        </PropertyValue>
    </Layout>
}