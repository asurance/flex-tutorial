import { ReactElement } from 'react'
import { Container, Item as ItemLink } from '../../components/LinkItem'
import Layout from '../../components/Layout'
import PropertyP from '../../components/PropertyP'

export default function Item(): ReactElement {
    return <Layout title="item">
        <header><h1>项(item)</h1></header>
        <section>
            <PropertyP>简单的说,{ItemLink}就是{Container}中的内容。</PropertyP>
        </section>
    </Layout>
}