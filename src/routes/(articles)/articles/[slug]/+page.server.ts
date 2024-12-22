import { error } from '@sveltejs/kit';
import articles from '../../../../docs/_maps_/articles';
import fs from 'fs';

export function load({ params }) {
	const article = articles.find((article) => `${article.id}-${article.slug}` === params.slug);

	if (!article) error(404);

	const content = fs.readFileSync(`src/docs/${article.markdown}`, 'utf-8');
	return {
		article,
		content
	};
}