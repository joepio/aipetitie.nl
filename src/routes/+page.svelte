<script lang="ts">
	import Initiators from '$lib/components/Initiators.svelte'
	import Progress from '$lib/components/Progress.svelte'
	import Sign from '$lib/components/Sign.svelte'
	import Signer from '$lib/components/Signer.svelte'

	const title = 'AI Petitie: Politiek, neem controle over AI'
	export let data
	let count = data.count
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta
		property="og:description"
		content="De opkomst van AI biedt kansen, maar brengt ook enorme risico's met zich mee. Daarom doen wij een oproep aan de Nederlandse politiek: neem controle over de ontwikkeling van AI. Zorg dat de mens bepaalt hoe een toekomst met AI eruitziet. Niet andersom."
	/>
</svelte:head>

<img src="/logo.png" alt="AI Petitie" class="logo" />
<div class="split">
	<section class="petition">
		<div class="prose">
			<h1>Politiek, neem controle over AI</h1>

			<p>
				De opkomst van AI biedt kansen, maar brengt ook enorme risico's met zich mee. Daarom doen
				wij een oproep aan de Nederlandse politiek: neem controle over ontwikkeling van AI. Zorg dat
				de mens bepaalt hoe een toekomst met AI eruitziet. Niet andersom.
			</p>

			<p>
				Wij roepen de Nederlandse Tweede Kamer en het kabinet op tot het nemen van de volgende
				maatregelen:
			</p>

			<ul>
				<li>
					Neem een leidende rol in Europa en versnel regulering van AI-toepassingen via
					EU-wetgeving. Neem de AI-verordening nog dit jaar aan. Zorg dat geavanceerde AI, zoals
					foundation models, onder 'high risk' vallen en dwing transparantie af over de training van
					het model.
				</li>
				<li>
					Versnel de aanname van het AI verdrag in de Raad van Europa en neem het initiatief tot het
					opzetten van een internationale top over AI op korte termijn.
				</li>
				<li>
					Laat door ieder ministerie in kaart brengen op welke gebieden AI fundamentele invloed zal
					uitoefenen en breng in kaart waar extra regelgeving nodig is om die invloed in goede banen
					te leiden.
				</li>
				<li>
					Bewaak het onderscheid tussen menselijk en kunstmatig. Dwing af dat duidelijk is wanneer
					een uiting met AI tot stand is gekomen of wanneer een mens communiceert met AI.
				</li>
				<li>
					Het is onduidelijk wat de investeringen in onderzoek naar risico's van AI zijn, maar wel
					zeker is dat hier veel minder FTE's aan besteed worden dan aan onderzoek naar AI-kansen.
					Daarom moet er de komende jaren worden toegewerkt naar 300 voltijdsonderzoeksposities op
					de vakgebieden AI Safety, AI en rechtsstaat en existentieel risico in een nieuw op te
					zetten onderzoeksinstituut en/of bij bestaande instituten.
				</li>
				<li>
					Verzoek om een snelle update van het WRR-rapport "Opgave AI" en koppel daaraan direct een
					rijksbreed actieplan.
				</li>
			</ul>

			<p>
				Er is weinig tijd om bovenstaande doelen te realiseren. Al eerder veranderde de wereld door
				revolutionaire technologie, maar de snelheid waarmee dat gebeurt neemt iedere keer toe. Door
				AI is de wereld aan het veranderen met een ongekende -en deels ongeziene- snelheid en
				richting. We moeten vandaag beginnen met het organiseren van menselijke controle en grip op
				kunstmatige intelligentie.
			</p>
			<Initiators {count} />
			<h2>Onze petitie</h2>
			<p>
				Deze petitie wordt gelanceerd in een tijd waarin we de ontwikkeling van AI een grote vlucht
				zien nemen. Niemand weet hoe een wereld met steeds geavanceerdere AI eruit ziet. Als we AI
				voor ons laten werken en we de baten eerlijk verdelen, dan wordt de mensheid er beter van.
				Maar het kan ook radicaal verkeerd uitpakken. Want hoe meer AI op menselijke intelligentie
				gaat lijken, hoe meer het de fundamenten van onze samenleving raakt: ons werk, onze
				creativiteit, onze cultuur, onze informatievoorziening, onze democratie, onze soevereiniteit
				en de stabiliteit van onze mondiale systemen. Met grote risico’s op ongelijkheid,
				onwaarachtigheid en onderdrukking. Menigeen is zich hiervan bewust, maar desondanks hebben
				onze overheden haast geen controle over de ontwikkeling van AI. Machtige bedrijven zoals
				Microsoft en Google bepalen het tempo en de richting. Daarbij zitten deze commerciële
				spelers in een ratrace om AI-doorbraken te forceren en nieuwe toepassingen op de markt te
				brengen. De consequenties zijn niet te overzien en we zijn er dus niet op voorbereid.
			</p>
			<p>
				Deskundigen, wetenschappers en burgerrechtenorganisaties maar ook programmeurs,
				tech-ondernemers en topmensen van internetbedrijven waarschuwen voor het existentiële risico
				dat AI in zich draagt en vrezen het scenario dat AI tegenover de mens komt te staan. Er gaan
				dan ook steeds meer stemmen op om nog dit jaar internationale afspraken te maken over een
				pauze in de ontwikkeling van AI. Maar met of zonder pauze, we mogen niet stilzitten. Ook de
				Nederlandse politiek moet in actie komen en ingrijpen door (wettelijke) voorwaarden te
				stellen aan AI. Met als doel om oncontroleerbare AI te voorkomen en onze menselijke
				waardigheid, onze economische en geopolitieke machtsverdeling en onze democratische en
				rechtsstatelijke principes te beschermen. Het is tijd om publieke controle te nemen over de
				ontwikkeling van AI. En om ons voor te bereiden op wat komen gaat. Met regels. Met
				beperkingen. Met begrenzingen. Met kennis en kunde. Met een sleutelrol voor de overheid en
				de politiek. Tijd om te zorgen voor meer controle over AI.
			</p>
		</div>
	</section>
	<section class="sign">
		<Progress {count} />
		<Sign />
		<h3>Zij gingen je voor:</h3>
		<div class="signers">
			{#each data.signers as s}
				<Signer {s} />
			{/each}
		</div>
		<Sign />
	</section>
</div>

<style>
	.logo {
		/* max-width: 20rem; */
		/* or max 50vw */
		max-width: calc(min(20rem, 50vw));
		margin: auto;
		display: block;
	}

	h1 {
		margin-top: 0;
	}
	.petition {
		max-inline-size: 40rem;
		flex: 3;
	}
	.sign {
		gap: 1rem;
		display: flex;
		flex-direction: column;
		/* max-width: 30rem; */
		flex: 2;
	}
	.signers {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		/* max-height: 30rem;
		overflow-y: auto; */
	}
	.split {
		flex-direction: column;
	}
	/* Show beneath on small screens */
	@media (min-width: 60rem) {
		.split {
			display: flex;
			flex-direction: row;
			gap: 4rem;
		}
		.sign {
			display: flex;
			flex-direction: column;
		}

		.signers {
			/* overflow-y: scroll; */
		}
	}
</style>
