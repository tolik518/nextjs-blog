import Head from "next/head";
import Link from "next/link";

function HomePage() {
    return <>
        <Head>
            <title>Blog: Home</title>
            <meta name="description" content="Home page of the blog" />
        </Head>
        <main>
            <h1>Moin</h1>
            <ul>
                <li>
                    <Link href="/posts/hello-world">Hello World</Link>
                </li>
            </ul>
        </main>
    </>
}

export default HomePage;
