import Head from 'next/head'
import styles from '../styles/blog.module.css'

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
        <div className={styles.article}>
          <div className={styles.postInfo}>
            <h1>Добро пожаловать</h1>
          </div>
          <div className={styles.postContent}>
            <p>Проект подготовлен Лавелиным С.П.</p>
            <p>Сегодня, во времена искаженной системы оценок, которая теперь работает не по шкале от 1 до 10, а от 5 до 10, во времена, когда на рейтинг фильма влияет количество засланных продажным изданиям условных "чемоданов", доверять можно лишь
              небольшому количеству независимых обзорщиков. 
            </p>
            <p>
              Проект "Честный обзорщик" является как раз таким. На нем размещаются обзоры от меня и моих товарищей, которые, как и я, являются любителями хорошего кино и сериалов.
            </p>
          </div>
        </div>
      </main>
      <Footer>
      </Footer>
    </Container>
  )
}
