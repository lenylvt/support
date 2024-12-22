<script>
import SearchBar from './SearchBar.svelte';
import StarsMask from './StarsMask.svelte';
</script>

<header>
	<div class="stars">
		<StarsMask linearGradient="linear-gradient(200deg, #FFFFFF15 0%, #FFFFFF00 100%)" color="#FFF"/>
	</div>
	<div class="container">
		<h1>
			Besoin d’aide ?<br>
			Nous avons la solution.
		</h1>
		<SearchBar />
	</div>
</header>

<style>
		header {
				position: absolute;
				top: 60px;
				left: 0;
				right: 0;
        background-color: var(--color-primary);
				display: flex;
				justify-content: center;
		}
    .container {
        height: 200px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: #FFF;
				flex-direction: column;
				gap: 30px;
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
		h1 {
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        line-height: 95%;
        letter-spacing: -0.96px;
				margin: 0;
        z-index: 10;
		}
</style>