import { use } from "react";
import OfferCard from "./offer-card";
function OfferList({ promise }) {
	const offerslist = use(promise);
	return offerslist.map((offer) => <OfferCard key={offer.title} {...offer} />);
}

export default OfferList;
