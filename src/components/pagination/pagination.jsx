import { use } from "react";
import { SearchContext } from "@/providers/searchContext";
import { calculatePageRange } from "@/lib/utils";
import PageButton from "./page-button";
function Pagination() {
	const { page, pageChange, searchPromise } = use(SearchContext);
	const { totalPages } = use(searchPromise);
	console.log(page, totalPages);

	const paginas = calculatePageRange(page, totalPages);
	console.log(paginas);
	const listadopages = paginas.map((numPage, index) =>
		numPage !== "..." ? (
			<PageButton
				key={index}
				page={numPage}
				isActive={page === numPage}
				onClick={() => pageChange(numPage)}
			/>
		) : (
			<span key={index} className="dots">
				...
			</span>
		)
	);
	return <nav className="pagination">{listadopages}</nav>;
}

export default Pagination;
