<script lang="ts">
	import { ChartNoAxesColumnIncreasing, Clock, Footprints } from 'lucide-svelte';

	export let name: string;
	export let description: string;
	export let image: string;

	export let time_to_read: number;
	export let difficulty = 'Non déterminé';
	export let stepped_guide_available = false;
</script>

<header style="background-image: url('{image}')">
	<div class="gradient"></div>
	<div class="container">
		<h1>{name}</h1>
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
</header>

<style>
    header {
        margin-top: 105px;
        position: absolute;
				left: 0;
				right: 0;
        height: 200px;
				display: flex;
				justify-content: center;
    }
		.gradient {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				background: radial-gradient(101.07% 93.95% at 100.89% -1.59%, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
    }
		.container {
				width: 100%;
				max-width: 800px;
				padding: 16px;
				box-sizing: border-box;
				z-index: 1;
				display: flex;
				flex-direction: column;
				justify-content: end;
		}
		h1 {
				font-size: 32px;
				font-weight: 700;
        margin: 0;
		}
		p {
				font-size: 16px;
				font-weight: 400;
				color: #707070;
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
</style>