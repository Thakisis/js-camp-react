import { filterlist } from "@/constants/data-select";
import Filter from "./filter";
function FilterSearch() {
	const filters = filterlist.map((select) => (
		<Filter key={select.field} {...select} />
	));
	return <div>{filters}</div>;
}

export default FilterSearch;
