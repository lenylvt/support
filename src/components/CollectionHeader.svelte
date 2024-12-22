<script lang="ts">
	import StarsMask from './StarsMask.svelte';

	export let name: string;
	export let number: number;
	export let icon: any;
</script>

<header>
	<div class="stars">
		<StarsMask linearGradient="linear-gradient(200deg, #FFFFFF08 0%, #FFFFFF00 100%)" color="#000"/>
	</div>
	<div class="container">
		<div class="icon">
			<svelte:component this={icon} size="20" color="#000" />
		</div>
		<div class="content">
			<h1>{name}</h1>
			<p>{number} {number > 1 ? "articles" : "article"}</p>
		</div>
	</div>
</header>

<style>
    header {
        position: absolute;
        top: 165px;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }
    .container {
        display: flex;
        color: #000;
        flex-direction: column;
        gap: 25px;
        padding: 16px;
        box-sizing: border-box;
        width: 100%;
        max-width: 800px;
    }
    .stars {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
    }
    .icon {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 7px;
        box-sizing: border-box;
        background-color: var(--color-background-tertiary);
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.10);
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 3px;
        align-self: stretch;
    }
		h1 {
				font-size: 32px;
				font-weight: 600;
				margin: 0;
				line-height: 32px;
		}
		p {
				font-size: 17px;
				margin: 0;
				color: #707070;
		}
</style>