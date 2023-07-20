<script lang="js">
	export let data;
	// if (document) {
	// 	const urlParams = document.location.href.split('?');

	// 	if (urlParams?.length > 0) {
	// 		const layers = urlParams[1].split('=')[1].split(',');
	// 		console.log({ layers });
	// 		for (let i = 0; i < layers.length; i++) {
	// 			if (layers[i] != '0000') {
	// 				const img = document.createElement('img');
	// 				img.setAttribute('src', '/layers/' + layers[i] + '.png');
	// 				img.setAttribute('class', 'layer');
	// 				img.setAttribute('style', 'z-index:' + i);
	// 			}
	// 		}
	// 	}
	// }
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
