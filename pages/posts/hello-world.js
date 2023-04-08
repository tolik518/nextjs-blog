import Head from "next/head";
import {readFile} from "fs/promises";

export async function getStaticProps() {
    const post = JSON.parse(
        await readFile("content/posts/hello-world.json")
    );

    return {
        props: {
            post
        }
    }
}

function HelloWorldPage({post}) {
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

export default HelloWorldPage;
