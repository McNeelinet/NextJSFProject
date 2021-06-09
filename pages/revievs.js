import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Footer from '../components/footer'
import Header from '../components/header'
import Container from '../components/container'

import content from '../data/posts.json'

export default function Home() {

  const allPosts = content.posts

  // HTML страницы со всеми постами.
  // CSS файл для нее, футера, хэдера и сонтейнера - Home.module.css
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
      </Header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
         
        </p>

        {
          allPosts.map(function(post) {
            return (
              <a href={"/posts/" + post.slug} className={styles.card}>
                <h2>{post.title}</h2>
                <p>{post.slug}</p>
              </a>
            )
          })
        }

        
      </main>

      <Footer>
      </Footer>
    </Container>
  )
}
