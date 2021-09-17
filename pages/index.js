
import Link from 'next/link'

const Home = (prop) => {
  return (
    <div>
      
      <h1>Next js is awesome</h1>
      <h2>{prop.message}</h2>
      <Link href="/product"><a>Go to product</a></Link>
    </div>
  )
}

export default Home
