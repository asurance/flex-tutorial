import { ReactElement } from 'react'
import { Container as ContainerLink } from '../../components/LinkItem'
import Layout from '../../components/Layout'
import PropertyP from '../../components/PropertyP'

export default function Container(): ReactElement {
    return <Layout title="container">
        <header><h1>容器(container)</h1></header>
        <section>
            <PropertyP>{ContainerLink}为其内容建立一个弹性格式上下文。这与块级上下文类似,只是采用弹性布局代替块布局。</PropertyP>
        </section>
    </Layout>
}