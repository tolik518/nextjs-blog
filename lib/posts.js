import {readFile} from "fs/promises";

export async function getPost(slug) {
    return JSON.parse(
        await readFile(`content/posts/${slug}.json`, "utf-8")
    );
}
