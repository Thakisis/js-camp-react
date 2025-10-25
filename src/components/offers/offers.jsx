import { Suspense } from "react";
import OffersList from "./offers-list";
function Offers({ offerPromise }) {
	return (
		<section className="jobs-listings" id="jobs">
			<Suspense fallback={<div>Loading offers...</div>}>
				{/* @ts-expect-error Async Server Component */}
				<OffersList promise={offerPromise} />
			</Suspense>
		</section>
	);
}

export default Offers;
