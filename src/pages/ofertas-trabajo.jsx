import Header from "@/components/header";
import Search from "@/components/search";
import Offers from "@/components/offers";
import Pagination from "@/components/pagination";
function OfertasTrabajo() {
	return (
		<div>
			<Header />
			<main>
				<Search />
				<Offers />
				<Pagination />
			</main>
		</div>
	);
}

export default OfertasTrabajo;
