<script lang="ts">
	import Sign from './Sign.svelte'
	import Signer from './Signer.svelte'
	import Progress from './Progress.svelte'
	import { initiators } from '$lib/initiators'

	export let count = 0
</script>

<div class="wrapper">
	<Sign />
	<Progress {count} />
	<h2>Initiatiefnemers</h2>
	{#each initiators as s}
		<Signer {s} />
	{/each}
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
