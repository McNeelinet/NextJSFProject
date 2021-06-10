import { useRouter } from 'next/router'

// Настройки. Лучше не трогать
import Footer from '../../components/footer'
import Header from '../../components/header'
import Container from '../../components/container'
import Head from 'next/head'
import Image from 'next/image'

import content from '../../data/posts.json'
import styles from '../../styles/blog.module.css'

const Post = ( post ) => {
    const router = useRouter()

    // HTML страницы поста.
    // CSS файл для нее - blog.module.css
    // CSS файл для футера, хэдера и сонтейнера - Home.module.css
    return (
        // HTML контейнера, футера и хэдера в папке компонентов
        <Container>
            <Head>
                <title>{post.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header>
            </Header>
            <main className={styles.main}>
                <div className={styles.article}>
                    <div className={styles.postInfo}>
                        <h1>
                            { post.title }
                        </h1>
                        Автор обзора: <div className={styles.author}>  { post.author } </div>
                    </div>
                        <div wrapperClassName={styles.img}>
                            <Image src={"/" + post.img} width='1280' height='720'></Image>
                        </div>
                    <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
            </main>
            <Footer>
            </Footer>
        </Container>
    )
}

export async function getStaticPaths() {
    const posts = content.posts

    const paths = posts.map((post) => ({
        params: {title: post.title}
    }))

    return {paths, fallback: false}
}

export async function getStaticProps( {params} ) {
    const currentPost = content.posts.find(post => {
        return post.title == params.title
    })

    return { props: currentPost }
}

export default Post