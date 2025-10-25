import { useState } from "react";

import Header from "@/components/header";
import Search from "@/components/search";
import Offers from "@/components/offers";
import Pagination from "@/components/pagination";
function OfertasTrabajo() {
	const [filters, setFilters] = useState({});
	const changeFilter = (field, value) => {
		setFilters((prev) => ({ ...prev, [field]: value }));
	};
	return (
		<div>
			<Header />
			<main>
				<Search changeFilter={changeFilter} {...filters} />
				<Offers />
				<Pagination />
			</main>
		</div>
	);
}

export default OfertasTrabajo;
