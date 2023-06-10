import { error } from '@sveltejs/kit'
import type { Sigs } from './api/signers/+server'

export async function load({ fetch }) {
	try {
		const response = await fetch('api/signers')
		const signers: Sigs = await response.json()
		return signers
	} catch (e) {
		console.error('error: ', e)
		throw error(404, `Could not find`)
	}
}
