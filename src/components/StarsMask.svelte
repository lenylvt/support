<script lang="ts">
	export let color = '#F00';
	export let linearGradient: string = ``;

</script>

<div class="mask" style="mask: {linearGradient}">
	<div class="stars" style="background-color: {color};">

	</div>
</div>

<style>
    .mask {
        width: 100%;
        height: 100%;
    }
    .stars {
        width: 100%;
        height: 100%;
        mask: url("/StarsMask.png") luminance repeat;
    }
</style>