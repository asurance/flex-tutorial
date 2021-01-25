import ArticleLink from '../components/ArticleLink'
import Layout from '../components/Layout'
import { Container, Item } from '../components/LinkItem'
import PropertyP from '../components/PropertyP'

const Display = <ArticleLink href="/container/Display" keep>display</ArticleLink>

const Flex = <ArticleLink href="/item/Flex" keep>flex</ArticleLink>
const FlexGrow = <ArticleLink href="/item/FlexGrow" keep>flex-grow</ArticleLink>
const FlexShrink = <ArticleLink href="/item/FlexShrink" keep>flex-shrink</ArticleLink>
const FlexBasis = <ArticleLink href="/item/FlexBasis" keep>flex-basis</ArticleLink>

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
            <PropertyP>...</PropertyP>
        </section>
        <section>
            <header><h1>弹性</h1></header>
            <PropertyP>可以用{FlexBasis}来指定{Item}的大小。如果{Container}和{Item}大小不完全比配,可以使用{FlexGrow},{FlexShrink}控制增长或缩小,或是直接用{Flex}控制前三个属性。</PropertyP>
        </section>
        <section>
            <header><h1>布局</h1></header>
            <PropertyP>...</PropertyP>
        </section>
        <section>
            <header><h1>布局算法</h1></header>
            <PropertyP>...</PropertyP>
        </section>
    </Layout>
}

export default Home
