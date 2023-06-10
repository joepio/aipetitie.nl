<script lang="ts">
	import type { Signer } from '../../routes/api/signers/+server'

	export let s: Signer
</script>

<!-- Currently hide all non-picture signers -->
{#if s.foto}
	<div class="signer">
		{#if s.foto}
			<img src={s.foto} alt={s.naam} />
		{/if}
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
	</div>
{/if}

<style>
	.name,
	.name a {
		color: var(--brand);
		margin-bottom: 0.2rem;
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
		max-width: 80px;
		max-height: 80px;
		border-radius: 999px;
	}
</style>
