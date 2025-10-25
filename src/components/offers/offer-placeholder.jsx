export default function OfferPlaceholder() {
	return (
		<article className="job-listing-card placeholder">
			<div className="job-listing-content" id="contenido">
				<div className="title place"></div>
				<small>
					<span className="company place"></span>
					<span className="location place"></span>
				</small>
				<div className="description place"></div>
				<div id="tags">
					<span className="technology place"></span>
					<span className="experience place"></span>
					<span className="contract place"></span>
				</div>
			</div>
			<div className="button place"></div>
		</article>
	);
}
