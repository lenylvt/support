<script lang="ts">
	import collections from '../../../../docs/_maps_/collections';
	import Markdown from 'svelte-exmarkdown';
	import Breadcrumb from '../../../../components/Breadcrumb.svelte';
	import ArticleHeader from '../../../../components/ArticleHeader.svelte';

	export let data;

	const collection = collections.find((collection) => collection.articlesId.includes(data.article.id));

	let md = data.content;
</script>

<svelte:head>
	<title>{data.article.title} - Papillon Support</title>
</svelte:head>
<Breadcrumb links={[{ name: 'Accueil', href: '/' }, { name: collection.name, href: `/collections/${collection.id}-${collection.slug}` }, { name: data.article.title, href: `/articles/${data.article.id}-${data.article.slug}` }]} />
<ArticleHeader name={data.article.title} description={data.article.description} time_to_read={data.article.time_to_read} difficulty={data.article.difficulty} stepped_guide_available={data.article.stepped_guide_available} image={data.article.image} />
<section class="container">
	<Markdown md={md} />
</section>

<style>
	.container {
			margin-top: 305px;
			padding: 16px;
			box-sizing: border-box;
	}
</style>