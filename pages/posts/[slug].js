import { useRouter } from 'next/router'

// Настройки. Лучше не трогать
import Footer from '../../components/footer'
import Header from '../../components/header'
import Container from '../../components/container'

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
            <Header>
            </Header>

            <div className={styles.article}>
                <div className={styles.postInfo}>
                    <h1>
                        { post.title }
                    </h1>
                    Author: <div className={styles.author}>  { post.author } </div>
                </div>
                <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>

            <Footer>
            </Footer>
        </Container>
    )
}

export async function getStaticPaths() {
    const posts = content.posts

    const paths = posts.map((post) => ({
        params: {slug: post.slug}
    }))

    return {paths, fallback: false}
}

export async function getStaticProps( {params} ) {
    const currentPost = content.posts.find(post => {
        return post.slug == params.slug
    })

    return { props: currentPost }
}

export default Post