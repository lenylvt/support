<script lang="ts">
	import articles from '../../../docs/_maps_/articles';
	import CollectionHeader from '../../../components/CollectionHeader.svelte';
	import { Search } from 'lucide-svelte';
	import ArticleCard from '../../../components/ArticleCard.svelte';
	import Breadcrumb from '../../../components/Breadcrumb.svelte';
	import { onMount } from 'svelte';

	let query = '';

	// Détecter les paramètres uniquement si ce n'est pas du prérendu
	if (typeof window !== 'undefined') {
		const urlParams = new URLSearchParams(window.location.search);
		query = urlParams.get('q') || '';
	}

	onMount(() => {
		document.title = `Résultat pour « ${query} » - Papillon Support`;
	});

	const articles_list = articles.filter((article) => {
		if (article.title.toLowerCase().includes(query.toLowerCase()))
			return article;
		if (article.description.toLowerCase().includes(query.toLowerCase()))
			return article;
		if (article.id.toString().includes(query.toLowerCase()))
			return article;
		if (article.slug.toLowerCase().includes(query.toLowerCase()))
			return article;
		if (article.markdown.toLowerCase().includes(query.toLowerCase()))
			return article;
		return null;
	});

</script>

<svelte:head>
	<title>Résultat pour « {query} » - Papillon Support</title>
</svelte:head>
<Breadcrumb
	links={[{ name: 'Accueil', href: '/' }, { name: "Recherche", href: `/search?={query}` }]} />
<CollectionHeader name="Résultat pour « {query} »" number={articles_list.length} icon={Search} />
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
        margin-top: 240px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 16px;
        padding: 16px;
    }
</style>