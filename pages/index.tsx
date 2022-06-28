import type { NextPage } from 'next'
import CatCard from '../components/cards/cat/CatCard'
import { mockCatCardProps } from '../components/cards/cat/CatCard.mocks'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
          <CatCard {...mockCatCardProps.base} />
        </div>
      </main>
    </div>
  )
}

export default Home
