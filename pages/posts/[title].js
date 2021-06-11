import Image from 'next/image'

// Импорт общих для всех страниц компонентов
import Footer from '../../components/footer'
import Header from '../../components/header'
import Container from '../../components/container'
import Head from 'next/head'

// Импорт настроек стрпницы
import content from '../../data/posts.json'
import styles from '../../styles/blog.module.css'

const Post = ( post ) => {
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
                        <div className={styles.img_box}>
                            <Image src={"/" + post.img} width='1280' height='720' className={styles.img}></Image>
                        </div>
                    <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </div>
            </main>
            <Footer>
            </Footer>
        </Container>
    )
}

// Создает маршруты для постов.
// Не трогать, починить не смогу
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