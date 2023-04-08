import { readFile, readdir } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
    const {data, content} = matter(
        await readFile(`content/posts/${slug}.md`, "utf-8")
    );

    const body = marked(content);
    return {
        data,
        body
    }
}

export async function getAvailableSlugs() {
    const files = await readdir("content/posts");
    return files.map(file => file.replace(/\.md$/, ""));
}
