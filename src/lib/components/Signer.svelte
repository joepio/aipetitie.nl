<script lang="ts">
	import type { Signer } from '../../routes/api/signers/+server'

	export let s: Signer
</script>

<div class="signer">
	<div class="details">
		<h3 class="name">
			{#if s.twitter}
				<a href={`https://twitter.com/${s.twitter}`} target="_blank" rel="noopener noreferrer"
					>{s.naam}</a
				>
			{:else}
				{s.naam}
			{/if}
		</h3>
		{#if s.functie}
			<div class="function">{s.functie}</div>
		{/if}
	</div>
	{#if s.foto}
		<img src={s.foto} alt="" onError="this.style.display='none'" />
	{/if}
</div>

<style>
	.name,
	.name a {
		color: var(--brand);
		margin-bottom: 0.2rem;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	.signer {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}
	h3 {
		margin: 0;
	}
	img {
		width: 100%;
		max-width: 60px;
		max-height: 60px;
		border-radius: 999px;
		margin-left: auto;
	}
</style>
