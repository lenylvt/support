<script lang="ts">
	import { Menu } from 'lucide-svelte';
	let { children } = $props();
	let openMenu = $state(false);

	const year = new Date().getFullYear();
</script>

<div class="navigation_container">
	<nav>
		<a href="/">
			<img src="/logo.svg" alt="Papillon Support">
		</a>
		<button onclick={() => openMenu = !openMenu}>
			<Menu size="20" color="#FFF" />
		</button>
		<div class="menu" class:hidden={!openMenu}>
			<a href="https://papillon.bzh">Retourner sur Papillon</a>
			<a href="https://github.com/PapillonApp">Papillon sur Github</a>
			<hr>
			<a href="https://docs.papillon.bzh">Documentation développeur</a>
			<a href="https://github.com/PapillonApp/support">Contribuer à la documentation</a>
		</div>
	</nav>
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
        width: 100%;
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
				position: relative;
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

		nav > .menu {
				position: absolute;
				background-color: #FFF;
				border: 1px solid #D9D9D9;
				border-radius: 10px;
				width: 250px;
				right: 16px;
				top: 65px;
				padding: 10px;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				gap: 0;
				transition: cubic-bezier(0.47, 0, 0.23, 1.38) .3s;
		}

		nav > .menu a {
				padding: 10px 5px;
				border-radius: 5px;
				text-decoration: none;
				color: #707070;
        transition: cubic-bezier(0.47, 0, 0.23, 1.38) .3s;
    }

		nav > .menu hr {
				border: none;
				border-bottom: 1px solid #202020;
				opacity: 0.1;
				margin: 10px 0;
    }

		.hidden {
				opacity: 0;
				transform: scale(0.95) translateY(-10px);
				pointer-events: none;
		}

		@media not all and (hover: none) {
        nav > .menu a:hover {
            padding: 10px 10px;
            background-color: #0E7CCB40;
						color: #0E7CCB;
        }
    }

    main {
        margin-top: 60px;
        width: 100%;
        max-width: var(--sizing-max-width);
    }

    footer {
        background-color: var(--color-background-tertiary);
        width: 100%;
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