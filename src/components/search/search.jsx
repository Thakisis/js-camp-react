import TextSearch from "./text-search";
import FilterSearch from "./filters-search";
function Search({ changeFilter, ...filters }) {
	console.log(filters);
	return (
		<section>
			<h2>Encuentra tu próximo trabajo</h2>
			<p>
				Explora miles de ofertas de trabajo para desarrolladores en todo el
				mundo.
			</p>
			<form id=" form" role="search">
				<TextSearch changeFilter={changeFilter} value={filters.text} />
				<FilterSearch changeFilter={changeFilter} {...filters} />
				<button id="btn-reset" className="btn-reset" type="button">
					Reset filters
				</button>
			</form>
		</section>
	);
}

export default Search;
