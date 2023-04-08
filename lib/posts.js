import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
    const { data, content } = matter(
        await readFile(`content/posts/${slug}.md`, "utf-8")
    );

    const body = marked(content);
    return {
        data,
        body
    }
}

export async function getSlugs() {
    const files = await readdir("content/posts");
    return files.map(file => file.replace(/\.md$/, ""));
}

export async function getSlugsAndPostTitle() {
    const slugs = await getSlugs();
    const posts = [];

    for (const slug of slugs) {
        const post = await getPost(slug);
        posts.push({
            slug,
            title: post.data.title
        });
    }
    return posts;
}
