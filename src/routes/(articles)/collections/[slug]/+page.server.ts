import { error } from '@sveltejs/kit';
import collections from '../../../../docs/_maps_/collections';

export function load({ params }) {
	const collection = collections.find((collection) => `${collection.id}-${collection.slug}` === params.slug);

	if (!collection) error(404);

	return {id: collection.id};
}