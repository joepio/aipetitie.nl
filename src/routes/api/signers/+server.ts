import { json } from '@sveltejs/kit'

const originalSigs =
	'https://api.sheety.co/b964e185b8938b92a389210e29cbebf9/copyOfEersteOndertekenaarsPetitie/blad1'

const siteSigs =
	'https://api.sheety.co/b964e185b8938b92a389210e29cbebf9/ondertekenFormulier (responses)/formResponses1'

export type Signer = {
	naam: string
	functie?: string
	twitter?: string
	foto?: string
}

/** Converts drive URL to usable image */
function convertGoogleDriveUrl(s: Signer) {
	const url = s.foto
	if (url) {
		const parts = url.split('/')
		const id = parts[parts.length - 2]
		s.foto = `https://drive.google.com/uc?export=view&id=${id}`
	}
	return s
}

const bearer = 'SEIUGHNSEUIGNPEIESGFUNESPGNESGSUNSEIN'
const config = {
	headers: {
		Authorization: `Bearer ${bearer}`
	}
}

export type Sigs = {
	signers: Signer[]
	count: number
}

export async function GET() {
	const cache = await fetch(originalSigs, config)
	let orignalSigsData = await cache.json()
	let signers: Signer[] = orignalSigsData.blad1.map(convertGoogleDriveUrl)
	const headers = {
		'cache-control': 'public, max-age=3600',
		'content-type': 'application/json'
	}
	let sitesigsdata = await fetch(siteSigs, config)
	let sitesigs = await sitesigsdata.json()
	let count = sitesigs.formResponses1.length + signers.length

	const data: Sigs = {
		signers,
		count
	}

	return json(data, {
		status: 200,
		headers
	})
}
