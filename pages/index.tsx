import Link from 'next/link'
import Layout from '../components/Layout'

const HomePage = (): JSX.Element => (
    <Layout title="主页">
        <h1>X&apos;s blog</h1>
        <p>
            <Link href="blogs/flexTutorial">
                flex
            </Link>
        </p>
    </Layout>
)

export default HomePage
