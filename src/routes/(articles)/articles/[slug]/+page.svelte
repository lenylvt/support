<script lang="ts">
	import collections from '../../../../docs/_maps_/collections';
	import markdownit from 'markdown-it'
	import hljs from 'highlight.js/lib/core';
	import Breadcrumb from '../../../../components/Breadcrumb.svelte';
	import ArticleHeader from '../../../../components/ArticleHeader.svelte';
	import { onMount } from 'svelte';
	import { ChevronUp } from 'lucide-svelte';

	import javascript from 'highlight.js/lib/languages/javascript';
	hljs.registerLanguage('javascript', javascript);

	let { data } = $props();
	let show_scroll_top_button = $state(false);

	const collection = collections.find((collection) => collection.articlesId.includes(data.article.id));

	const markdownIt = markdownit({
		html: true,
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return '<pre><code class="hljs">' +
						hljs.highlight(str, { language: lang, ignoreIllegals: false }).value +
						'</code><button class=\'copy\' onclick="navigator.clipboard.writeText(str);">Copier</button></pre>';
				} catch (e) {
					console.log(e)
				}
			}
			return str + "<button class='copy'>Copier</button>";
		}
	});
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
			for (let i = 0; i < (token.children == null ? 0:token.children.length); i++) {
				if (token.children[i].type === "link_open" && token.children[i].attrs[0][1].startsWith("http")) {
					token.children[i].attrs.push(["target", "_blank"]);
					token.children[i].attrs.push(["rel", "noopener"]);
				}
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
	
	// Utilise $derived pour que le contenu se mette à jour automatiquement
	let md_html = $derived(markdownIt.render(data.content));

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
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://support.papillon.bzh/" />
	<meta property="og:title" content="{data.article.title} - Papillon Support" />
	<meta property="og:description" content="{data.article.description}" />
	<meta property="og:image" content="{data.article.image}" />
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="{data.article.title} - Papillon Support">
	<meta name="twitter:site" content="@thepapillonapp">
	<meta name="twitter:description" content="{data.article.description}">
	<meta name="twitter:image" content="{data.article.image}">
	<meta name="twitter:image:alt" content="{data.article.imageAlt}">
</svelte:head>
<Breadcrumb links={[{ name: 'Accueil', href: '/' }, { name: collection.name, href: `/collections/${collection.id}-${collection.slug}` }, { name: data.article.title, href: `/articles/${data.article.id}-${data.article.slug}` }]} />
<ArticleHeader name={data.article.title} description={data.article.description} time_to_read={data.article.time_to_read} difficulty={data.article.difficulty} stepped_guide_available={data.article.stepped_guide_available} image={data.article.image} />
<section class="container markdown-section">
	{@html md_html}
</section>
<button class="scroll_top_button" class:hide={!show_scroll_top_button} onclick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
	<ChevronUp size={25} style="translate: 0 -0.5px"/>
</button>

<style>
	.container {
		margin-top: 265px;
		padding: 16px;
		box-sizing: border-box;
		max-width: 100%;
		overflow-wrap: break-word;
		word-wrap: break-word;
		word-break: normal;
		hyphens: auto;
		-webkit-hyphens: auto;
		-moz-hyphens: auto;
		-ms-hyphens: auto;
	}
	
	.markdown-section {
		line-height: 1.6;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.scroll_top_button {
		position: fixed;
		bottom: 16px;
		right: 16px;
		background-color: var(--color-background-primary);
		border: 1px solid var(--color-border);
		border-radius: 32px;
		width: 50px;
		height: 50px;
		cursor: pointer;
		padding: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: cubic-bezier(0.47, 0, 0.23, 1.38) .3s;
		color: var(--color-text-primary);
	}
	
	@media (hover: hover), (-ms-high-contrast: none) {
		.scroll_top_button:hover {
			background-color: var(--color-background-tertiary);
		}
	}
	
	.hide {
		opacity: 0;
		translate: 0 20px;
		scale: 0.5;
		pointer-events: none;
	}
</style>