import Head from 'next/head';
import Landing from '../components/Landing';

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
        <section className="bg-snow">
          <Landing />
        </section>
      </main>
    </>
  )
}
