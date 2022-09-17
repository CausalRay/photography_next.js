import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <Hero heading="Captur Photography" message="I capture moments in nature and keep them alive."/>
    </div>
  )
}
