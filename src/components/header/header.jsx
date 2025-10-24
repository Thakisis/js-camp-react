import React from "react";

function Header() {
	return (
		<header className="navbar">
			<div className="navbar-brand">
				<svg
					className="h-8 w-8"
					fill="currentColor"
					viewBox="0 0 48 48"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
						fill="currentColor"
						fillRule="evenodd"
					></path>
				</svg>
				<h1>DevJobs</h1>
			</div>
			<nav className="navbar-menu">
				<a href="index.html" className="navbar-menu-item">
					Inicio
				</a>
				<a href="#" className="navbar-menu-item active">
					Empleos
				</a>
				<a href="#" className="navbar-menu-item">
					Empresas
				</a>
				<a href="#" className="navbar-menu-item">
					Salarios
				</a>
			</nav>
			<div className="navbar-end">
				<button className="btn-secondary">Subir CV</button>

				<img
					src="https://avatars.githubusercontent.com/u/102880137?v=4"
					alt=""
				/>
			</div>
		</header>
	);
}

export default Header;
