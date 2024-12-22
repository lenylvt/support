<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	export let links: { name: string, href: string }[] = [];
</script>

<div class="breadcrumb" aria-label="breadcrumb">
	<div class="container">
	{#each links as link, i}
		<a href={link.href} style="opacity: {i !== links.length - 1 ? 0.3 : 0.6}; margin-right: {i !== links.length - 1 ? 0 : 'auto'};">{link.name}</a>
		{#if i !== links.length - 1}
			<ChevronRight size="14" color="#B2B2B2" style="min-width: 14px"/>
		{/if}
	{/each}
	</div>
</div>

<style>
    .breadcrumb {
        position: absolute;
        top: 120px;
        left: 0;
        right: 0;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        padding: 0;
        z-index: 10;
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.10);
				height: 45px;
    }

    .container {
        display: flex;
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
        max-width: 800px;
        margin: 0;
				gap: 5px;
				align-items: center;
				justify-content: right;
				overflow-x: scroll;
				overflow-y: hidden;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }

		.container::-webkit-scrollbar {
        display: none;
    }

    a {
        color: #000;
        font-size: 14px;
        text-decoration: none;
				white-space: nowrap;
				transition: color .1s, opacity .2s;
    }

    @media (hover: hover), (-ms-high-contrast: none) {
				a:hover {
						color: var(--color-primary);
						opacity: 1 !important;
				}
		}
</style>