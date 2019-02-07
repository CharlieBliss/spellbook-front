import qs from 'qs'
import 'isomorphic-fetch'

export async function handleSearch(endpoint='spells', search, ordering="name") {
	const params = qs.stringify({
		search,
		ordering
	}, {
		skipNulls: true,
	})

	const url = `http://localhost:8000/${endpoint}?${params}`

	const response = await fetch(url)
	if(response.status === 200) {
		return response.json()
	}
	throw new Error('No Results')
}