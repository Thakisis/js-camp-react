import { Suspense } from "react";
import Header from "@/components/header";
import Search from "@/components/search";
import Offers from "@/components/offers";
import Pagination from "@/components/pagination";
import { SearchProvider } from "@/providers/searchProvider";

function OfertasTrabajo() {
	return (
		<div>
			<Header />
			<main>
				<SearchProvider>
					<Search />
					<Suspense fallback={<div>Loading offers...</div>}>
						<Offers />
						<Pagination />
					</Suspense>
				</SearchProvider>
			</main>
		</div>
	);
}

export default OfertasTrabajo;
