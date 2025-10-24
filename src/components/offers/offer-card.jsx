import { getLocName, getTechName } from "@/lib/utils";

function OfferCard({ title, company, location, description, technology }) {
	const locationName = getLocName(location);
	const technologyList = technology.map((tech) => (
		<TechSpan key={tech} technology={tech} />
	));
	return (
		<article classCard="job-listing-card">
			<div classCard="job-listing-content" id="contenido">
				<h3>{title}</h3>
				<small>
					{company} | {locationName}
				</small>
				<p>{description}</p>
				<div id="tags">{technologyList}</div>
			</div>
			<button classCard="button-apply-job">Aplicar</button>
		</article>
	);
}
function TechSpan({ technology }) {
	return <span className="tag">{getTechName(technology)}</span>;
}

export default OfferCard;
