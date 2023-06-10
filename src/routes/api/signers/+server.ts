import { json } from '@sveltejs/kit'

const url =
	'https://api.sheety.co/b964e185b8938b92a389210e29cbebf9/copyOfEersteOndertekenaarsPetitie/blad1'

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

export async function GET() {
	const cache = await fetch(url)
	let data = await cache.json()
	// Do something with the data
	let signers: Signer[] = data.blad1.map(convertGoogleDriveUrl)
	const headers = {
		'cache-control': 'public, max-age=3600',
		'content-type': 'application/json'
	}

	return json(signers, {
		status: 200,
		headers
	})
}
