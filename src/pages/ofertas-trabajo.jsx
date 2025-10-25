import { useState } from "react";

import Header from "@/components/header";
import Search from "@/components/search";
import Offers from "@/components/offers";
import { getOffers } from "@/services/getOffers";
function OfertasTrabajo() {
	const [filters, setFilters] = useState({});
	const changeFilter = (field, value) => {
		setFilters((prev) => {
			const newFilters = { ...prev, [field]: value };
			if (!value) delete newFilters[field];
			return newFilters;
		});
	};
	const offerPromise = getOffers({ url: "/api/ofertas.json", ...filters });

	return (
		<div>
			<Header />
			<main>
				<Search changeFilter={changeFilter} {...filters} />
				<Offers {...filters} offerPromise={offerPromise} />
			</main>
		</div>
	);
}

export default OfertasTrabajo;
