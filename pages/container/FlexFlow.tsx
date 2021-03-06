import { ReactElement } from 'react'
import ArticleLink from '../../components/ArticleLink'
import Layout from '../../components/Layout'
import PropertyP from '../../components/PropertyP'
import { NavVO } from '../../interfaces/NavVO'

const FlexDirection = <ArticleLink href="/container/FlexDirection" keep>flex-direction</ArticleLink>

const FlexWrap = <ArticleLink href="/container/FlexWrap" keep>flex-wrap</ArticleLink>

const headNavs: NavVO[] = [
    {
        link: 'https://caniuse.com/?search=CSS%20property%3A%20flex-flow',
        text: 'Caniuse'
    },
    {
        link: 'https://www.w3.org/TR/css-flexbox-1/#flex-flow-property',
        text: 'Reference',
    },
]

export default function FlexFlow(): ReactElement {
    return <Layout title="flex-flow" navs={headNavs}>
        <header><h1>flex-flow</h1></header>
        <section>
            <PropertyP>该属性是{FlexDirection}和{FlexWrap}属性的缩写。取值:&lt;&apos;flex-direction&apos;&gt;||&lt;&apos;flex-wrap&apos;&gt;</PropertyP>
        </section>
    </Layout>
}