export async function getOffers(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(`Error al cargar ofertas: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error al obtener las ofertas:", error);
		return null;
	}
}

//function para obtener ofertas con paginacion y filtros
export async function getOffers2({ page = 1, limit = 4, ...filters } = {}) {
	try {
		const response = await fetch("/api/ofertas.json");
		if (!response.ok) {
			throw new Error(`Error al cargar ofertas: ${response.status}`);
		}

		const data = await response.json();
		const datafilter = data.filter((job) => {
			for (const [field, value] of Object.entries(filters)) {
				if (value && job[field] !== value) {
					return false;
				}
				return true;
			}
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
		console.error("Error al obtener las ofertas:", error);
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
