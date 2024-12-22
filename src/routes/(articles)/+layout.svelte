<script lang="ts">
	import { Menu } from 'lucide-svelte';
	import SearchBar from '../../components/SearchBar.svelte';

	let { children } = $props();

	const year = new Date().getFullYear();
</script>

<div class="navigation_container">
	<nav>
		<a href="/">
			<img src="/logo.svg" alt="Papillon Support">
		</a>
		<button>
			<Menu size="20" color="#FFF" />
		</button>
	</nav>
	<div>
		<SearchBar />
	</div>
</div>
<main>
	{@render children()}
</main>
<footer>
	<p>{year} Papillon et les contributeurs associés. Ce site web est open-source.</p>
</footer>

<style>
    .navigation_container {
        background-color: var(--color-primary);
        display: flex;
        align-items: center;
        width: 100vw;
        border-bottom: .5px solid rgba(255, 255, 255, 0.30);
        position: fixed;
        z-index: 1000;
        flex-direction: column;
    }

    nav {
        padding: 12.5px 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: var(--sizing-max-width);
    }

    nav > button {
        height: 35px;
        width: 35px;
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.20);
        background-color: rgba(255, 255, 255, 0.10);
        display: flex;
        padding: 7px;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        transition-duration: .1s;
    }

    nav > button:hover {
        background-color: rgba(255, 255, 255, 0.20);
    }

    nav > button:active {
        background-color: rgba(255, 255, 255, 0.15);
    }

		.navigation_container > div {
				padding: 0 16px;
				box-sizing: border-box;
				margin-bottom: 13px;
				max-width: 800px;
				width: 100%;
		}

    main {
        margin-top: 60px;
        width: 100%;
        max-width: var(--sizing-max-width);
    }

    footer {
        background-color: var(--color-background-tertiary);
        width: 100vw;
        height: 60px;
        margin-top: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #707070;
        font-size: 12px;
        border-top: .5px solid #CCC;
        padding: 0 16px;
        box-sizing: border-box;
        text-align: center;
    }
</style>