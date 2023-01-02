import Head from 'next/head'
import Pokedex from '../components/Pokedex'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="A list of pokemons" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
            <Pokedex />
        </section>
      </main>
    </>
  )
}
