export function load({ url }) {
	const layers = url.searchParams.get('layers');
	return {
		props: {
			layers
		}
	};
}
