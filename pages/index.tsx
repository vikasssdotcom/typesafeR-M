import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {data} from '../types'
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character')
  const data =await res.json()
  return {
    props:{
      data
    }
  }
}

const Home: NextPage<{data:data}> = ({data}) => {
  const {results} = data
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Hello Next + typescript + tailwind
      </div>
      <div className='w-5/6 justify-center  flex flex-wrap  gap-10 my-10'>
        {results.map(result => (
          <Link href={`/character/${result.id}`}  key={result.id}>
            <div className="border p-8 max-w-[300px] hover:bg-blue-300 hover:text-white transition-all duration-300 ease-in flex flex-col justify-around gap-4">
            <h1 className='text-3xl text-center'>{result.name}</h1>
            <Image src={result.image} height="300" width="300"/>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
