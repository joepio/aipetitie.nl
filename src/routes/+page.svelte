<script lang="ts">
	import Signer from '$lib/components/Signer.svelte'

	const title = 'We need to Pause AI'
	export let data
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta
		property="og:description"
		content="We are risking human extinction. We need to pause AI development, right now."
	/>
</svelte:head>

<div class="split">
	<section class="petition">
		<div class="prose">
			<h1>Politiek, neem controle over AI</h1>
			<p>
				De opkomst van AI biedt kansen, maar brengt ook enorme risico's met zich mee. Daarom doen
				wij een oproep aan de Nederlandse politiek: neem controle over de ontwikkeling van AI. Zorg
				dat de mens bepaalt hoe een toekomst met AI eruitziet. Niet andersom.
			</p>
			<p>
				Niemand weet hoe een wereld met steeds geavanceerdere AI eruitziet. Als we AI voor ons laten
				werken en we de baten eerlijk verdelen, dan wordt de mensheid er beter van. Maar het kan ook
				radicaal verkeerd uitpakken. Want hoe meer AI in de buurt komt van menselijke vermogens, hoe
				meer het de fundamenten van onze samenleving raakt: ons werk, onze creativiteit, onze
				cultuur, onze informatievoorziening, onze democratie, onze soevereiniteit en de stabiliteit
				van onze mondiale systemen. Met grote risico's op ongelijkheid, onwaarachtigheid en
				onderdrukking.
			</p>
			<p>
				Menigeen is zich hiervan bewust, maar desondanks hebben onze overheden haast geen controle
				over de ontwikkeling van AI. Machtige bedrijven zoals Microsoft en Google bepalen het tempo
				en de richting. Daarbij zitten deze commerciële spelers in een ratrace om AI-doorbraken te
				forceren en nieuwe toepassingen op de markt te brengen. De consequenties zijn niet te
				overzien en we zijn er dus niet op voorbereid.
			</p>
			<p>
				Deskundigen, wetenschappers en burgerrechtenorganisaties maar ook programmeurs,
				tech-ondernemers en topmensen van internetbedrijven waarschuwen voor het existentiële risico
				dat AI in zich kan dragen en vrezen het scenario dat AI tegenover de mens komt te staan. Er
				gaan dan ook steeds meer stemmen op om nog dit jaar internationale afspraken te maken over
				een pauze in de ontwikkeling van AI. Maar met of zonder pauze, we mogen niet stilzitten. Ook
				de Nederlandse politiek moet in actie komen en ingrijpen door (wettelijke) voorwaarden te
				stellen aan AI. Met als doel om grip op de ontwikkelingen te krijgen, oncontroleerbare AI te
				vermijden, onwenselijke -economische of geopolitieke- machtsconcentraties te voorkomen en om
				onze democratische en rechtsstatelijke principes te beschermen.
			</p>
			<p>
				Het is tijd om publieke controle te nemen over de ontwikkeling van AI. En om ons voor te
				bereiden op wat komen gaat. Met regels. Met beperkingen. Met begrenzingen. Met kennis en
				kunde. Met een sleutelrol voor de overheid en de politiek. Daarom roepen wij de Nederlandse
				Tweede Kamer en het kabinet op tot het nemen van de volgende maatregelen:
			</p>
			<ul>
				<li>
					Neem een leidende rol in Europa en voer via EU-wetgeving hoogstaande regulering van
					AI-toepassingen door. Neem de AI-verordening nog dit jaar aan. Zorg dat geavanceerde AI,
					zoals foundation models, onder 'high risk' vallen, reduceer systemische risico's en dwing
					transparantie af over de training van het model.
				</li>
				<li>
					Versnel de aanname van het AI-verdrag in de Raad van Europa en (mede-)initieer het
					opzetten van een internationale top over AI op korte termijn.
				</li>
				<li>
					Vraag instanties met kennis en ervaring van AI om advies, verzoek om een snelle update van
					het WRR-rapport "Opgave AI" en koppel daaraan direct een rijksbreed actieplan.
				</li>
				<li>
					Laat door ieder ministerie in kaart brengen op welke gebieden AI fundamentele invloed zal
					uitoefenen en breng in kaart waar extra regelgeving nodig is om die invloed in goede banen
					te leiden. Stel als overheid ook een AI-inkoopstrategie vast.
				</li>
				<li>
					Informeer de Nederlandse bevolking op laagdrempelige wijze over de kansen en bedreigingen
					van de inzet van AI.
				</li>
				<li>
					Bewaak het onderscheid tussen menselijk en kunstmatig. Dwing af dat duidelijk is wanneer
					een uiting met AI tot stand is gekomen of wanneer een mens communiceert met AI. Dwing
					AI-ontwikkelaars publieke verantwoording af te leggen over de ontwikkelkeuzes die ze
					maken.
				</li>
				<li>
					Maak geld vrij voor een verdubbeling van de onderzoekscapaciteit op multidisciplinaire
					vakgebieden als AI Safety, AI en rechtsstaat en existentieel risico, bij bestaande
					instellingen en/of in een nieuw onderzoeksinstituut.
				</li>
			</ul>
			<p>
				Er is weinig tijd om bovenstaande doelen te realiseren. Al eerder veranderde de wereld door
				revolutionaire technologie, maar de snelheid waarmee dat gebeurt neemt iedere keer toe. Met
				AI is de wereld aan het veranderen met een ongekende -en deels ongeziene- snelheid en
				richting. We moeten vandaag beginnen met het organiseren van menselijke controle en publieke
				grip op kunstmatige intelligentie.
			</p>
		</div>
	</section>
	<section class="signers">
		<h2>Getekend door</h2>
		<div class="signers">
			{#each data.signers as s}
				<Signer {s} />
			{/each}
		</div>

		<h2>Zet ook je handtekening</h2>
		<a
			class="button"
			href="https://docs.google.com/forms/d/e/1FAIpQLSdYfWgS-rFd5-NRhvBm4AoWGR6xQ_0fZtzBALKRyiIsLptOYA/viewform?usp=sf_link"
		>
			Teken ook
		</a>
	</section>
</div>

<style>
	.petition {
		max-inline-size: 40rem;
	}
	.button {
		display: inline-block;
		padding: 0.5rem 1rem;
		background: var(--brand);
		color: white;
		text-decoration: none;
		border-radius: 0.5rem;
	}
	.signers {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.split {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}
</style>
