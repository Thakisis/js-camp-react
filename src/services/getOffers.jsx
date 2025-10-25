let cache = null;
export async function getOffers({ url, page = 1, limit = 4, ...filters } = {}) {
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

		const start = (page - 1) * limit;
		const end = start + limit;
		const paginatedData = datafilter.slice(start, end);

		return {
			page,
			limit,
			total: datafilter.length,
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
