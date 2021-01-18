import { ReactElement } from 'react'
import Layout from '../../components/Layout'
import { FlexContainer } from '../../components/LinkItem'
import PropertyP from '../../components/PropertyP'

export default function Container(): ReactElement {
    return <Layout>
        <header><h1>容器(Container)</h1></header>
        <PropertyP>{FlexContainer}是一个display设置为flex/inline-flex的元素生成的框。</PropertyP>
    </Layout>
}