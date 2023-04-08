import Head from "next/head";

function HomePage() {
    return <>
        <Head>
            <title>Blog: Home</title>
            <meta name="description" content="Home page of the blog" />
        </Head>
        <main>
            <h1>Moin</h1>
            <ul>
                <li>This</li>
                <li>is</li>
                <li>just</li>
                <li>a</li>
                <li>list</li>
            </ul>
        </main>
    </>
}

export default HomePage;
