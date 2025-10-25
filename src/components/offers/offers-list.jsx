import { use } from "react";
import OfferCard from "./offer-card";
import Pagination from "../pagination";
function OfferList({ promise }) {
	const { offers } = use(promise);
	console.log(offers);
	const offerslist = offers.map((offer) => (
		<OfferCard key={offer.title} {...offer} />
	));
	return (
		<>
			{offerslist}

			<Pagination />
		</>
	);
}

export default OfferList;
