import { useSearch } from "@/hooks/useSearch";
import { SearchContext } from "./searchContext";

/* searchdata { offers, filters, page, changeFilter, pageChange, offersPromise }*/
export function SearchProvider({ children }) {
	const searchData = useSearch();
	return (
		<SearchContext.Provider value={searchData}>
			{children}
		</SearchContext.Provider>
	);
}
