import Head from "next/head";

function HelloWorldPage() {
    return <>
        <Head>
            <title>Blog: About</title>
            <meta name="description" content="About page of the blog" />
        </Head>
        <main>
            <h1>Hello World</h1>
            <div>
                <p> This is a first fake entry, so lets just say: Hello World. </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl
                </p>
            </div>
        </main>
    </>
}

export default HelloWorldPage;
