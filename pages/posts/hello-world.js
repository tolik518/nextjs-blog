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
            <title>Blog: About</title>
            <meta name="description" content="About page of the blog" />
        </Head>
        <main>
            <h1>{post.title}</h1>
            <div>
                <p> {post.content}</p>
            </div>
        </main>
    </>
}

export default PostPage;
