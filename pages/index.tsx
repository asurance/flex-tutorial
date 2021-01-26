import ArticleLink from '../components/ArticleLink'
import Layout from '../components/Layout'
import { Container, CrossAxis, Item, MainAxis } from '../components/LinkItem'
import PropertyP from '../components/PropertyP'
import Image from 'next/image'

const Display = <ArticleLink href="/container/Display" keep>display</ArticleLink>

const FlexFlow = <ArticleLink href="/container/FlexFlow" keep>flex-flow</ArticleLink>
const FlexDirection = <ArticleLink href="/container/FlexDirection" keep>flex-direction</ArticleLink>
const FlexWrap = <ArticleLink href="/container/FlexWrap" keep>flex-wrap</ArticleLink>
const Order = <ArticleLink href="/item/Order" keep>order</ArticleLink>

const Flex = <ArticleLink href="/item/Flex" keep>flex</ArticleLink>
const FlexGrow = <ArticleLink href="/item/FlexGrow" keep>flex-grow</ArticleLink>
const FlexShrink = <ArticleLink href="/item/FlexShrink" keep>flex-shrink</ArticleLink>
const FlexBasis = <ArticleLink href="/item/FlexBasis" keep>flex-basis</ArticleLink>

const JustifyContent = <ArticleLink href="/container/JustifyContent" keep>justify-content</ArticleLink>
const AlignItems = <ArticleLink href="/container/AlignItems" keep>align-items</ArticleLink>
const AlignSelf = <ArticleLink href="/item/AlignSelf" keep>align-self</ArticleLink>
const AlignContent = <ArticleLink href="/container/AlignContent" keep>align-content</ArticleLink>

const Home = (): JSX.Element => {
    return <Layout >
        <header><h1>Flex布局手册</h1></header>
        <section>
            <header><h1>简介</h1></header>
            <PropertyP>Flex布局意为弹性布局,可以简便的响应式地进行布局。</PropertyP>
        </section>
        <section>
            <header><h1>display</h1></header>
            <PropertyP>想要使用Flex布局,首先需要给容器设置{Display}为flex或inline-flex。此时容器就变成了{Container},对应的子项就成了{Item}。(注意,绝对位置的子项不会计算在布局内。)</PropertyP>
        </section>
        <section>
            <header><h1>基本知识</h1></header>
            <PropertyP>
                <figure style={{ textAlign: 'center' }} id="show">
                    <Image src="/assets/show.svg" width={665} height={277} />
                </figure>
                <p>可以通过{FlexDirection}和{FlexWrap}来控制{MainAxis}和{CrossAxis},或是直接用缩写形式{FlexFlow}。对于某个{Item},可以通过{Order}来更改其在流中顺序。</p>
            </PropertyP>
        </section>
        <section>
            <header><h1>弹性</h1></header>
            <PropertyP>可以用{FlexBasis}来指定{Item}的大小。如果{Container}和{Item}大小不完全比配,可以使用{FlexGrow},{FlexShrink}控制增长或缩小,或是直接用{Flex}控制前三个属性。</PropertyP>
        </section>
        <section>
            <header><h1>布局</h1></header>
            <PropertyP>对{Container}中剩余的额外空间,可以通过{JustifyContent}和{AlignItems}进行分配。可以通过{AlignSelf}来控制单个{Item}在交叉方向上的空间分配。使用{AlignContent}对多行{Container}中不同行进行控制。</PropertyP>
        </section>
    </Layout>
}

export default Home
