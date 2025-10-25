import { filterlist } from "@/constants/data-select";
import Filter from "./filter";
function FilterSearch({ changeFilter, ...filters }) {
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
