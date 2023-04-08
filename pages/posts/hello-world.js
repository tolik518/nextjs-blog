import Head from "next/head";
import {readFile} from "fs/promises";

async function getPost(slug) {
    return JSON.parse(
        await readFile(`content/posts/${slug}.json`, "utf-8")
    );
}

export async function getStaticProps() {
    const post = await getPost("hello-world");
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
