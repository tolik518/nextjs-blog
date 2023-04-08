import {readFile} from "fs/promises";
import {marked} from "marked";

export async function getPost(slug) {
    const content = marked(
        await readFile(`content/posts/${slug}.md`, "utf-8")
    );
    return {
        content
    }
}
