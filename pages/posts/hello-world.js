import Head from "next/head";
import * as posts from "lib/posts";

export async function getStaticProps() {
    const post = await posts.getPost("hello-world");
    return {
        props: {
            post
        }
    }
}

function PostPage({post}) {
    return <>
        <Head>
            <title>Blog: {post.data.title}</title>
            <meta name="description" content="About page of the blog" />
        </Head>
        <h1>{post.data.title}</h1>
        <p>{post.data.date}</p>
        <main>
            <article dangerouslySetInnerHTML={{__html: post.body}}/>
        </main>
        <style jsx>{`
            p {
                color: #888;
                font-size: 0.8rem;
                margin-top: -1rem;
            }
        `}</style>
    </>
}

export default PostPage;
