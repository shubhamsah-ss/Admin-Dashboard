import Link from 'next/link'

const Home = () => {

  return (
    <div>
        <Link href={"/login"}>Login</Link>
        <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  )
}

export default Home