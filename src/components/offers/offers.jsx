import OffersList from "./offers-list";

function Offers() {
	return (
		<section className="jobs-listings">
			{/* @ts-expect-error Async Server Component */}
			<OffersList />
		</section>
	);
}

export default Offers;
