import React from "react";

function PageButton({ page, onClick, isActive }) {
	return (
		<a onClick={() => onClick(page)} className={isActive && "is-active"}>
			{page}
		</a>
	);
}

export default PageButton;
