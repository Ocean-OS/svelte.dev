import { blog_posts } from '$lib/server/content';

export const prerender = true;

export async function load() {
	return {
		posts: blog_posts
	};
}
