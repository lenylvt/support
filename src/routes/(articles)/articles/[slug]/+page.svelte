<script lang="ts">
	import collections from '../../../../docs/_maps_/collections';
	import type { Plugin } from 'svelte-exmarkdown';
	import Markdown, { Transparent } from 'svelte-exmarkdown';
	import rehypeRaw from 'rehype-raw';
	import remarkGfm from 'remark-gfm';
	import markdownit from 'markdown-it'
	import Breadcrumb from '../../../../components/Breadcrumb.svelte';
	import ArticleHeader from '../../../../components/ArticleHeader.svelte';
	import { onMount } from 'svelte';
	import { ChevronUp } from 'lucide-svelte';

	export let data;
	let show_scroll_top_button = false;

	const collection = collections.find((collection) => collection.articlesId.includes(data.article.id));

	let md = data.content;
	const markdownIt = markdownit({
		html: true
	})
	markdownIt.core.ruler.push('component', (state) => {
		state.tokens.forEach((token) => {
			if (token.type === "heading_open") {
				let level = Number(token.tag[1]);
				token.tag = `h${level + 1}`;
				if (level > 5)
					token.tag = "h6";
			}
			if (token.type === "heading_close") {
				let level = Number(token.tag[1]);
				token.tag = `h${level + 1}`;
				if (level > 5)
					token.tag = "h6";
			}
		});
		const tokens = state.tokens;

		for (let i = 0; i < tokens.length; i++) {
			const token = tokens[i];

			// Si le token est un <p> contenant une seule image
			if (
				token.type === "paragraph_open" &&
				tokens[i + 1] &&
				tokens[i + 1].type === "inline" &&
				tokens[i + 1].children &&
				tokens[i + 1].children.length === 1 &&
				tokens[i + 1].children[0].type === "image"
			) {
				// Supprime les balises de paragraphe autour de l'image
				tokens.splice(i, 1); // Supprime le <p> ouvrant
				tokens.splice(i + 1, 1); // Supprime le </p> fermant
			}
		}
	})
	const md_html = markdownIt.render(md);

	onMount(() => {
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const targetSelector = this.getAttribute('href').slice(1); // Get the href value
				document.querySelector(`[name="${targetSelector}"]`).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
		document.addEventListener('scroll', () => {
			show_scroll_top_button = window.scrollY > 300 && window.scrollY + window.innerHeight < document.body.scrollHeight - 50;
		});
	});
</script>

<svelte:head>
	<title>{data.article.title} - Papillon Support</title>
	<link href="/markdown.css" rel="stylesheet"/>
</svelte:head>
<Breadcrumb links={[{ name: 'Accueil', href: '/' }, { name: collection.name, href: `/collections/${collection.id}-${collection.slug}` }, { name: data.article.title, href: `/articles/${data.article.id}-${data.article.slug}` }]} />
<ArticleHeader name={data.article.title} description={data.article.description} time_to_read={data.article.time_to_read} difficulty={data.article.difficulty} stepped_guide_available={data.article.stepped_guide_available} image={data.article.image} />
<section class="container markdown-section">
	{@html md_html}
</section>
<button class="scroll_top_button" class:hide={!show_scroll_top_button} on:click={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
	<ChevronUp size={25} style="translate: 0 -0.5px"/>
</button>

<style>
	.container {
			margin-top: 265px;
			padding: 16px;
			box-sizing: border-box;
	}
	.scroll_top_button {
			position: fixed;
			bottom: 16px;
			right: 16px;
			background-color: #FFF;
			border: 1px solid #D9D9D9;
			border-radius: 32px;
			width: 50px;
			height: 50px;
			cursor: pointer;
			padding: 0;
			display: flex;
			justify-content: center;
			align-items: center;
			transition: cubic-bezier(0.47, 0, 0.23, 1.38) .3s;
	}
  @media (hover: hover), (-ms-high-contrast: none) {
      .scroll_top_button:hover {
					background-color: #F2F2F2;
      }
  }
	.hide {
      opacity: 0;
			translate: 0 20px;
			scale: 0.5;
      pointer-events: none;
  }
</style>