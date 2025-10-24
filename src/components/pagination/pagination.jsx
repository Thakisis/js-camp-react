import { useState } from "react";
import { calculatePageRange } from "@/lib/utils";
import PageButton from "./page-button";
function Pagination({ total = 20, limit = 3 }) {
	const [selPage, setPage] = useState(6);
	const totalPages = Math.ceil(total / limit);
	const paginas = calculatePageRange(selPage, totalPages);
	const clickHandler = (page) => {
		setPage(page);
	};
	const listadopages = paginas.map((page) =>
		page !== "..." ? (
			<PageButton
				page={page}
				isActive={page === selPage}
				onClick={clickHandler}
			/>
		) : (
			<span className="dots">... </span>
		)
	);
	return <nav class="pagination">{listadopages}</nav>;
}

export default Pagination;
