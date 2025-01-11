<script lang="ts">
	import { ChartNoAxesColumnIncreasing, Clock, Footprints } from 'lucide-svelte';

	export let title: string;
	export let description: string;
	export let image: string;
	export let image_alt: string;
	export let id: number;
	export let slug: string;

	export let time_to_read: number;
	export let difficulty = 'Non déterminé';
	export let stepped_guide_available = false;
</script>

<a class="container" href="/articles/{id}-{slug}">
	<img src="{image}" alt="{image_alt}" />
	<div class="content">
		<h3>{title}</h3>
		<p>{description}</p>
		<div class="meta">
			<div>
				<Clock size="14" color="#707070" />
				<p>{time_to_read}min</p>
			</div>
			<div>
				<ChartNoAxesColumnIncreasing size="14" color="#707070" />
				<p>{difficulty}</p>
			</div>
			{#if stepped_guide_available}
				<div>
					<Footprints size="14" color="#707070" />
					<p>Disponible en pas à pas</p>
				</div>
			{/if}
		</div>
	</div>
</a>

<style>
    .container {
        overflow: hidden;
        background-color: #FFF;
        height: 100%;
        border-radius: 15px;
        border: 1px solid #D9D9D9;
        text-decoration: none;
        transition: cubic-bezier(0.47, 0, 0.23, 1.38) .3s;
    }

    .container img {
        width: 100%;
        aspect-ratio: 16/9;
        border-bottom: 1px solid #D9D9D9;
    }

    .content {
        padding: 10px 16px 16px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        align-self: stretch;
        margin: 0;
        color: #000;
        text-overflow: ellipsis;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: 18px;
    }

    p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        align-self: stretch;
        overflow: hidden;
        color: #707070;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px;
        margin: 0;
    }

    .meta {
        display: flex;
        gap: 10px;
        align-items: center;
        margin-top: 5px;
    }

		.meta > div {
				display: flex;
				gap: 5px;
				align-items: center;
		}

    .meta > div > p {
        font-size: 14px;
    }

    @media (hover: hover), (-ms-high-contrast: none) {
        .container:hover {
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.10);
            scale: 1.01;
        }
    }
</style>