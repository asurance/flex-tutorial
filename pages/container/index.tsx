import { ReactElement } from 'react'
import { Container as ContainerLink } from '../../components/LinkItem'
import Layout from '../../components/Layout'
import PropertyP from '../../components/PropertyP'

export default function Container(): ReactElement {
    return <Layout title="container">
        <header><h1>容器(container)</h1></header>
        <PropertyP>{ContainerLink}是一个display设置为flex/inline-flex的元素生成的框。</PropertyP>
    </Layout>
}