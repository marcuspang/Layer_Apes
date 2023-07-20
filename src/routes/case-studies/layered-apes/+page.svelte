<script lang="js">
	export let data;
</script>

<div>
	{#if data.props.layers !== null}
		{#each data.props.layers.split(',') as layer, index}
			<img
				src={'/layers/' + layer + '.png'}
				class="layer"
				style={'z-index: ' + index}
				alt={data.props.layers}
			/>
		{/each}
	{:else}
		<h1 class="title">Pass ?layer=(layer1,layer2,...) into the URL</h1>
	{/if}
</div>

<style>
	.layer {
		position: absolute;
	}
	.title {
		font-family: Arial, Helvetica, sans-serif;
	}
</style>
