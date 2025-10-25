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
	const listadopages = paginas.map((page, index) =>
		page !== "..." ? (
			<PageButton
				key={index}
				page={page}
				isActive={page === selPage}
				onClick={clickHandler}
			/>
		) : (
			<span key={index} className="dots">
				...{" "}
			</span>
		)
	);
	return <nav className="pagination">{listadopages}</nav>;
}

export default Pagination;
