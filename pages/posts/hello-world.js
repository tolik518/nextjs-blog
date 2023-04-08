import Head from "next/head";

export function getStaticProps() {
    return {
        props: {
            post: {
                title: "Hello World",
                content: "This is a first fake entry, so lets just say: Hello World.",
            }
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
