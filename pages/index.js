import Head from "next/head";
import Link from "next/link";
import * as posts from "lib/posts";

export async function getStaticProps() {
    const postsSlugAndTitle = await posts.getSlugsAndPostTitle();

    return {
        props: {
            postsSlugAndTitle
        }
    };
}

function HomePage({ postsSlugAndTitle }) {
    return <>
        <Head>
            <title>Blog: Home</title>
            <meta name="description" content="Home page of the blog" />
        </Head>
        <main>
            <h1>Moin</h1>
            <ul>
                {postsSlugAndTitle.map(({ slug, title }) => (
                    <li key={slug}>
                        <Link href={`/posts/${slug}`}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    </>
}

export default HomePage;
