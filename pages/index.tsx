import Link from 'next/link'
import Layout from '../components/Layout'

const Home = (): JSX.Element => {
    return <Layout >
        <Link href="/properties/FlexDirection">flex-direction</Link>
        <Link href="/Playground">playground</Link>
    </Layout>
}

export default Home
