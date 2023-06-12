<script lang="ts">
	import type { Signer as SignerType } from '../../routes/api/signers/+server'
	import Sign from './Sign.svelte'
	import Signer from './Signer.svelte'
	import Progress from './Progress.svelte'

	/** Converts drive URL to usable image */
	function convertGoogleDriveUrl(s: SignerType) {
		const url = s.foto
		if (url) {
			const parts = url.split('/')
			const id = parts[parts.length - 2]
			s.foto = `https://drive.google.com/uc?export=view&id=${id}`
		}
		return s
	}

	const initiators: SignerType[] = [
		{
			naam: 'Mark Thiessen',
			functie: 'Oprichter Nieuwe Vrije Eeuw',
			twitter: '@thiessenmark',
			foto: 'https://drive.google.com/file/d/1Vr6xahDz1m6jzDi99ygQoc-4UDLnYo1N/view?usp=drive_link'
		},
		{
			naam: 'Kees Verhoeven',
			functie: 'Oprichter Bureau Digitale Zaken, auteur, voormalig lid Tweede Kamer',
			twitter: '@KeesVee',
			foto: 'https://drive.google.com/file/d/1rUYbcHY0eKrvhNFy28aGBIBdwvCShphK/view?usp=drive_link'
		},
		{
			naam: 'Myrthe Hilkens',
			functie: 'Campagnestrateeg, Voormalig lid Tweede Kamer',
			twitter: '@MyrtheHilkens',
			foto: 'https://drive.google.com/file/d/1WFFj9gCDiB5JkD3qyi0c55fj3ARV4OFq/view?usp=drive_link'
		},
		{
			naam: 'Otto Barten',
			functie: 'Directeur Existential Risk Observatory',
			twitter: '@BartenOtto',
			foto: 'https://drive.google.com/file/d/113VaB6JUvLciEWCZEMzpiSaL1VYktReE/view?usp=drive_link'
		},
		{
			naam: 'Ruben Dieleman',
			functie: 'Campagneleider Existential Risk Observatory'
		},
		{
			naam: 'Joep Meindertsma',
			functie: 'Oprichter Pause AI',
			twitter: '@joepmeindertsma',
			foto: 'https://drive.google.com/file/d/16pFiT5A2a1hDdk7pNPKTamJ2j0WUSQwD/view?usp=drive_link'
		},
		{
			naam: 'Marijn van Vliet',
			functie: 'Zelfstandig Politiek Adviseur technologie en digitaal'
		}
	].map(convertGoogleDriveUrl)

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
