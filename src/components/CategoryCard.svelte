<script lang="ts">
	import StarsMask from './StarsMask.svelte';

	export let name: string;
	export let number: number;
	export let icon: any;
	export let slug;
	export let id;
</script>

<a class="category_card" href="/collections/{id}-{slug}">
	<div class="stars">
		<StarsMask
			linearGradient="radial-gradient(ellipse farthest-side at right top, #FFFFFF08 0%, #FFFFFF00 100%)"
			color="#000"
		/>
	</div>
	<div class="icon">
		<svelte:component this={icon} size="20" color="#000" />
	</div>
	<div class="content">
		<h3>{name}</h3>
		<p>{number} {number > 1 ? "articles" : "article"}</p>
	</div>
</a>

<style>
    .stars {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .category_card {
        background-color: #FFF;
        display: flex;
        padding: 16px;
        flex-direction: column;
        align-items: flex-start;
        gap: 25px;
        align-self: stretch;
        border-radius: 15px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        overflow: hidden;
        position: relative;
        transition: cubic-bezier(0.47, 0, 0.23, 1.38) .2s;
				text-decoration: none;
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

    h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        align-self: stretch;
        overflow: hidden;
        color: #000;
        text-overflow: ellipsis;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
        margin: 0;
    }

    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        color: #707070;
        text-align: center;
        text-overflow: ellipsis;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 17px;
        margin: 0;
    }

    @media (hover: hover), (-ms-high-contrast: none) {
        .category_card:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.10);
            scale: 1.01;
        }
    }
</style>