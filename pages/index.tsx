import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../components/Auth'
import Layout from '../components/Layout'
import SignInButton from '../components/SignInButton'

const IndexPage = () => {
  const router = useRouter()
  const { currentUser } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser) {
      router.push('/boxes')
    }
  }, [currentUser])

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
