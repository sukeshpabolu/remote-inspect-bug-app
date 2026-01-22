<script lang="ts">
	import { getItem } from '$lib/remote/items.remote.js';

	const item = $derived(await getItem());
	let a = $state(5);
	$inspect(a);
</script>

<br />

<button onclick={() => {a++}}>
	incr
</button>
<br />
{item.x}
<br />
{a}