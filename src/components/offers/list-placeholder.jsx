import { pageSize } from "@/constants/pagination";
import OfferPlaceholder from "./offer-placeholder";
function ListPlaceHolder() {
	const listadoplaceholder = new Array(pageSize)
		.fill(0)
		.map((_, i) => <OfferPlaceholder key={i} />);
	return (
		<section className="jobs-listings" style={{ opacity: 0.5 }}>
			{/* @ts-expect-error Async Server Component */}
			{listadoplaceholder}
		</section>
	);
}

export default ListPlaceHolder;
