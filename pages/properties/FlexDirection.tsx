import Layout from '../../components/Layout'

import type { ReactElement } from 'react'

const FlexDirection = (): ReactElement => {
    return <Layout title="flex-direciton">
        <header><h1>flex-direction</h1></header>
        <section>
            <header><h2>可选值</h2></header>
            <section>
                <header><h3>row</h3><h4>默认值</h4></header>
            </section>
            <section>
                <header><h3>row-reverse</h3></header>
            </section>
            <section>
                <header><h3>column</h3></header>
            </section>
            <section>
                <header><h3>column-reverse</h3></header>
            </section>
        </section>
    </Layout>
}

export default FlexDirection