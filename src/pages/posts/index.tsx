import { GetStaticProps } from 'next';
import Head from 'next/head'
import Prismic from '@prismicio/client'
import styles from './styles.module.scss'
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom'

type Post = {
    slug: string;
    title: string;
    excerpt: string;
    updateAt: string;
};

interface PostsProps {
    posts: Post[]
}


export default function Post({ posts }:PostsProps) {
    return (
        <>
         <Head>
             <title>Post | ignews</title>
         </Head>
         <main className={styles.container}>
             <div className={styles.posts}>
                 { posts.map(post => (
                     <a key={post.slug} href="#">
                     <time>{post.updateAt}</time>
                     <strong>{post.title}</strong>
                     <p>{post.excerpt}</p>
                 </a>
                 )) }
             </div>
         </main>
        </>

    );
}


export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type','post')
    ], {
        fetch: ['post.title', 'post.content'],
        pageSize: 100,
    })
// console.log(JSON.stringify(response,null,2))

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: RichText.asText(post.data.title),
            excerpt: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
            updateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }
    })

    return {
        props: {
            posts
        }
    }
}