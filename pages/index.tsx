import Link from 'next/link'
import Layout from '../components/Layout'

const Home = (): JSX.Element => {
    return <Layout >
        <header><h1>Flex布局手册</h1></header>
        <Link href="/properties/FlexDirection">start</Link>
    </Layout>
}

export default Home
