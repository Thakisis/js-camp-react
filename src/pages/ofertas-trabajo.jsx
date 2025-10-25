import { Suspense } from "react";
import Header from "@/components/header";
import Search from "@/components/search";
import Offers from "@/components/offers";
import Pagination from "@/components/pagination";
import { SearchProvider } from "@/providers/searchProvider";
import ListPlaceHolder from "@/components/offers/list-placeholder";
function OfertasTrabajo() {
	return (
		<div>
			<Header />
			<main>
				<SearchProvider>
					<Search />

					<Suspense fallback={<ListPlaceHolder />}>
						<Offers />
						<Pagination />
					</Suspense>
				</SearchProvider>
			</main>
		</div>
	);
}

export default OfertasTrabajo;
