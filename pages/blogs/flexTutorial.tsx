import React, { ReactElement } from 'react'
import Layout from '../../components/Layout'

const FlexTutorial = (): ReactElement => {
    return <Layout title="Flex布局教程">
        <article>
            <header><h1>Flex布局教程</h1></header>
            <section>
                <header><h2>基本概念</h2></header>
            </section>
            <footer>参考<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout">MDN</a></footer>
        </article>
    </Layout>
}

export default FlexTutorial