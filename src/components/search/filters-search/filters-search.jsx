import { filterlist } from "@/constants/data-select";
import Filter from "./filter";
import { use } from "react";
import { SearchContext } from "@/providers/searchContext";
function FilterSearch() {
	const { filters, changeFilter } = use(SearchContext);
	const filterelements = filterlist.map((select) => (
		<Filter
			key={select.field}
			{...select}
			changeFilter={changeFilter}
			value={filters[select.field]}
		/>
	));
	return <div>{filterelements}</div>;
}

export default FilterSearch;
