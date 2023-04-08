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
            <title>Blog: {post.title}</title>
            <meta name="description" content="About page of the blog" />
        </Head>
        <h1>{post.title}</h1>
        <main>
            <article dangerouslySetInnerHTML={{__html: post.body}}/>
        </main>
    </>
}

export default PostPage;
