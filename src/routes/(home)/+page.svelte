<script>
	import HomeHeader from '../../components/HomeHeader.svelte';
	import CategoryCard from '../../components/CategoryCard.svelte';
	import collections from '../../docs/_maps_/collections';

</script>

<svelte:head>
	<title>Accueil - Papillon Support</title>
</svelte:head>
<HomeHeader />
<section class="categories">
	{#each collections as collection}
		<CategoryCard name={collection.name} number={collection.articlesId.length} icon={collection.icon} id={collection.id} slug={collection.slug} />
	{/each}
</section>

<style>
	.categories {
		margin-top: 200px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
		gap: 16px;
		padding: 16px;
	}
</style>