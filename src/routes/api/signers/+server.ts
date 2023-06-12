import { initiators } from '$lib/initiators'
import { json } from '@sveltejs/kit'

const originalSigsUrl =
	'https://api.sheety.co/b964e185b8938b92a389210e29cbebf9/eersteOndertekenaarsPetitieV2/blad1'

const formSigsUrl =
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
const fetchConfig = {
	headers: {
		Authorization: `Bearer ${bearer}`
	}
}

export type Sigs = {
	signers: Signer[]
	count: number
}

export async function GET() {
	const cache = await fetch(originalSigsUrl, fetchConfig)
	let orignalSigsData = await cache.json()
	let signers: Signer[] = orignalSigsData.blad1.map(convertGoogleDriveUrl)

	const headers = {
		'cache-control': 'public, max-age=60',
		'content-type': 'application/json'
	}
	let formSigsResp = await fetch(formSigsUrl, fetchConfig)
	let formSigs = await formSigsResp.json()
	let count = formSigs.formResponses1.length + signers.length

	// remove initiators
	signers = signers.slice(initiators.length)

	const data: Sigs = {
		signers,
		count
	}

	return json(data, {
		status: 200,
		headers
	})
}
