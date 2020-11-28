import Link from 'next/link'
import Layout from '../components/Layout'
import SignInButton from '../components/SignInButton'

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>

      <SignInButton />
    </Layout>
  )
}

export default IndexPage
