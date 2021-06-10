import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from '../components/footer'
import Header from '../components/header'
import Container from '../components/container'

export default function About() {
  // HTML основной страницы
  // Срочно оформить
  return (
    <Container>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
      </Header>
      <main className={styles.main}>
      </main>
      <Footer>
      </Footer>
    </Container>
  )
}
