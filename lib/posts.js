import { readFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export async function getPost(slug) {
    const {data, content} = matter(
        await readFile(`content/posts/${slug}.md`, "utf-8")
    );
    console.log(data);

    const body = marked(content);
    return {
        data,
        body
    }
}
