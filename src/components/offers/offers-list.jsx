import { use } from "react";
import { SearchContext } from "@/providers/searchContext";
import OfferCard from "./offer-card";
function OfferList() {
	const { searchPromise } = use(SearchContext);
	console.log(searchPromise);
	const { offers } = use(searchPromise);

	return offers.map((offer) => <OfferCard key={offer.title} {...offer} />);
}

export default OfferList;
