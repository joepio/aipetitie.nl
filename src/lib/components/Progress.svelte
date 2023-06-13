<script lang="ts">
	export let count: number = 0
	$: goal = Math.ceil((count + 1) / 1000) * 1000
	$: percentage = Math.round((count / goal) * 100)
</script>

<div class="letsgo">Nu <b>{count} handtekeningen</b>, op naar de {goal}!</div>
<div class="wrapper">
	<div class="progress" style={`transform: scaleX(${percentage / 100})`} />
</div>

<style>
	.wrapper {
		position: relative;
		background-color: var(--brand-subtle);
		height: 1rem;
		border-radius: 1rem;
		overflow: hidden;
	}
	.progress {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		bottom: 0;
		background: var(--brand);
		transform-origin: left;
		transform: scaleX(0);
		transition: transform 0.3s ease-out;
	}
</style>
