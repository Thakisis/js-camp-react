import OffersList from "./offers-list";

function Offers({ offerPromise }) {
	return (
		<section className="jobs-listings">
			{/* @ts-expect-error Async Server Component */}
			<OffersList promise={offerPromise} />
		</section>
	);
}

export default Offers;
