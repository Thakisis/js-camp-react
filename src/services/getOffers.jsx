import { pageSize } from "@/constants/pagination";
let cache = null;
export async function getOffers({
	url,
	page = 1,
	limit = pageSize,
	...filters
} = {}) {
	try {
		const data = await fetchCached(url);

		const datafilter = data.filter((job) => {
			const entries = Object.entries(filters);

			if (entries.length === 0) return true;
			return entries.reduce((match, [key, value]) => {
				const matchValue = job[key].includes(value);
				return match && matchValue;
			}, true);
		});
		// delay para ver el fallback de suspense
		await sleep(0.5, 1.5);
		const start = (page - 1) * limit;
		const end = start + limit;
		const paginatedData = datafilter.slice(start, end);

		return {
			page,
			limit,
			totalPages: Math.ceil(datafilter.length / limit),
			offers: paginatedData,
		};
	} catch (error) {
		return {
			page,
			limit,
			total: 0,
			totalPages: 0,
			offers: [],
			error: error.message,
		};
	}
}

async function fetchCached(url) {
	if (cache) return cache;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Error al cargar ofertas: ${response.status}`);
	}

	const data = await response.json();
	cache = data;
	return data;
}
function sleep(minSeconds, maxSeconds) {
	const delay = (Math.random() * (maxSeconds - minSeconds) + minSeconds) * 1000;
	return new Promise((resolve) => setTimeout(resolve, delay));
}
