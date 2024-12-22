<script lang="ts">
	import collections from '../../../../docs/_maps_/collections';
	import articles from '../../../../docs/_maps_/articles';
	import CollectionHeader from '../../../../components/CollectionHeader.svelte';
	import Breadcrumb from '../../../../components/Breadcrumb.svelte';
	import ArticleCard from '../../../../components/ArticleCard.svelte';

	export let data;

	const collection = collections.find((collection) => collection.id === data.id);
	const articles_list = articles.filter((article) => collection.articlesId.includes(article.id));
</script>

<svelte:head>
	<title>{collection.name} - Papillon Support</title>
</svelte:head>
<Breadcrumb
	links={[{ name: 'Accueil', href: '/' }, { name: collection.name, href: `/collections/${collection.id}-${collection.slug}` }]} />
<CollectionHeader name={collection.name} number={collection.articlesId.length} icon={collection.icon} />
<section class="articles">
	{#each articles_list as article}
		<ArticleCard title={article.title} description={article.description} image={article.image}
								 image_alt={article.imageAlt} id={article.id} slug={article.slug}
								 time_to_read={article.time_to_read} difficulty={article.difficulty}
								 stepped_guide_available={article.stepped_guide_available}
		/>
	{/each}
</section>

<style>
    .articles {
        margin-top: 250px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
        padding: 16px;
    }
</style>